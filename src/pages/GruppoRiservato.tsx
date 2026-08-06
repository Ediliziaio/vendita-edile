import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, Lock, Users, Download } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { SITE_URL } from "@/lib/schema";
import { fbTrackCustom } from "@/lib/analytics";

const GROUP_URL = "https://jo.my/gruppoedilizia";

const steps = [
  {
    icon: Users,
    step: "Passo 1",
    title: "Richiedi l'accesso al gruppo",
    text: "Clicca il bottone qui sotto e richiedi l'iscrizione al Gruppo Esclusivo per imprenditori edili.",
  },
  {
    icon: Lock,
    step: "Passo 2",
    title: "Entra nel gruppo riservato",
    text: "Appena approvato sei dentro: zero email, zero telefonate. Solo contenuti ad alto valore.",
  },
  {
    icon: Download,
    step: "Passo 3",
    title: "Scarica il Manuale gratis",
    text: "Trovi il Manuale (e tutte le altre risorse riservate) nel post in evidenza del gruppo.",
  },
];

const benefits = [
  "Script già pronti per acquisire clienti",
  "Template per offerte, preventivi e pagine di vendita",
  "Strategie per aumentare i margini anche senza aumentare i clienti",
  "Metodi per gestire i tuoi collaboratori e liberarli (e liberarti)",
  "Tecniche psicologiche per riprogrammare la tua mentalità imprenditoriale",
  "Il nostro Metodo dei 90 Giorni per passare da incerto a inarrestabile",
];

function GroupCTA({ position }: { position: string }) {
  return (
    <a
      href={GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        fbTrackCustom("Click Gruppo Riservato", { cta_position: position })
      }
      className="block w-full rounded-lg bg-secondary px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-secondary-foreground shadow-[0_0_40px_-10px_hsl(var(--gold-glow)/0.8)] transition-transform duration-200 hover:scale-105 sm:inline-block sm:w-auto sm:px-10 sm:text-lg"
    >
      Accedi al Gruppo e Scarica il Manuale
    </a>
  );
}

/**
 * Landing /adgrupporiservato — pagina-ponte del funnel manuali:
 * "manca un solo passo" → per scaricare il Manuale devi entrare
 * nel gruppo Facebook riservato. Colori brand: navy + oro.
 */
const GruppoRiservato = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <SEOHead
        title="Manca un Passo: Scarica il Manuale nel Gruppo Riservato"
        description="Per scaricare il Manuale devi accedere al gruppo esclusivo per imprenditori edili: script, template e strategie per vendere di più. Zero email, zero telefono."
        url={`${SITE_URL}/adgrupporiservato`}
        noindex
      />

      <main className="bg-background font-outfit text-foreground">
        {/* Barra alert */}
        <div className="bg-secondary px-4 py-3 text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wide text-secondary-foreground sm:text-base">
            <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
            Aspetta! Manca un solo passo per scaricare il Manuale
          </p>
        </div>

        {/* Hero navy */}
        <section className="px-5 pb-12 pt-10 text-center sm:px-6 sm:pb-16 sm:pt-14">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-[26px] font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Per Scaricare il Manuale devi Accedere al{" "}
              <span className="text-secondary">
                Gruppo Esclusivo per Imprenditori Edili
              </span>{" "}
              (&egrave; Gratis)
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Il Manuale ti aspetta nel post in evidenza del gruppo, insieme a
              script, template e strategie riservate.{" "}
              <strong className="text-foreground">
                Zero email, zero telefono
              </strong>
              : solo contenuti ad alto valore per chi lavora nell'edilizia.
            </p>

            {/* CTA subito visibile, prima dei passi (fondamentale su mobile) */}
            <div className="mt-7">
              <GroupCTA position="sopra-passi" />
            </div>

            {/* 3 passi */}
            <div className="mt-8 grid gap-4 text-left sm:mt-10 sm:grid-cols-3 sm:gap-6">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <item.icon className="h-8 w-8 text-secondary" aria-hidden />
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-secondary">
                    {item.step}
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <img
              src="/landing/gruppo-facebook.webp"
              alt="Anteprima del gruppo Facebook riservato Imprenditore Edile"
              width={1080}
              height={1080}
              className="mx-auto mt-10 w-full max-w-xl rounded-2xl border border-border shadow-2xl shadow-black/40 sm:mt-12"
              loading="eager"
            />
          </div>
        </section>

        {/* Cosa scoprirai */}
        <section className="border-t border-border bg-card px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-4xl">
              Cosa Trovi Nel Gruppo{" "}
              <span className="text-secondary">(Oltre al Manuale)</span>
            </h2>

            <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0 text-secondary sm:h-7 sm:w-7"
                    aria-hidden
                  />
                  <span className="text-base font-semibold sm:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center sm:mt-12">
              <GroupCTA position="fine-pagina" />
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" aria-hidden />
                Il Manuale e l'accesso gratuito a Edilizia in Cloud sono
                riservati ai membri del gruppo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
};

export default GruppoRiservato;
