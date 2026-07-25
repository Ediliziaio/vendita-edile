// Registro delle immagini utilizzabili DENTRO il corpo degli articoli.
//
// Perché serve: Vite risolve gli asset solo se importati, quindi un percorso
// scritto a mano nel Markdown (es. /src/assets/foo.jpg) si romperebbe in build.
// Negli articoli si scrive quindi:  ![Didascalia](img:chiave)
// e MarkdownRenderer risolve la chiave in URL definitivo.

import blogRichieste from "@/assets/blog-30-richieste-qualificate.jpg";
import blogAumentareVendite from "@/assets/blog-aumentare-vendite-edilizia.jpg";
import blogAziendaDipende from "@/assets/blog-azienda-dipende-da-te.jpg";
import blogClientiQualificati from "@/assets/blog-clienti-qualificati-edilizia.jpg";
import blogControlloGestione from "@/assets/blog-controllo-gestione-edilizia.jpg";
import blogEfficienza from "@/assets/blog-efficienza-operativa-edilizia.jpg";
import blogPerdereClienti from "@/assets/blog-perdere-clienti-distrazione.jpg";
import blogPreventiviCover from "@/assets/blog-preventivi-edilizia-cover.jpg";
import blogPreventivi from "@/assets/blog-preventivi-edilizia.jpg";
import blogSconti from "@/assets/blog-smetti-fare-sconti.jpg";
import cantiere from "@/assets/cantiere.jpg";
import cantiereInstallazione from "@/assets/cantiere-installazione.jpg";
import showroom from "@/assets/showroom.jpg";
import heroWindows from "@/assets/hero-windows.jpg";
import team from "@/assets/team.jpg";

/**
 * Chiavi semantiche: descrivono la SCENA, non il file.
 * Scegliere la chiave in base a cosa racconta il paragrafo vicino.
 */
export const contentImages: Record<string, string> = {
  // Trattativa e vendita
  trattativa: blogPreventivi,
  preventivo: blogPreventiviCover,
  sconto: blogSconti,
  clienteperso: blogPerdereClienti,
  clientiqualificati: blogClientiQualificati,
  richieste: blogRichieste,
  crescita: blogAumentareVendite,

  // Azienda e numeri
  margini: blogControlloGestione,
  organizzazione: blogEfficienza,
  titolare: blogAziendaDipende,
  team,

  // Prodotto e cantiere
  showroom,
  infissi: heroWindows,
  cantiere,
  posa: cantiereInstallazione,
};

/** Prefisso usato nel Markdown per riferirsi al registro. */
export const IMG_PREFIX = "img:";

/**
 * Risolve una sorgente immagine del Markdown.
 * - "img:chiave" -> URL dell'asset importato (undefined se la chiave non esiste)
 * - qualsiasi altro valore (http, data:) -> restituito invariato
 */
export function resolveContentImage(src: string | undefined): string | undefined {
  if (!src) return undefined;
  if (!src.startsWith(IMG_PREFIX)) return src;
  const key = src.slice(IMG_PREFIX.length).trim();
  return contentImages[key];
}

/** Elenco delle chiavi disponibili (utile per validazione/documentazione). */
export const contentImageKeys = Object.keys(contentImages);
