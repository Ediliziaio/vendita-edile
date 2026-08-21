import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { glossary, glossaryGroups, getGlossaryByGroup } from "@/content/glossary";
import { getArticleBySlug } from "@/content";
import { SITE_URL, breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { trackContentCta } from "@/lib/analytics";
import { goToContactForm } from "@/config/site";

const URL = `${SITE_URL}/glossario`;

/**
 * Glossario della vendita in edilizia.
 * Formato definizionale: ogni voce risponde in modo autonomo a "cosa
 * significa X". È il formato più ripreso dai motori generativi e fa da
 * hub di internal linking verso tutti gli articoli del blog.
 */
const Glossario = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // DefinedTermSet: lo schema pensato proprio per i glossari.
  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${URL}#glossario`,
    name: "Glossario della vendita in edilizia",
    description:
      "I termini della vendita per imprese edili, serramentisti e installatori, spiegati con definizioni pratiche.",
    url: URL,
    inLanguage: "it-IT",
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${URL}#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: `${URL}#glossario`,
    })),
  };

  return (
    <>
      <SEOHead
        title="Glossario della Vendita in Edilizia: 32 Termini"
        description="I termini della vendita per imprese edili spiegati in modo pratico: tasso di chiusura, margine di commessa, qualificazione, follow-up, provvigioni e altri."
        url={URL}
        keywords={["glossario vendita edilizia", "termini vendita edile", "tasso di chiusura", "margine commessa"]}
        jsonLd={[
          organizationSchema(),
          definedTermSet,
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Glossario", url: URL },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* Header */}
        <section className="section-padding pb-8 pt-28 md:pt-36">
          <div className="container-narrow px-4 md:px-6">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground/70">Glossario</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Glossario della vendita in edilizia
              </h1>

              <div className="mb-8 rounded-2xl border-l-4 border-secondary bg-card/60 p-6">
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  I {glossary.length} termini che servono davvero per capire e
                  governare la vendita in un'impresa edile — dal tasso di
                  chiusura al margine di commessa — spiegati come li usiamo
                  sul campo, non come li scrive un manuale.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Ogni voce dice cosa significa il termine e perché conta nella
                pratica. Dove serve, trovi il link alla guida che approfondisce
                l'argomento.
              </p>
            </motion.div>

            {/* Indice per gruppo */}
            <nav aria-label="Indice del glossario" className="mt-10 flex flex-wrap gap-2">
              {glossaryGroups.map((group) => (
                <a
                  key={group}
                  href={`#${group.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary"
                >
                  {group}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Voci raggruppate */}
        {glossaryGroups.map((group) => {
          const terms = getGlossaryByGroup(group);
          if (!terms.length) return null;
          return (
            <section
              key={group}
              id={group.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-24 border-t border-border/50 py-12 md:py-16"
            >
              <div className="container-narrow px-4 md:px-6">
                <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                  {group}
                </h2>

                <dl className="space-y-6">
                  {terms.map((t) => {
                    const article = t.article ? getArticleBySlug(t.article) : undefined;
                    return (
                      <div
                        key={t.id}
                        id={t.id}
                        className="scroll-mt-24 rounded-2xl border border-border bg-card/60 p-6"
                      >
                        <dt className="text-xl font-bold text-secondary">
                          {t.term}
                        </dt>
                        <dd className="mt-3 space-y-3">
                          <p className="leading-relaxed text-foreground">
                            {t.definition}
                          </p>
                          {t.why && (
                            <p className="leading-relaxed text-muted-foreground">
                              <strong className="text-foreground/80">
                                Perché conta:
                              </strong>{" "}
                              {t.why}
                            </p>
                          )}
                          {article && (
                            <Link
                              to={`/blog/${article.slug}`}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
                            >
                              <BookOpen className="h-4 w-4" aria-hidden />
                              {t.articleLabel ?? article.title}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </Link>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="border-t border-border/50 py-12 md:py-16">
          <div className="container-narrow px-4 md:px-6">
            <div className="rounded-2xl border border-secondary/30 bg-card/60 p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Conoscere i termini non basta
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Sapere cos'è il tasso di chiusura non lo alza. Se vuoi capire
                dove la tua azienda perde firme e margine, parliamone
                direttamente.
              </p>
              <Button
                size="lg"
                className="mt-6"
                onClick={() => {
                  trackContentCta(
                    { type: "glossario", slug: "glossario", title: "Glossario della vendita in edilizia" },
                    "fine-glossario"
                  );
                  goToContactForm();
                }}
              >
                Richiedi una consulenza gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Glossario;
