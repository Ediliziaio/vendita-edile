// Modello dati degli articoli del blog VENDITA EDILE®
// Contenuti gestiti in locale (versionati in git) per massima affidabilità SEO/GEO/AEO.

export type ArticleCategory =
  | "Vendita"
  | "Marketing"
  | "Preventivi"
  | "Gestione"
  | "Mindset";

export interface ArticleAuthor {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface Article {
  /** Slug URL, kebab-case, senza slash. Es: "aumentare-vendite-infissi" */
  slug: string;
  /** Titolo H1 dell'articolo */
  title: string;
  /** <title> per il tag meta (max ~60 caratteri, keyword davanti) */
  metaTitle: string;
  /** Meta description (150-160 caratteri) */
  metaDescription: string;
  /** Estratto mostrato nelle card e usato come sommario */
  excerpt: string;
  /** Categoria principale */
  category: ArticleCategory;
  /** Tag secondari */
  tags: string[];
  /** Keyword primaria targettizzata */
  keyword: string;
  /** Tempo di lettura stimato in minuti */
  readingTime: number;
  /** Data pubblicazione ISO (YYYY-MM-DD) */
  publishedAt: string;
  /** Data ultimo aggiornamento ISO (YYYY-MM-DD) */
  updatedAt: string;
  /** Autore */
  author: ArticleAuthor;
  /** Immagine di copertina (import) */
  cover: string;
  /** In evidenza in cima al blog */
  featured?: boolean;
  /**
   * Punti chiave "answer-first" per AEO: 3-5 bullet che rispondono subito
   * alla domanda dell'utente (usati anche in cima all'articolo).
   */
  keyTakeaways: string[];
  /** Corpo articolo in Markdown (GFM). H2 = ##, H3 = ###. */
  content: string;
  /** Domande frequenti: alimentano la FAQ on-page + lo schema FAQPage. */
  faq: ArticleFAQ[];
}
