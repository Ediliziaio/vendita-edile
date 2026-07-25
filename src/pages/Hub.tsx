import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getHub } from "@/content/hubs";
import { getArticleBySlug } from "@/content";
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  professionalServiceSchema,
} from "@/lib/schema";

interface HubProps {
  slug: string;
}

/**
 * Pagina HUB di un silo di contenuto (architettura hub & spoke).
 * Struttura AEO-first: risposta secca in apertura, H2 autonomi, FAQ,
 * blocco "Approfondimenti" verso tutti gli spoke del silo.
 */
const Hub = ({ slug }: HubProps) => {
  const hub = getHub(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!hub) return <Navigate to="/" replace />;

  const url = `${SITE_URL}/${hub.slug}`;

  // Mostriamo solo gli spoke effettivamente pubblicati
  const spokes = hub.spokes.filter((s) => getArticleBySlug(s.slug));

  return (
    <>
      <SEOHead
        title={hub.metaTitle}
        description={hub.metaDescription}
        url={url}
        keywords={[hub.keyword]}
        jsonLd={[
          organizationSchema(),
          professionalServiceSchema({
            name: `VENDITA EDILE® — ${hub.h1}`,
            description: hub.metaDescription,
            url,
          }),
          faqSchema(hub.faq),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: hub.h1, url },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* Header + risposta secca */}
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
              <span className="text-foreground/70">{hub.h1}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {hub.h1}
              </h1>

              {/* Blocco risposta secca: è ciò che viene estratto da AI e snippet */}
              <div className="mb-8 rounded-2xl border-l-4 border-secondary bg-card/60 p-6">
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  {hub.answerFirst}
                </p>
              </div>

              {/* Frase-entità canonica, nel primo paragrafo */}
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">{hub.entity}</strong>{" "}
                Questa pagina raccoglie il metodo completo e tutti gli
                approfondimenti collegati.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Corpo */}
        <section className="px-4 md:px-6 pb-8">
          <div className="container-narrow">
            <div className="max-w-3xl space-y-12">
              {hub.sections.map((section) => (
                <div key={section.h2}>
                  <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                    {section.h2}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <Zap className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="mt-6 space-y-6">
                      {section.subsections.map((sub) => (
                        <div
                          key={sub.h3}
                          className="rounded-xl border border-border bg-card/40 p-5"
                        >
                          <h3 className="mb-2 text-lg font-bold text-foreground">
                            {sub.h3}
                          </h3>
                          <p className="leading-relaxed text-muted-foreground">
                            {sub.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approfondimenti: hub → tutti gli spoke del silo */}
        {spokes.length > 0 && (
          <section className="section-padding py-12 md:py-16">
            <div className="container-narrow">
              <div className="mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Approfondimenti
                </h2>
              </div>
              <p className="mb-6 max-w-2xl text-muted-foreground">
                Ogni fase del metodo ha la sua guida dedicata. Sono gli
                approfondimenti che compongono questo percorso.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {spokes.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/blog/${s.slug}`}
                      className="group flex items-center gap-2 rounded-lg border border-border bg-card/40 px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-secondary/60 hover:bg-card"
                    >
                      <span className="flex-1">{s.label}</span>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="px-4 md:px-6 pb-12">
          <div className="container-narrow">
            <div className="max-w-3xl">
              <h2 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                Domande frequenti
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {hub.faq.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA + cross-brand (uno solo) */}
        <section className="px-4 md:px-6 pb-20">
          <div className="container-narrow">
            <div className="relative overflow-hidden rounded-3xl border border-secondary/40 bg-card/70 p-8 text-center md:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1)_0%,transparent_60%)]" />
              <div className="relative">
                <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-foreground md:text-4xl">
                  {hub.ctaTitle}
                </h2>
                <p className="mx-auto mb-7 max-w-2xl text-muted-foreground md:text-lg">
                  {hub.ctaText}
                </p>
                <Button asChild variant="gold" size="lg">
                  <Link to="/#candidati">Scopri se qualifichi (2 minuti)</Link>
                </Button>
                <p className="mt-6 text-sm text-muted-foreground">
                  Per tenere sotto controllo margini e cassa dei lavori che chiudi,
                  valuta un{" "}
                  <Link
                    to="/edilizia-in-cloud"
                    className="font-medium text-secondary hover:underline"
                  >
                    gestionale per imprese edili
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Hub;
