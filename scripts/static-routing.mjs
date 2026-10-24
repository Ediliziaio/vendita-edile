import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

export async function writeStaticRoute(dist, routePath, html) {
  const target = routePath === "/" ? path.join(dist, "index.html") : path.join(dist, `${routePath.replace(/^\//, "")}.html`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

export async function writeNotFound(dist, template, brand) {
  const head = `<title>Pagina non trovata | ${brand}</title><meta name="robots" content="noindex, follow">`;
  const clean = template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\s+[^>]*(?:name="(?:robots|description)"|property="og:[^"]+")[^>]*>/gi, "")
    .replace(/<link\s+[^>]*rel="canonical"[^>]*>/gi, "")
    .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${head}</head>`);
  const body = `<main style="max-width:48rem;margin:5rem auto;padding:1.5rem"><p>${brand}</p><h1>Pagina non trovata</h1><p>L'indirizzo richiesto non corrisponde a una pagina disponibile.</p><nav aria-label="Riprendi la navigazione"><a href="/">Home</a> · <a href="/blog">Guide e articoli</a></nav></main>`;
  await writeFile(path.join(dist, "404.html"), replaceRootContent(clean, body), "utf8");
}

/** Replace the complete React root, including nested divs, on fresh or already-rendered HTML. */
export function replaceRootContent(html, content) {
  const opening = '<div id="root">';
  const start = html.indexOf(opening);
  if (start < 0) throw new Error("React root missing from SEO template");
  const contentStart = start + opening.length;
  const tags = /<div\b[^>]*>|<\/div\s*>/gi;
  tags.lastIndex = contentStart;
  let depth = 1;
  for (let match; (match = tags.exec(html));) {
    depth += /^<\/div/i.test(match[0]) ? -1 : 1;
    if (depth === 0) return html.slice(0, contentStart) + content + html.slice(match.index);
  }
  throw new Error("Unbalanced React root in SEO template");
}
