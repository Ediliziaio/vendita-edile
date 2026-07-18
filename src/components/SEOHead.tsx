import { useEffect } from 'react';
import { JsonLd } from '@/components/JsonLd';

const siteConfig = {
  name: "VENDITA EDILE®",
  description:
    "L'unico programma di affiancamento vendite per imprenditori edili. +30-50% fatturato in 90 giorni.",
  url: "https://www.venditaedile.it",
  ogImage: "/og-image.jpg",
  author: "VENDITA EDILE®",
  keywords: [
    "vendita edile",
    "affiancamento vendite",
    "imprenditori edili",
    "infissi",
    "serramenti",
    "fotovoltaico",
    "edilizia",
    "ristrutturazioni",
    "sistema vendita",
    "coaching vendite",
  ],
};

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

type Tag =
  | { el: 'meta'; attr: 'name' | 'property'; key: string; content: string }
  | { el: 'link'; rel: string; href: string };

/**
 * Gestione dell'head (title + meta + Open Graph + Twitter + canonical) in modo
 * imperativo tramite useEffect. Scelta deliberata rispetto a react-helmet-async,
 * che in questo setup SPA non applicava i tag in modo affidabile. Ogni pagina
 * imposta i propri tag al mount e li rimuove all'unmount, garantendo meta
 * corretti per SEO, GEO e AEO su ogni rotta.
 */
export function SEOHead({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedAt,
  updatedAt,
  author = siteConfig.author,
  noindex = false,
  jsonLd,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Affiancamento Vendite per Imprenditori Edili`;

  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  const keywordsStr = keywords.join(', ');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = fullTitle;

    const tags: Tag[] = [
      { el: 'meta', attr: 'name', key: 'description', content: description },
      { el: 'meta', attr: 'name', key: 'keywords', content: keywordsStr },
      { el: 'meta', attr: 'name', key: 'author', content: author },
      {
        el: 'meta',
        attr: 'name',
        key: 'robots',
        content: noindex ? 'noindex, nofollow' : 'index, follow',
      },
      { el: 'link', rel: 'canonical', href: url },
      // Open Graph
      { el: 'meta', attr: 'property', key: 'og:type', content: type },
      { el: 'meta', attr: 'property', key: 'og:url', content: url },
      { el: 'meta', attr: 'property', key: 'og:title', content: fullTitle },
      { el: 'meta', attr: 'property', key: 'og:description', content: description },
      { el: 'meta', attr: 'property', key: 'og:image', content: fullImageUrl },
      { el: 'meta', attr: 'property', key: 'og:image:width', content: '1200' },
      { el: 'meta', attr: 'property', key: 'og:image:height', content: '630' },
      { el: 'meta', attr: 'property', key: 'og:image:alt', content: title || siteConfig.name },
      { el: 'meta', attr: 'property', key: 'og:site_name', content: siteConfig.name },
      { el: 'meta', attr: 'property', key: 'og:locale', content: 'it_IT' },
      // Twitter
      { el: 'meta', attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
      { el: 'meta', attr: 'name', key: 'twitter:url', content: url },
      { el: 'meta', attr: 'name', key: 'twitter:title', content: fullTitle },
      { el: 'meta', attr: 'name', key: 'twitter:description', content: description },
      { el: 'meta', attr: 'name', key: 'twitter:image', content: fullImageUrl },
      { el: 'meta', attr: 'name', key: 'twitter:image:alt', content: title || siteConfig.name },
    ];

    if (type === 'article' && publishedAt) {
      tags.push({
        el: 'meta',
        attr: 'property',
        key: 'article:published_time',
        content: publishedAt,
      });
      if (updatedAt) {
        tags.push({
          el: 'meta',
          attr: 'property',
          key: 'article:modified_time',
          content: updatedAt,
        });
      }
      tags.push({ el: 'meta', attr: 'property', key: 'article:author', content: author });
    }

    const created: Element[] = [];
    for (const tag of tags) {
      let node: Element;
      if (tag.el === 'meta') {
        node = document.createElement('meta');
        node.setAttribute(tag.attr, tag.key);
        node.setAttribute('content', tag.content);
      } else {
        node = document.createElement('link');
        node.setAttribute('rel', tag.rel);
        node.setAttribute('href', tag.href);
      }
      node.setAttribute('data-seo', 'route');
      document.head.appendChild(node);
      created.push(node);
    }

    return () => {
      document.title = previousTitle;
      created.forEach((n) => n.remove());
    };
  }, [
    fullTitle,
    description,
    keywordsStr,
    author,
    noindex,
    url,
    type,
    fullImageUrl,
    title,
    publishedAt,
    updatedAt,
  ]);

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return jsonLdArray.length > 0 ? <JsonLd data={jsonLdArray} /> : null;
}
