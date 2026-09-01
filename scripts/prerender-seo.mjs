/**
 * Prerender SEO — genera un file HTML statico per ogni URL pubblico.
 *
 * Perché serve: il sito è una SPA. Senza questo passaggio ogni URL servirebbe
 * lo stesso index.html (stesso <title>, nessuna description, nessun contenuto).
 * Google renderizza il JS con ritardo, ma social network e crawler AI
 * (GPTBot, ClaudeBot, PerplexityBot) NON eseguono JavaScript: senza prerender
 * vedono una pagina vuota, e i 34 articoli con 205 FAQ restano invisibili.
 *
 * Cosa fa per ogni rotta:
 *  - <title>, meta description, canonical, Open Graph e Twitter Card unici
 *  - JSON-LD (Article, FAQPage, BreadcrumbList, Organization, WebSite)
 *  - il testo reale della pagina dentro #root (React lo sostituisce al mount)
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import esbuild from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const SITE = "https://www.venditaedile.it";
const BRAND = "VENDITA EDILE®";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const LOGO = `${SITE}/apple-touch-icon.png`;
const FOUNDER = "Florin Andriciuc";
const FOUNDER_URL = "https://www.florinandriciuc.com/chi-sono";

/* ------------------------------------------------------------------ *
 * 1. Caricamento contenuti (bundle esbuild dei sorgenti TypeScript)
 * ------------------------------------------------------------------ */

const assetStub = {
  name: "asset-stub",
  setup(build) {
    // Le immagini importate nei contenuti non servono al prerender:
    // le sostituiamo con il loro path pubblico.
    build.onResolve({ filter: /\.(png|jpe?g|webp|svg|gif|avif)$/ }, (args) => ({
      path: args.path,
      namespace: "asset-stub",
    }));
    build.onLoad({ filter: /.*/, namespace: "asset-stub" }, (args) => ({
      contents: `export default ${JSON.stringify("/assets/" + path.basename(args.path))};`,
      loader: "js",
    }));
  },
};

const aliasPlugin = {
  name: "alias-at",
  setup(build) {
    build.onResolve({ filter: /^@\// }, async (args) => {
      // Deleghiamo al resolver di esbuild così estensioni e index.ts
      // vengono risolti come farebbe Vite.
      return build.resolve(`./${args.path.slice(2)}`, {
        kind: args.kind,
        resolveDir: path.join(root, "src"),
      });
    });
  },
};

async function loadContent() {
  const outfile = path.join(root, "node_modules/.cache/prerender-content.mjs");
  await esbuild.build({
    entryPoints: [path.join(__dirname, "content-entry.ts")],
    bundle: true,
    format: "esm",
    platform: "node",
    target: "node18",
    outfile,
    logLevel: "silent",
    plugins: [assetStub, aliasPlugin],
  });
  return import(`${pathToFileURL(outfile).href}?t=${Date.now()}`);
}

/* ------------------------------------------------------------------ *
 * 2. Utility
 * ------------------------------------------------------------------ */

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Markdown (GFM ridotto) → HTML. Serve solo ai crawler: niente fronzoli. */
/* ------------------------------------------------------------------ *
 * 2b. Asset: dal nome logico al file con hash emesso da Vite
 * ------------------------------------------------------------------ */

// Vite emette "<nome>-<hash>.<ext>". I contenuti referenziano il nome logico
// ("/assets/cover-x.webp"), quindi serve una mappa per ottenere l'URL reale.
const assetMap = new Map();
let contentImageMap = {};

async function buildAssetMap() {
  try {
    for (const f of await readdir(path.join(dist, "assets"))) {
      assetMap.set(f, `/assets/${f}`);
      const m = f.match(/^(.*)-[A-Za-z0-9_-]{6,}(\.[a-z0-9]+)$/i);
      if (m) assetMap.set(m[1] + m[2], `/assets/${f}`);
    }
  } catch {
    /* build non ancora eseguita: le immagini verranno semplicemente omesse */
  }
}

function resolveAsset(p) {
  if (!p) return null;
  return assetMap.get(path.basename(String(p))) || null;
}

/** Risolve sia "img:chiave" (registro) sia un path di asset importato. */
function resolveImageSrc(src) {
  if (!src) return null;
  const v = String(src).trim();
  if (v.startsWith("img:")) return resolveAsset(contentImageMap[v.slice(4).trim()]);
  return resolveAsset(v);
}

function figureHtml(src, alt) {
  const url = resolveImageSrc(src);
  if (!url) return "";
  const caption = alt ? `<figcaption>${esc(alt)}</figcaption>` : "";
  return `<figure><img src="${esc(url)}" alt="${esc(alt || "")}" loading="lazy" />${caption}</figure>`;
}

function mdToHtml(md = "") {
  const lines = String(md).split("\n");
  const out = [];
  let inList = false;
  let inTable = false;

  const closeList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };
  const closeTable = () => {
    if (inTable) {
      out.push("</table>");
      inTable = false;
    }
  };

  const inline = (t) =>
    esc(t)
      // Le immagini vanno risolte prima dei link: la regex dei link
      // catturerebbe anche "![alt](src)" producendo un link rotto.
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => {
        const url = resolveImageSrc(src);
        return url ? `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy" />` : "";
      })
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (!line.trim()) {
      closeList();
      closeTable();
      continue;
    }

    // Immagine su riga propria: diventa <figure> con didascalia
    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (image) {
      closeList();
      closeTable();
      const fig = figureHtml(image[2], image[1]);
      if (fig) out.push(fig);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.*)$/);
    if (heading) {
      closeList();
      closeTable();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      closeTable();
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }

    if (/^\|/.test(line)) {
      closeList();
      // riga separatore |---|---|
      if (/^\|[\s:|-]+\|$/.test(line)) continue;
      if (!inTable) {
        out.push("<table>");
        inTable = true;
      }
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => `<td>${inline(c.trim())}</td>`)
        .join("");
      out.push(`<tr>${cells}</tr>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeList();
      closeTable();
      out.push(`<blockquote>${inline(line.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }

    closeList();
    closeTable();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  closeTable();
  return out.join("\n");
}

const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: BRAND,
  url: SITE,
  logo: LOGO,
  founder: { "@type": "Person", name: FOUNDER, url: FOUNDER_URL },
  areaServed: { "@type": "Country", name: "IT" },
};

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

function faqPage(faq) {
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

/* ------------------------------------------------------------------ *
 * 3. Composizione della pagina
 * ------------------------------------------------------------------ */

function buildHead({ title, description, url, image = OG_IMAGE, type = "website", schemas = [], keywords, noindex = false }) {
  const t = esc(title);
  const d = esc(description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    keywords ? `<meta name="keywords" content="${esc(keywords)}" />` : "",
    `<link rel="canonical" href="${url}" />`,
    noindex
      ? `<meta name="robots" content="noindex, nofollow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="${esc(BRAND)}" />`,
    `<meta property="og:locale" content="it_IT" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...schemas.map(jsonLd),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function faqHtml(faq = []) {
  if (!faq.length) return "";
  return `<section><h2>Domande frequenti</h2>${faq
    .map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`)
    .join("")}</section>`;
}

/* ------------------------------------------------------------------ *
 * 4. Definizione delle rotte
 * ------------------------------------------------------------------ */

/** FAQ della home: le stesse mostrate in pagina, per lo schema FAQPage. */
const HOME_FAQ = [
  {
    question: "Quanto costa il programma VENDITA EDILE® e conviene?",
    answer:
      "L'investimento è di 9.000 € e si ripaga in genere con un solo contratto chiuso meglio. La media dei clienti perde 30.000-50.000 € al mese in trattative che non chiudono: il programma punta a un ritorno di circa 5 volte l'investimento in 90 giorni.",
  },
  {
    question: "È un corso di vendita?",
    answer:
      "No. VENDITA EDILE® non è un corso ma un affiancamento sul campo di 90 giorni: ogni settimana si revisionano le trattative reali, con feedback e correzioni. Non ti lasciamo con un PDF, lavoriamo sui tuoi preventivi veri.",
  },
  {
    question: "Funziona per il mio settore in edilizia?",
    answer:
      "Sì. Il metodo è applicato con oltre 47 aziende in tutta l'edilizia: infissi, serramenti, fotovoltaico, ristrutturazioni e impianti. I principi di vendita sono gli stessi, l'applicazione viene personalizzata sul tuo prodotto.",
  },
  {
    question: "Serve essere già bravi a vendere?",
    answer:
      "No. Non servono doti innate ma un sistema: script, qualifica, gestione delle obiezioni e follow-up. Circa il 70% dei clienti non aveva esperienza di vendita prima di iniziare.",
  },
  {
    question: "Cosa succede se non ottengo risultati?",
    answer:
      "C'è una garanzia 100%: se non vedi risultati, il rimborso è totale ed è messo per iscritto prima di iniziare. Il rischio è a carico nostro.",
  },
];

function buildRoutes({ articles, hubs, glossary, glossaryGroups }) {
  const routes = [];

  // --- Home ---
  routes.push({
    path: "/",
    head: buildHead({
      title: `Vendita Edile® — Affiancamento Vendite per Imprese Edili`,
      description:
        "Trasforma i preventivi in contratti firmati senza abbassare i prezzi. Affiancamento commerciale per imprese edili, serramentisti e fotovoltaico.",
      url: `${SITE}/`,
      keywords:
        "affiancamento vendite edilizia, formazione commerciale imprese edili, aumentare tasso chiusura preventivi, vendita serramenti",
      schemas: [
        {
          "@context": "https://schema.org",
          "@graph": [
            organization,
            {
              "@type": "WebSite",
              "@id": `${SITE}/#website`,
              url: SITE,
              name: BRAND,
              inLanguage: "it-IT",
              publisher: { "@id": `${SITE}/#organization` },
            },
          ],
        },
        faqPage(HOME_FAQ),
      ],
    }),
    body: `
      <h1>Vendita Edile® — il metodo di vendita per l'impresa edile</h1>
      ${figureHtml("img:trattativa", "Affiancamento commerciale per imprese edili: dalla trattativa al contratto firmato")}
      <p>Il programma di affiancamento che insegna all'imprenditore edile a trasformare i preventivi in contratti firmati, senza svendere il proprio lavoro.</p>
      <p>Vendita Edile® è il sistema commerciale per le aziende del settore casa: infissi, serramenti, fotovoltaico, ristrutturazioni e impianti. L'obiettivo è alzare la percentuale di preventivi chiusi mantenendo prezzi e margine.</p>

      <h2>Il problema: fai 20 preventivi al mese e ne chiudi 2</h2>
      <p>La maggior parte delle imprese edili chiude tra il 10% e il 15% dei preventivi emessi. Il resto muore nel "ci penso", nel confronto con un preventivo più basso o nel silenzio. Il collo di bottiglia non è il numero di richieste: è il tasso di chiusura.</p>
      <p>Con lo stesso numero di preventivi, passare dal 12% al 35% di chiusura significa triplicare il venduto senza spendere un euro in più di marketing e senza abbassare i prezzi.</p>

      <h2>Cosa fa VENDITA EDILE®</h2>
      <p>È un affiancamento sul campo di 90 giorni, non un corso da guardare. Si lavora sulle trattative vere dell'azienda, con revisione settimanale e correzioni.</p>
      <ul>
        <li><strong>Qualifica del cliente</strong>: smettere di fare preventivi a chiunque chiami.</li>
        <li><strong>Diagnosi del bisogno</strong>: capire il problema reale prima di parlare di prodotto.</li>
        <li><strong>Presentazione a valore</strong>: vendere il risultato, non il materiale.</li>
        <li><strong>Gestione delle obiezioni</strong>: risposte preparate a "costa troppo" e "ci penso".</li>
        <li><strong>Follow-up strutturato</strong>: recuperare i preventivi che oggi restano senza risposta.</li>
      </ul>

      <h2>Per chi è</h2>
      <p>Per imprenditori e showroom che vendono infissi, serramenti, fotovoltaico, ristrutturazioni e impianti, e che vogliono alzare il margine invece di rincorrere il prezzo più basso.</p>

      <h2>Approfondimenti</h2>
      <ul>
        <li><a href="/vendita-serramenti">Come vendere serramenti: il processo commerciale che chiude</a></li>
        <li><a href="/formazione-commerciale">Formazione commerciale per aziende del settore casa</a></li>
        <li><a href="/blog">Guide di vendita per imprese edili</a></li>
      </ul>

      ${faqHtml(HOME_FAQ)}

      <p>Un progetto di <a href="${FOUNDER_URL}" rel="author">${FOUNDER}</a>, founder e CEO di AEDIX.</p>`,
  });

  // --- Blog index ---
  routes.push({
    path: "/blog",
    head: buildHead({
      title: "Blog — Guide di Vendita per Imprese Edili",
      description:
        "Guide pratiche su preventivi, trattativa, obiezioni e gestione commerciale per imprese edili, serramentisti e installatori. Aggiornate e testate sul campo.",
      url: `${SITE}/blog`,
      schemas: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${BRAND}`,
          url: `${SITE}/blog`,
          publisher: { "@id": `${SITE}/#organization` },
          blogPost: articles.slice(0, 20).map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: `${SITE}/blog/${a.slug}`,
            datePublished: a.publishedAt,
          })),
        },
      ],
    }),
    body: `
      <h1>Blog — Guide di vendita per imprese edili</h1>
      <p>Guide pratiche su preventivi, trattativa, gestione delle obiezioni e organizzazione commerciale per chi vende infissi, serramenti, fotovoltaico e ristrutturazioni.</p>
      <ul>${articles
        .map(
          (a) =>
            `<li><a href="/blog/${a.slug}">${esc(a.title)}</a> — ${esc(a.excerpt)}</li>`
        )
        .join("")}</ul>`,
  });

  // --- Articoli ---
  for (const a of articles) {
    const url = `${SITE}/blog/${a.slug}`;
    // Ogni articolo condivide la PROPRIA copertina, non l'immagine generica:
    // i crawler social non eseguono JS, quindi leggono solo questo og:image.
    const coverUrl = resolveAsset(a.cover);
    const shareImage = coverUrl ? `${SITE}${coverUrl}` : OG_IMAGE;
    routes.push({
      path: `/blog/${a.slug}`,
      lastmod: a.updatedAt || a.publishedAt,
      head: buildHead({
        title: a.metaTitle,
        description: a.metaDescription,
        url,
        image: shareImage,
        type: "article",
        keywords: [a.keyword, ...(a.tags || [])].join(", "),
        schemas: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: a.title,
            description: a.metaDescription,
            datePublished: a.publishedAt,
            dateModified: a.updatedAt || a.publishedAt,
            inLanguage: "it-IT",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@type": "Person", name: a.author?.name || FOUNDER, url: FOUNDER_URL },
            publisher: organization,
            image: shareImage,
            articleSection: a.category,
            keywords: [a.keyword, ...(a.tags || [])].join(", "),
            wordCount: String(a.content || "").split(/\s+/).length,
          },
          ...(a.faq?.length ? [faqPage(a.faq)] : []),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: a.title, path: `/blog/${a.slug}` },
          ]),
        ],
      }),
      body: `
        <article>
          <h1>${esc(a.title)}</h1>
          ${figureHtml(a.cover, a.title)}
          <p><em>${esc(a.excerpt)}</em></p>
          <p>Categoria: ${esc(a.category)} · Lettura ${a.readingTime} min · Aggiornato il ${esc(a.updatedAt || a.publishedAt)} · di ${esc(a.author?.name || FOUNDER)}</p>
          ${a.keyTakeaways?.length ? `<h2>In sintesi</h2><ul>${a.keyTakeaways.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>` : ""}
          ${mdToHtml(a.content)}
          ${faqHtml(a.faq)}
        </article>`,
    });
  }

  // --- Hub (silo) ---
  for (const h of hubs) {
    const url = `${SITE}/${h.slug}`;
    routes.push({
      path: `/${h.slug}`,
      head: buildHead({
        title: h.metaTitle,
        description: h.metaDescription,
        url,
        keywords: h.keyword,
        schemas: [
          ...(h.faq?.length ? [faqPage(h.faq)] : []),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: h.h1, path: `/${h.slug}` },
          ]),
        ],
      }),
      body: `
        <article>
          <h1>${esc(h.h1)}</h1>
          <p>${esc(h.answerFirst)}</p>
          <p>${esc(h.entity)}</p>
          ${(h.sections || [])
            .map(
              (s) => `
            <h2>${esc(s.h2)}</h2>
            ${(s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("")}
            ${s.bullets?.length ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
            ${(s.subsections || []).map((ss) => `<h3>${esc(ss.h3)}</h3><p>${esc(ss.text)}</p>`).join("")}`
            )
            .join("")}
          <h2>Approfondimenti</h2>
          <ul>${(h.spokes || []).map((s) => `<li><a href="/blog/${s.slug}">${esc(s.label)}</a></li>`).join("")}</ul>
          ${faqHtml(h.faq)}
        </article>`,
    });
  }

  // --- Glossario ---
  // DefinedTermSet è lo schema pensato per i glossari: ogni voce è una
  // definizione autonoma, il formato che i motori generativi citano meglio.
  routes.push({
    path: "/glossario",
    head: buildHead({
      title: "Glossario della Vendita in Edilizia: 32 Termini",
      description:
        "I termini della vendita per imprese edili spiegati in modo pratico: tasso di chiusura, margine di commessa, qualificazione, follow-up, provvigioni e altri.",
      url: `${SITE}/glossario`,
      keywords: "glossario vendita edilizia, termini vendita edile, tasso di chiusura, margine commessa",
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${SITE}/glossario#glossario`,
          name: "Glossario della vendita in edilizia",
          description:
            "I termini della vendita per imprese edili, serramentisti e installatori, spiegati con definizioni pratiche.",
          url: `${SITE}/glossario`,
          inLanguage: "it-IT",
          hasDefinedTerm: glossary.map((t) => ({
            "@type": "DefinedTerm",
            "@id": `${SITE}/glossario#${t.id}`,
            name: t.term,
            description: t.definition,
            inDefinedTermSet: `${SITE}/glossario#glossario`,
          })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Glossario", path: "/glossario" },
        ]),
      ],
    }),
    body: `
      <article>
        <h1>Glossario della vendita in edilizia</h1>
        <p>I ${glossary.length} termini che servono davvero per capire e governare la vendita in un'impresa edile — dal tasso di chiusura al margine di commessa — spiegati come li usiamo sul campo.</p>
        ${glossaryGroups
          .map((group) => {
            const terms = glossary.filter((t) => t.group === group);
            if (!terms.length) return "";
            return `<h2>${esc(group)}</h2><dl>${terms
              .map(
                (t) =>
                  `<dt id="${t.id}"><h3>${esc(t.term)}</h3></dt><dd><p>${esc(t.definition)}</p>${
                    t.why ? `<p><strong>Perché conta:</strong> ${esc(t.why)}</p>` : ""
                  }${
                    t.article
                      ? `<p><a href="/blog/${t.article}">${esc(t.articleLabel || t.term)}</a></p>`
                      : ""
                  }</dd>`
              )
              .join("")}</dl>`;
          })
          .join("")}
      </article>`,
  });

  // --- Pagina EdiliziaInCloud ---
  routes.push({
    path: "/edilizia-in-cloud",
    head: buildHead({
      title: "Edilizia in Cloud — Il Gestionale per Imprese Edili",
      description:
        "Preventivi, cantieri, fatture e incassi in un unico gestionale pensato per le imprese edili italiane. Prova gratuita di 31 giorni.",
      url: `${SITE}/edilizia-in-cloud`,
      keywords: "gestionale edilizia cloud, software imprese edili, crm edilizia",
      schemas: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Edilizia in Cloud", path: "/edilizia-in-cloud" },
        ]),
      ],
    }),
    body: `
      <h1>Edilizia in Cloud — il gestionale per le imprese edili</h1>
      <p>Preventivi, gestione cantieri, fatturazione elettronica, margini e incassi in un unico posto. Il gestionale che usiamo con le aziende che seguiamo.</p>`,
  });

  // --- Pagine legali ---
  const legal = [
    ["/privacy", "Privacy Policy", "Informativa sul trattamento dei dati personali di Vendita Edile®."],
    ["/cookie", "Cookie Policy", "Informativa sui cookie tecnici e di marketing utilizzati dal sito."],
    ["/termini", "Termini e Condizioni", "Termini e condizioni d'uso del sito Vendita Edile®."],
  ];
  for (const [p, title, description] of legal) {
    routes.push({
      path: p,
      head: buildHead({ title: `${title} — ${BRAND}`, description, url: `${SITE}${p}` }),
      body: `<h1>${title}</h1><p>${description}</p>`,
    });
  }

  // --- Landing pubblicitarie e pagina grazie: fuori dall'indice ---
  // Vanno comunque prerenderizzate, altrimenti il fallback SPA servirebbe
  // loro l'HTML della home, canonical incluso.
  const noindexRoutes = [
    ["/consulenza", "Consulenza Gratuita per Imprenditori Edili", "30 minuti al telefono per capire dove perdi firme e margine. Gratis e senza impegno."],
    ["/crmgratis", "Prova Gratis 31 Giorni di Edilizia in Cloud", "Preventivi, cantieri, fatture e incassi in un posto solo. Prova gratuita di 31 giorni."],
    ["/risorsegratuite", "Risorse Gratuite per Imprenditori Edili", "Manuali di vendita, gestionale gratis 31 giorni, gruppo riservato e video formativi."],
    ["/adgrupporiservato", "Gruppo Riservato per Imprenditori Edili", "Script, template e strategie per vendere di più nel settore edile."],
    ["/grazie", "Grazie — Richiesta ricevuta", "Abbiamo ricevuto la tua richiesta. Ti contattiamo nelle prossime ore."],
  ];
  for (const [p, title, description] of noindexRoutes) {
    routes.push({
      path: p,
      head: buildHead({ title: `${title} — ${BRAND}`, description, url: `${SITE}${p}`, noindex: true }),
      body: `<h1>${title}</h1><p>${description}</p>`,
    });
  }

  return routes;
}

/* ------------------------------------------------------------------ *
 * 5. Scrittura dei file
 * ------------------------------------------------------------------ */

async function main() {
  const content = await loadContent();
  // Prima delle rotte: serve la mappa degli asset con hash per poter
  // risolvere copertine e immagini dei contenuti.
  await buildAssetMap();
  contentImageMap = content.contentImages || {};
  const template = await readFile(path.join(dist, "index.html"), "utf8");
  const routes = buildRoutes(content);

  const warnings = [];
  for (const route of routes) {
    let html = template;

    // Sostituisce il <title> statico (o il blocco già iniettato da un run
    // precedente) con i meta della rotta. I marcatori rendono lo script
    // ripetibile senza accumulare tag duplicati.
    const headBlock = `<!--seo:start-->\n    ${route.head}\n    <!--seo:end-->`;
    html = html.includes("<!--seo:start-->")
      ? html.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headBlock)
      : html.replace(/<title>[\s\S]*?<\/title>/, headBlock);

    // Inietta il contenuto reale dentro #root (React lo rimpiazza al mount)
    html = html.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">\n${route.body.trim()}\n    </div>`
    );

    const outDir =
      route.path === "/" ? dist : path.join(dist, route.path.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf8");

    // Controllo limiti SERP. Misuriamo il testo come lo vede l'utente,
    // non l'HTML: &quot; conta 1 carattere, non 6.
    const unesc = (v) =>
      v
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    const title = unesc(/<title>(.*?)<\/title>/.exec(route.head)?.[1] ?? "");
    const desc = unesc(/name="description" content="(.*?)"/.exec(route.head)?.[1] ?? "");
    if (title.length > 60) warnings.push(`title ${title.length} char — ${route.path}`);
    if (desc.length > 160) warnings.push(`description ${desc.length} char — ${route.path}`);
  }

  // Sitemap generata dalle stesse rotte del prerender: un'unica fonte di
  // verità, così non può più andare fuori sincrono quando si aggiunge un
  // articolo. Le rotte noindex sono escluse.
  const priority = (p) => {
    if (p === "/") return "1.0";
    if (p === "/blog") return "0.8";
    if (p.startsWith("/blog/")) return "0.7";
    if (["/privacy", "/cookie", "/termini"].includes(p)) return "0.3";
    return "0.8";
  };
  const changefreq = (p) =>
    p === "/" || p === "/blog" ? "weekly" : p.startsWith("/blog/") ? "monthly" : "monthly";

  const indexable = routes.filter((r) => !/noindex/.test(r.head));
  const today = new Date().toISOString().slice(0, 10);
  const urls = indexable
    .map((r) => {
      const lastmod = r.lastmod || today;
      return `  <url>\n    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq(r.path)}</changefreq>\n    <priority>${priority(r.path)}</priority>\n  </url>`;
    })
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(root, "public/sitemap.xml"), sitemap, "utf8");

  // llms.txt — l'elenco degli articoli si rigenera dal registro dei contenuti,
  // così non resta indietro quando se ne pubblica uno nuovo. Le sezioni scritte
  // a mano (introduzione, definizioni, contatti) restano intatte.
  const llmsPath = path.join(root, "public/llms.txt");
  let llms = await readFile(llmsPath, "utf8");
  const listStart = "## Articoli del blog (guide pratiche)";
  const listEnd = "## Contatti";
  if (llms.includes(listStart) && llms.includes(listEnd)) {
    const byCategory = new Map();
    for (const a of content.articles) {
      if (!byCategory.has(a.category)) byCategory.set(a.category, []);
      byCategory.get(a.category).push(a);
    }
    const blocks = [...byCategory.entries()].map(
      ([cat, list]) =>
        `${cat}:\n` +
        list
          .map((a) => `- [${a.title}](${SITE}/blog/${a.slug}): ${a.excerpt.split(". ")[0]}.`)
          .join("\n")
    );
    const generated = `${listStart}\n\n${blocks.join("\n\n")}\n\n`;
    llms =
      llms.slice(0, llms.indexOf(listStart)) + generated + llms.slice(llms.indexOf(listEnd));
    await writeFile(llmsPath, llms, "utf8");
    await writeFile(path.join(dist, "llms.txt"), llms, "utf8");
  }

  console.log(`✓ llms.txt: ${content.articles.length} articoli elencati per categoria`);
  console.log(`✓ Prerender: ${routes.length} pagine statiche generate in dist/`);
  console.log(`✓ Sitemap: ${indexable.length} URL indicizzabili (${routes.length - indexable.length} noindex esclusi)`);
  if (warnings.length) {
    console.log(`⚠ ${warnings.length} meta fuori limite SERP:`);
    for (const w of warnings.slice(0, 12)) console.log(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error("Prerender fallito:", err);
  process.exit(1);
});
