// Entry point usato solo dallo script di prerender: espone i contenuti
// (articoli, hub) a Node tramite un bundle esbuild.
export { articles } from "../src/content/index";
export { hubs } from "../src/content/hubs";
export { glossary, glossaryGroups } from "../src/content/glossary";
export { contentImages } from "../src/content/images";

export { legalDocs } from "../src/content/legal";
export { mainLinks, areas, painPoints } from "../src/content/eic";
