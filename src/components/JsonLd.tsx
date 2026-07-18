import { useEffect } from "react";

interface JsonLdProps {
  data: object | object[];
}

/**
 * Inietta i dati strutturati JSON-LD direttamente in <head>.
 * Approccio imperativo (non via react-helmet-async) perché più affidabile:
 * garantisce che gli <script type="application/ld+json"> siano sempre presenti
 * nel DOM — requisito chiave per SEO, GEO e AEO.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);

  useEffect(() => {
    const items = Array.isArray(data) ? data : [data];
    const nodes = items.map((schema) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(schema);
      el.setAttribute("data-jsonld", "route");
      document.head.appendChild(el);
      return el;
    });
    return () => nodes.forEach((n) => n.remove());
    // Rigenera solo quando cambia il contenuto serializzato.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [json]);

  return null;
}
