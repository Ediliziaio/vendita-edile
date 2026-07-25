// Registro delle immagini utilizzabili DENTRO il corpo degli articoli.
//
// Perché serve: Vite risolve gli asset solo se importati, quindi un percorso
// scritto a mano nel Markdown (es. /src/assets/foo.jpg) si romperebbe in build.
// Negli articoli si scrive quindi:  ![Didascalia](img:chiave)
// e MarkdownRenderer risolve la chiave in URL definitivo.
//
// Le immagini sono realizzate su misura per il brand, 1600x900 (16:9).
// Per sostituirne una basta rimpiazzare il file in src/assets: le chiavi
// restano invariate e nessun articolo va toccato.

import trattativa from "@/assets/img-trattativa.webp";
import preventivo from "@/assets/img-preventivo.webp";
import sconto from "@/assets/img-sconto.webp";
import clienteperso from "@/assets/img-clienteperso.webp";
import clientiqualificati from "@/assets/img-clientiqualificati.webp";
import richieste from "@/assets/img-richieste.webp";
import crescita from "@/assets/img-crescita.webp";
import margini from "@/assets/img-margini.webp";
import organizzazione from "@/assets/img-organizzazione.webp";
import titolare from "@/assets/img-titolare.webp";
import team from "@/assets/img-team.webp";
import showroom from "@/assets/img-showroom.webp";
import infissi from "@/assets/img-infissi.webp";
import cantiere from "@/assets/img-cantiere.webp";
import posa from "@/assets/img-posa.webp";

/**
 * Chiavi semantiche: descrivono la SCENA, non il file.
 * Scegliere la chiave in base a cosa racconta il paragrafo vicino.
 */
export const contentImages: Record<string, string> = {
  // Trattativa e vendita
  trattativa,
  preventivo,
  sconto,
  clienteperso,
  clientiqualificati,
  richieste,
  crescita,

  // Azienda e numeri
  margini,
  organizzazione,
  titolare,
  team,

  // Prodotto e cantiere
  showroom,
  infissi,
  cantiere,
  posa,
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
