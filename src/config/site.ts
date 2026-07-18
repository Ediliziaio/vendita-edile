// Configurazione centralizzata del sito VENDITA EDILE®.
// Un unico punto di verità per URL del form, contatti e dati aziendali,
// così CTA e footer restano sempre coerenti.

export const siteConfig = {
  name: "VENDITA EDILE®",
  domain: "https://venditaedile.it",

  // Form di richiesta contatto embeddato (Form Builder EdiliziaInCloud).
  // ⚠️ Cambiare qui l'URL aggiorna il form ovunque sia embeddato.
  contactFormEmbedUrl:
    "https://app.ediliziaincloud.com/f?slug=vendita-edile&company_id=00000000-0000-0000-0000-000000000001",

  // Id dell'ancora della sezione con il form (le CTA vi fanno scroll).
  contactAnchorId: "candidati",

  // Contatti / dati aziendali
  company: {
    legalName: "Domus Group S.r.l.",
    email: "amministrazione@domusgroupitalia.it",
    pec: "domusgroupsrl@legalmail.it",
    vat: "13132010961",
    address: "Via Aurelio Saffi 29, 20123 Milano",
  },
} as const;

/**
 * Porta l'utente al form di contatto embeddato nella pagina (sezione #candidati).
 * Se il form è su un'altra pagina (es. blog), naviga prima alla home + ancora.
 */
export function goToContactForm() {
  const anchor = siteConfig.contactAnchorId;
  if (window.location.pathname === "/") {
    const el = document.getElementById(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }
  }
  window.location.assign(`/#${anchor}`);
}
