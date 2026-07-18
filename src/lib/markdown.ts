// Utility per il rendering degli articoli in Markdown.

/** Converte un testo in uno slug adatto agli anchor (#id degli heading). */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // rimuove accenti
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Estrae gli heading H2/H3 dal Markdown per costruire l'indice (TOC). */
export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = markdown.split("\n");
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = match[2].replace(/[*_`]/g, "").trim();
      items.push({ id: slugifyHeading(text), text, level });
    }
  }
  return items;
}

/** Estrae il testo puro dai children di un nodo react-markdown (per gli id). */
export function nodeToText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(nodeToText).join("");
  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    (children as { props?: { children?: React.ReactNode } }).props
  ) {
    return nodeToText(
      (children as { props: { children?: React.ReactNode } }).props.children
    );
  }
  return "";
}
