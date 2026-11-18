import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackLead } from "@/lib/analytics";
import { captureUtmParams } from "@/lib/utm";

/**
 * Tracciamento Meta Pixel lato SPA:
 * - PageView a ogni cambio rotta (il PageView iniziale è già sparato da index.html)
 * - Lead quando il form embeddato di EdiliziaInCloud segnala l'invio via postMessage
 */
export function PixelTracker() {
  const location = useLocation();
  const isFirst = useRef(true);

  // Attribuzione: salva utm_*/fbclid del primo atterraggio (per le CTA esterne)
  useEffect(() => {
    captureUtmParams();
  }, []);

  // PageView sui cambi rotta (SPA)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false; // il primo PageView lo fa già il pixel base
      return;
    }
    trackPageView();
  }, [location.pathname]);

  // Lead: ascolta il messaggio di invio dal form EiC (iframe cross-origin)
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://app.ediliziaincloud.com") return;
      const frame = Array.from(document.querySelectorAll<HTMLIFrameElement>("iframe[src]")).find((item) => {
        try { return item.contentWindow === e.source && new URL(item.src).origin === e.origin; }
        catch { return false; }
      });
      if (!frame) return;
      let data: unknown = e.data;
      try {
        if (typeof data === "string") data = JSON.parse(data);
      } catch { return; }
      if (!data || typeof data !== "object" || Array.isArray(data)) return;
      const payload = data as { type?: unknown; slug?: unknown };
      if (payload.type !== "eic-lead-form-submit") return;
      const slug = new URL(frame.src).searchParams.get("slug");
      if (!slug || payload.slug !== slug) return;
      trackLead({ content_name: "Form contatto EiC" });
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
