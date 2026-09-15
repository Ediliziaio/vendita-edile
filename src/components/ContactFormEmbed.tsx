import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackContact } from "@/lib/analytics";
import { captureUtmParams, withUtmParams } from "@/lib/utm";

interface ContactFormEmbedProps {
  className?: string;
  /** Altezza di riserva in px: occupa lo spazio prima del caricamento e
   *  resta come fallback se il form non comunica la propria altezza. */
  height?: number;
}

// Il form EiC ha `body{min-height:100vh}` e centra il contenuto. Dentro un
// iframe 100vh è l'altezza dell'iframe stesso, quindi l'altezza che il form
// comunica è max(contenuto, iframe): non può mai scendere sotto l'iframe.
// Usarla così com'è blocca l'iframe al valore più alto mai visto e lascia
// spazio vuoto sopra e sotto il modulo. Per leggere l'altezza vera stringiamo
// l'iframe sotto quella del contenuto ("sonda"): a quel punto il valore è esatto.
const PROBE_HEIGHT = 160;
const MAX_HEIGHT = 1400;
/** Attesa massima di una risposta prima di ripiegare su un'altezza sicura. */
const REPORT_TIMEOUT_MS = 1500;
/** Oltre questo numero di crescite in pochi secondi è un loop: le ignoriamo. */
const MAX_GROWTHS_PER_WINDOW = 6;
const GROWTH_WINDOW_MS = 3000;

/**
 * Form di richiesta contatto embeddato (Form Builder EdiliziaInCloud).
 * L'URL è centralizzato in siteConfig.contactFormEmbedUrl.
 * Traccia un evento Meta "Contact" quando il form entra in viewport (una volta).
 */
export function ContactFormEmbed({ className, height = 620 }: ContactFormEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  // L'iframe non vede l'indirizzo di questa pagina: UTM, gclid e fbclid
  // dell'atterraggio arrivano al CRM solo se li aggiungiamo al suo indirizzo.
  // Calcolato nel browser (nel prerender non ci sono né URL né storage).
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    captureUtmParams();
    setSrc(withUtmParams(siteConfig.contactFormEmbedUrl));
  }, []);

  // Altezza dell'iframe e spazio riservato sul contenitore mentre si misura,
  // così la pagina sotto il form non salta durante la sonda.
  const [frameHeight, setFrameHeight] = useState(PROBE_HEIGHT);
  const [reserve, setReserve] = useState<number | null>(height);
  const frameHeightRef = useRef(PROBE_HEIGHT);
  const resolved = useRef(false);
  const timer = useRef<number>();
  const growths = useRef<number[]>([]);
  const lastWidth = useRef<number | null>(null);

  const applyHeight = useCallback((h: number) => {
    frameHeightRef.current = h;
    setFrameHeight(h);
    setReserve(null);
    resolved.current = true;
    window.clearTimeout(timer.current);
  }, []);

  /** Se il form non risponde entro il timeout, ripiega su `restoreTo`. */
  const awaitReport = useCallback(
    (restoreTo: number) => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        if (!resolved.current) applyHeight(restoreTo);
      }, REPORT_TIMEOUT_MS);
    },
    [applyHeight]
  );

  /** Rimisura il contenuto: serve quando il form può essere diventato più basso. */
  const probe = useCallback(() => {
    const previous = frameHeightRef.current;
    if (previous <= PROBE_HEIGHT) return;
    // Se il contenuto non è cambiato il form non invia nulla (il body non
    // cambia misura): allo scadere del timeout torniamo all'altezza di prima.
    resolved.current = false;
    growths.current = [];
    setReserve(previous);
    frameHeightRef.current = PROBE_HEIGHT;
    setFrameHeight(PROBE_HEIGHT);
    awaitReport(previous);
  }, [awaitReport]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("ediliziaincloud")) {
        return;
      }
      const data = e.data as { type?: string; height?: number } | undefined;
      if (!data || typeof data !== "object") return;

      // Dopo l'invio il messaggio di conferma è più basso del modulo.
      if (data.type === "eic-lead-form-submit") {
        probe();
        return;
      }
      if (data.type !== "eic-lead-form-height" || typeof data.height !== "number") {
        return;
      }

      const h = Math.min(Math.ceil(data.height), MAX_HEIGHT);
      const current = frameHeightRef.current;

      // Uguale all'iframe: con min-height:100vh non dice nulla sul contenuto,
      // tranne durante la sonda, dove significa che il contenuto ci sta dentro.
      if (Math.abs(h - current) <= 2) {
        if (!resolved.current && current === PROBE_HEIGHT) applyHeight(current);
        return;
      }

      if (h > current) {
        const now = Date.now();
        growths.current = growths.current.filter((t) => now - t < GROWTH_WINDOW_MS);
        if (growths.current.length >= MAX_GROWTHS_PER_WINDOW) return;
        growths.current.push(now);
      }
      applyHeight(h);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [applyHeight, probe]);

  // Cambio di larghezza (rotazione, finestra ridimensionata): il form può
  // andare a capo in modo diverso, quindi va rimisurato.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width);
      if (lastWidth.current === null) {
        lastWidth.current = width;
        return;
      }
      if (Math.abs(width - lastWidth.current) > 1) {
        lastWidth.current = width;
        if (resolved.current) probe();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [probe]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackContact({ content_name: "Form richiesta contatto" });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-black/30",
        className
      )}
      style={reserve ? { minHeight: reserve } : undefined}
    >
      {src ? (
        <iframe
          src={src}
          title="Richiedi informazioni"
          loading="lazy"
          className="block w-full"
          style={{ border: 0, height: frameHeight }}
          onLoad={() => awaitReport(height)}
        />
      ) : (
        <div style={{ height }} aria-hidden="true" />
      )}
    </div>
  );
}
