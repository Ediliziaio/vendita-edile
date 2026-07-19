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

// Lo stesso pixel Meta è usato su più siti: alleghiamo a OGNI evento
// l'identità del sito, così in Gestione Eventi è chiaro da dove arriva.
export const SITE_SOURCE = "venditaedile.it";
export const SITE_BRAND = "VENDITA EDILE";

// Evento custom di PageView specifico del sito (compare in Gestione Eventi
// col suo nome, così si distingue subito dal PageView standard condiviso).
export const SITE_PAGEVIEW_EVENT = "PV_venditaedile";

function withSource(params?: PixelParams): PixelParams {
  return {
    source_site: SITE_SOURCE,
    source_brand: SITE_BRAND,
    ...(params ?? {}),
  };
}

/** Traccia un evento standard Meta (PageView, Lead, Contact, ViewContent, ...). */
export function fbTrack(event: string, params?: PixelParams) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, withSource(params));
  }
}

/** Traccia un evento custom Meta (nome personalizzato). */
export function fbTrackCustom(event: string, params?: PixelParams) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", event, withSource(params));
  }
}

/**
 * PageView su ogni pagina (SPA): spara sia il PageView standard di Meta
 * sia l'evento custom PV_venditaedile, così è facilmente filtrabile.
 */
export const trackPageView = () => {
  fbTrack("PageView");
  fbTrackCustom(SITE_PAGEVIEW_EVENT);
};

/** Lead — conversione reale (candidatura inviata / pagina grazie). */
export const trackLead = (params?: PixelParams) => fbTrack("Lead", params);

/** Contact — l'utente ha raggiunto/aperto il form di contatto. */
export const trackContact = (params?: PixelParams) => fbTrack("Contact", params);

/** ViewContent — visualizzazione di un contenuto (es. articolo del blog). */
export const trackViewContent = (params?: PixelParams) =>
  fbTrack("ViewContent", params);
