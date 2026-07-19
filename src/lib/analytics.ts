// Wrapper sicuro per il Meta Pixel (Facebook Pixel).
// Il pixel base è inizializzato in index.html; qui gestiamo gli eventi.
// fbq mette in coda le chiamate finché lo script non è caricato,
// quindi è sicuro chiamare questi helper anche subito al mount.

type PixelParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Traccia un evento standard Meta (Lead, Contact, ViewContent, ...). */
export function fbTrack(event: string, params?: PixelParams) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) window.fbq("track", event, params);
    else window.fbq("track", event);
  }
}

/** PageView — su ogni cambio pagina (SPA). */
export const trackPageView = () => fbTrack("PageView");

/** Lead — conversione reale (candidatura inviata / pagina grazie). */
export const trackLead = (params?: PixelParams) => fbTrack("Lead", params);

/** Contact — l'utente ha raggiunto/aperto il form di contatto. */
export const trackContact = (params?: PixelParams) => fbTrack("Contact", params);

/** ViewContent — visualizzazione di un contenuto (es. articolo del blog). */
export const trackViewContent = (params?: PixelParams) =>
  fbTrack("ViewContent", params);
