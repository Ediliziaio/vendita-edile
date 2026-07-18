// Builder centralizzati per i dati strutturati JSON-LD (Schema.org).
// Servono a SEO classica e soprattutto a GEO/AEO: aiutano i motori generativi
// (ChatGPT, Perplexity, Gemini, Google AI Overviews) a citare correttamente il sito.

import type { Article } from "@/content/types";

export const SITE_URL = "https://venditaedile.it";
export const SITE_NAME = "VENDITA EDILE®";
export const ORG_LEGAL_NAME = "Domus Group S.r.l.";
export const LOGO_URL = `${SITE_URL}/og-image.jpg`;

/** Organizzazione: identità del brand per i motori. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Programma di affiancamento vendite per imprenditori edili che vendono infissi, serramenti, fotovoltaico e ristrutturazioni.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Aurelio Saffi 29",
      addressLocality: "Milano",
      postalCode: "20123",
      addressCountry: "IT",
    },
    areaServed: "IT",
    sameAs: [] as string[],
  };
}

/** Sito web con azione di ricerca (utile per sitelinks e AEO). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Servizio offerto: aiuta i motori a capire cosa vende il brand. */
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Affiancamento vendite per imprese edili",
    serviceType: "Consulenza e affiancamento vendite",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "IT",
    audience: {
      "@type": "Audience",
      audienceType:
        "Imprenditori edili, showroom infissi e serramenti, installatori fotovoltaico, imprese di ristrutturazione",
    },
    description:
      "Programma di affiancamento sul campo che aiuta le imprese edili ad aumentare il tasso di chiusura dei preventivi e il fatturato senza abbassare i prezzi.",
  };
}

/** Breadcrumb per una pagina generica. */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQPage a partire da coppie domanda/risposta. */
export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Schema Article completo per la pagina di un articolo. */
export function articleSchema(article: Article) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: article.title,
    description: article.metaDescription,
    image: LOGO_URL,
    inLanguage: "it-IT",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.category,
    keywords: [article.keyword, ...article.tags].join(", "),
    wordCount: article.content.split(/\s+/).length,
  };
}
