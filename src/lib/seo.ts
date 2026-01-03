// SEO Configuration
export const siteConfig = {
  name: "MARKETING EDILE®",
  description: "Marketing a risposta diretta per aziende edili, serramentisti e produttori di infissi. Sistemi di vendita testati da imprenditori del settore. Lavoriamo a percentuale sulle tue vendite.",
  url: "https://marketingedile.it",
  ogImage: "/og-image.jpg",
  author: "MARKETING EDILE®",
  keywords: [
    "marketing edilizia",
    "marketing serramenti",
    "marketing infissi",
    "lead generation edile",
    "marketing imprese edili",
    "agenzia marketing costruzioni",
    "marketing showroom infissi",
    "pubblicità serramentisti",
    "lead qualificati edilizia",
    "marketing a percentuale",
    "vendita infissi",
    "posatori serramenti"
  ],
  links: {
    facebook: "https://facebook.com/marketingedile",
    instagram: "https://instagram.com/marketingedile",
    linkedin: "https://linkedin.com/company/marketingedile"
  }
};

// JSON-LD Schema generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin
  ]
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IT"
  },
  areaServed: {
    "@type": "Country",
    name: "Italy"
  }
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.publishedAt,
  dateModified: article.updatedAt || article.publishedAt,
  author: {
    "@type": "Person",
    name: article.author
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
