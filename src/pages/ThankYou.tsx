import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { articles } from "@/content";
import { SITE_URL } from "@/lib/schema";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const suggested = articles.slice(0, 3);

  const steps = [
    {
      icon: CheckCircle2,
      title: "Richiesta ricevuta",
      text: "La tua candidatura è arrivata correttamente al nostro team.",
    },
    {
      icon: Phone,
      title: "Ti chiamiamo noi",
      text: "Un nostro Consulente ti contatta nelle prossime ore al numero che ci hai lasciato.",
    },
    {
      icon: ShieldCheck,
      title: "Valutazione senza impegno",
      text: "Capiamo insieme se e come possiamo aiutarti. Nessuna pressione, nessun venditore aggressivo.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Grazie — Richiesta ricevuta"
        description="Abbiamo ricevuto la tua richiesta. Verrai contattato nelle prossime ore da un nostro Consulente."
        url={`${SITE_URL}/grazie`}
        noindex
      />
      <Navbar />

      <main className="overflow-hidden">
        <section className="section-padding relative pt-28 md:pt-36">
          {/* Glow di sfondo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.12)_0%,transparent_55%)]" />

          <div className="container-narrow relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40"
            >
              <CheckCircle2 className="h-11 w-11 text-gold" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Grazie, abbiamo ricevuto{" "}
              <span className="text-gradient">la tua richiesta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-lg text-muted-foreground md:text-xl"
            >
              <Clock className="h-5 w-5 text-gold" />
              Verrai chiamato nelle prossime ore da un nostro Consulente.
            </motion.p>

            {/* Cosa succede ora */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3"
            >
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card/60 p-6 text-left"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
                    <s.icon className="h-5 w-5 text-gold" />
                  </div>
                  <p className="mb-1 font-bold text-foreground">{s.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Rassicurazione + suggerimento */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto mt-10 max-w-2xl text-muted-foreground"
            >
              Nel frattempo, tieni il telefono a portata di mano. Se vuoi
              arrivare preparato alla chiamata, dai un'occhiata alle nostre guide
              gratuite sulla vendita in edilizia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button asChild variant="gold" size="lg">
                <Link to="/blog">Leggi le guide sulla vendita</Link>
              </Button>
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/">Torna alla home</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Articoli suggeriti */}
        <section className="px-4 md:px-6 pb-20">
          <div className="container-narrow">
            <h2 className="mb-6 text-center text-xl font-bold text-foreground md:text-2xl">
              Da leggere mentre aspetti la chiamata
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {suggested.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-secondary/60"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-secondary">
                      {a.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                      Leggi
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ThankYou;
