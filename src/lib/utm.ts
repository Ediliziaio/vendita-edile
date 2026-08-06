// Attribuzione campagne: cattura i parametri utm_* / fbclid / gclid
// al primo atterraggio e li ripropaga sui link in uscita (es. la CTA
// verso la prova di Edilizia in Cloud). Così la conversione attivata
// sull'altro dominio resta collegabile all'annuncio di partenza.

const STORAGE_KEY = "ve_utm_params_v1";
const TRACKED = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];

/** Salva in sessionStorage i parametri di attribuzione presenti nell'URL corrente. */
export function captureUtmParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of TRACKED) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    /* no-op: senza storage l'attribuzione salta, il sito funziona comunque */
  }
}

/** Ritorna l'URL con i parametri di attribuzione salvati aggiunti in coda. */
export function withUtmParams(url: string): string {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return url;
    const stored = JSON.parse(raw) as Record<string, string>;
    const result = new URL(url);
    for (const [key, value] of Object.entries(stored)) {
      if (!result.searchParams.has(key)) result.searchParams.set(key, value);
    }
    return result.toString();
  } catch {
    return url;
  }
}
