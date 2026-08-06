import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackContact } from "@/lib/analytics";

interface ContactFormEmbedProps {
  className?: string;
  /** Altezza dell'iframe in px (default 640). Usata come fallback finché
   *  il form non comunica la sua altezza reale via postMessage. */
  height?: number;
}

/**
 * Form di richiesta contatto embeddato (Form Builder EdiliziaInCloud).
 * L'URL è centralizzato in siteConfig.contactFormEmbedUrl.
 * Traccia un evento Meta "Contact" quando il form entra in viewport (una volta).
 */
export function ContactFormEmbed({ className, height = 640 }: ContactFormEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  const [liveHeight, setLiveHeight] = useState<number | null>(null);

  // Il form EiC comunica la sua altezza reale via postMessage
  // ({ type: "eic-lead-form-height", height: N }): la usiamo per evitare
  // scroll interni o spazi vuoti, soprattutto su mobile dove i campi
  // impilati rendono il form più alto del fallback.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("ediliziaincloud")) {
        return;
      }
      const data = e.data as { type?: string; height?: number } | undefined;
      if (
        data &&
        data.type === "eic-lead-form-height" &&
        typeof data.height === "number" &&
        data.height > 200
      ) {
        setLiveHeight(Math.ceil(data.height));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

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
    >
      <iframe
        src={siteConfig.contactFormEmbedUrl}
        title="Richiedi informazioni"
        loading="lazy"
        className="block w-full"
        style={{ border: 0, height: liveHeight ?? height }}
      />
    </div>
  );
}
