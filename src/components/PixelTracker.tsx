import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackLead } from "@/lib/analytics";

/**
 * Tracciamento Meta Pixel lato SPA:
 * - PageView a ogni cambio rotta (il PageView iniziale è già sparato da index.html)
 * - Lead quando il form embeddato di EdiliziaInCloud segnala l'invio via postMessage
 */
export function PixelTracker() {
  const location = useLocation();
  const isFirst = useRef(true);

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
      if (typeof e.origin !== "string" || !e.origin.includes("ediliziaincloud")) {
        return;
      }
      let payload = "";
      try {
        payload = typeof e.data === "string" ? e.data : JSON.stringify(e.data ?? "");
      } catch {
        payload = "";
      }
      if (/submit|success|lead|thank|grazie|inviat/i.test(payload)) {
        trackLead({ content_name: "Form contatto EiC" });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
