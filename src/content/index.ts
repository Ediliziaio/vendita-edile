import type { Article, ArticleCategory } from "./types";

// Registro degli articoli. Ogni articolo è un modulo in ./articles/<slug>.ts
// Gli import sono espliciti per massima affidabilità di build e tree-shaking.
import aumentareVenditeInfissi from "./articles/aumentare-vendite-infissi";
import comeFarePreventivi from "./articles/come-fare-preventivi-edilizia-che-chiudono";
import vendereSenzaSconti from "./articles/vendere-senza-fare-sconti";
import leadQualificati from "./articles/lead-qualificati-imprese-edili";
import clientiQualificati from "./articles/clienti-qualificati-edilizia";
import controlloGestione from "./articles/controllo-di-gestione-imprese-edili";
import efficienzaOperativa from "./articles/efficienza-operativa-impresa-edile";
import aziendaDipende from "./articles/azienda-che-dipende-dal-titolare";
import perchePerdiClienti from "./articles/perche-perdi-clienti-preventivi";
import chiudereTrattativa from "./articles/chiudere-trattativa-serramenti";
import vendereFotovoltaico from "./articles/vendere-fotovoltaico-trattativa";
import obiezioneCiPenso from "./articles/obiezione-ci-penso-come-gestirla";
import obiezionePrezzo from "./articles/obiezione-prezzo-costa-troppo-edilizia";
import marketingImprese from "./articles/marketing-per-imprese-edili-guida";
import funnelVendita from "./articles/funnel-vendita-infissi-serramenti";
import teamCommerciale from "./articles/team-commerciale-impresa-edile";
import followUp from "./articles/follow-up-preventivi-edilizia";
import aumentarePrezzoMedio from "./articles/aumentare-prezzo-medio-edilizia";
import recensioni from "./articles/recensioni-riprova-sociale-showroom";
import kpiVendita from "./articles/kpi-vendita-edilizia-numeri";
// Cluster "Vendita" — approfondimenti tecniche di vendita
import sopralluogoCheVende from "./articles/sopralluogo-che-vende";
import domandeQualificazione from "./articles/domande-qualificazione-cliente-edilizia";
import primoContattoTelefonico from "./articles/primo-contatto-telefonico-lead-edilizia";
import vendereInShowroom from "./articles/vendere-di-piu-in-showroom";
import coppiaDecisionale from "./articles/gestire-coppia-decisionale-vendita";
import valoreDellaPosa from "./articles/vendere-il-valore-della-posa";
import chiuderefPrimoAppuntamento from "./articles/chiudere-al-primo-appuntamento";
import storytellingVendita from "./articles/storytelling-vendita-edilizia";
import negoziazionePrezzo from "./articles/negoziazione-senza-cedere-sul-prezzo";
import vendereRistrutturazioni from "./articles/vendere-ristrutturazioni-chiavi-in-mano";

// L'ordine qui non conta: sotto ordiniamo per data di pubblicazione.
const registry: Article[] = [
  aumentareVenditeInfissi,
  comeFarePreventivi,
  vendereSenzaSconti,
  leadQualificati,
  clientiQualificati,
  controlloGestione,
  efficienzaOperativa,
  aziendaDipende,
  perchePerdiClienti,
  chiudereTrattativa,
  vendereFotovoltaico,
  obiezioneCiPenso,
  obiezionePrezzo,
  marketingImprese,
  funnelVendita,
  teamCommerciale,
  followUp,
  aumentarePrezzoMedio,
  recensioni,
  kpiVendita,
  sopralluogoCheVende,
  domandeQualificazione,
  primoContattoTelefonico,
  vendereInShowroom,
  coppiaDecisionale,
  valoreDellaPosa,
  chiuderefPrimoAppuntamento,
  storytellingVendita,
  negoziazionePrezzo,
  vendereRistrutturazioni,
];

/** Tutti gli articoli, ordinati dal più recente al più vecchio. */
export const articles: Article[] = [...registry].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

/** Ordine di visualizzazione delle categorie nei filtri. */
export const CATEGORY_ORDER: ArticleCategory[] = [
  "Vendita",
  "Marketing",
  "Preventivi",
  "Gestione",
  "Mindset",
];

/** Categorie effettivamente presenti tra gli articoli, in ordine. */
export function getCategories(): ArticleCategory[] {
  const present = new Set(articles.map((a) => a.category));
  return CATEGORY_ORDER.filter((c) => present.has(c));
}

/** Restituisce un articolo dato lo slug. */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Articolo in evidenza (o il più recente se nessuno è featured). */
export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

/**
 * Articoli correlati: stessa categoria per primi, poi per tag in comune,
 * infine i più recenti. Esclude l'articolo corrente.
 */
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, limit);

  const scored = articles
    .filter((a) => a.slug !== slug)
    .map((a) => {
      let score = 0;
      if (a.category === current.category) score += 3;
      score += a.tags.filter((t) => current.tags.includes(t)).length;
      return { a, score };
    })
    .sort((x, y) => y.score - x.score);

  return scored.slice(0, limit).map((s) => s.a);
}
