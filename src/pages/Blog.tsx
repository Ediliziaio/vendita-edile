import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Search, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatArticleDate } from "@/lib/date";
import { articles, getCategories, getFeaturedArticle } from "@/content";
import type { ArticleCategory } from "@/content/types";
import {
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

type Filter = "Tutti" | ArticleCategory;

const Blog = () => {
  const [filter, setFilter] = useState<Filter>("Tutti");
  const [query, setQuery] = useState("");
  const categories = getCategories();
  const featured = getFeaturedArticle();

  const q = query.trim().toLowerCase();
  const isSearching = q.length > 0;
  const isFiltering = filter !== "Tutti" || isSearching;

  // In modalità ricerca/filtro cerchiamo su TUTTI gli articoli (anche il featured);
  // altrimenti l'articolo in evidenza è mostrato a parte nella hero.
  const base = useMemo(
    () => (isFiltering ? articles : articles.filter((a) => a.slug !== featured.slug)),
    [isFiltering, featured.slug]
  );

  const filtered = useMemo(() => {
    return base.filter((a) => {
      const matchesCategory = filter === "Tutti" || a.category === filter;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = `${a.title} ${a.excerpt} ${a.keyword} ${a.tags.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [base, filter, q]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog VENDITA EDILE®",
    description:
      "Strategie di vendita, marketing e gestione per imprese edili: infissi, serramenti, fotovoltaico e ristrutturazioni.",
    url: `${SITE_URL}/blog`,
    inLanguage: "it-IT",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: articles.slice(0, 20).map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.publishedAt,
    })),
  };

  return (
    <>
      <SEOHead
        title="Blog — Vendita, Marketing e Gestione per Imprese Edili"
        description="Strategie concrete di vendita, marketing e gestione per imprese edili: come aumentare chiusure, difendere il margine e far crescere la tua azienda di infissi, serramenti e fotovoltaico."
        url={`${SITE_URL}/blog`}
        keywords={[
          "blog edilizia",
          "vendita infissi",
          "marketing impresa edile",
          "preventivi edilizia",
          "controllo di gestione edilizia",
        ]}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          blogSchema,
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="section-padding pb-8 md:pb-12 pt-28 md:pt-36">
          <div className="container-narrow px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
                Il Blog di VENDITA EDILE®
              </span>
              <h1 className="heading-section mb-5 text-foreground">
                Come vendere di più in edilizia,{" "}
                <span className="text-gradient">senza abbassare i prezzi</span>
              </h1>
              <p className="body-large text-muted-foreground">
                Strategie di vendita, marketing e gestione scritte da chi vende
                infissi, serramenti e fotovoltaico ogni giorno. Niente teoria da
                aula: solo cose che funzionano sul campo, in cantiere e in
                showroom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured (nascosto durante ricerca/filtro) */}
        {!isFiltering && (
        <section className="px-4 md:px-6 pb-4">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card/60 transition-colors hover:border-secondary/60 md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    In evidenza
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-secondary">
                      {featured.category}
                    </span>
                    <time dateTime={featured.publishedAt}>
                      {formatArticleDate(featured.publishedAt)}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readingTime} min
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-secondary md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mb-5 text-muted-foreground md:text-lg">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 font-semibold text-secondary">
                    Leggi l'articolo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
        )}

        {/* Filtri + ricerca */}
        <section className="px-4 md:px-6 pt-10">
          <div className="container-narrow">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {(["Tutti", ...categories] as Filter[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      filter === c
                        ? "border-secondary bg-secondary text-secondary-foreground"
                        : "border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cerca un articolo..."
                  aria-label="Cerca un articolo"
                  className="w-full rounded-full border border-border bg-card/60 py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Cancella ricerca"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {isFiltering && (
              <p className="mt-4 text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "articolo trovato" : "articoli trovati"}
                {isSearching && (
                  <>
                    {" "}per <span className="text-foreground">"{query}"</span>
                  </>
                )}
              </p>
            )}
          </div>
        </section>

        {/* Griglia */}
        <section className="px-4 md:px-6 py-8 md:py-12">
          <div className="container-narrow">
            {filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((a, i) => (
                  <ArticleCard key={a.slug} article={a} index={i} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="mb-4 text-muted-foreground">
                  Nessun articolo trovato
                  {isSearching ? <> per "{query}"</> : " in questa categoria"}.
                </p>
                <Button
                  variant="goldOutline"
                  size="sm"
                  onClick={() => {
                    setQuery("");
                    setFilter("Tutti");
                  }}
                >
                  Azzera i filtri
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-6 pb-20">
          <div className="container-narrow">
            <div className="relative overflow-hidden rounded-3xl border border-secondary/40 bg-card/70 p-8 text-center md:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1)_0%,transparent_60%)]" />
              <div className="relative">
                <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-foreground md:text-4xl">
                  Leggere è utile. Applicare con un sistema è un'altra cosa.
                </h2>
                <p className="mx-auto mb-7 max-w-2xl text-muted-foreground md:text-lg">
                  Se vuoi il metodo completo applicato alla tua azienda e ai tuoi
                  commerciali, candidati al programma di affiancamento VENDITA
                  EDILE®. Pochi posti al mese, selezione reale.
                </p>
                <Button asChild variant="gold" size="lg">
                  <Link to="/#candidati">Scopri se qualifichi (2 minuti)</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
