import { useEffect } from "react";
import {
  CheckCircle2,
  Users,
  Calculator,
  Building2,
  Receipt,
  TrendingUp,
  Zap,
  ShieldCheck,
  Headphones,
  CalendarCheck,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { SITE_URL } from "@/lib/schema";
import { fbTrackCustom } from "@/lib/analytics";

const TRIAL_URL = "https://www.ediliziaincloud.com/demo/";

// Copy in stile Florin: niente feature, solo il cambiamento concreto.
const features = [
  {
    icon: Users,
    title: "Sai sempre chi richiamare",
    text: "Ogni preventivo ha uno stato: da fare, inviato, da firmare. Nessun cliente dimenticato.",
  },
  {
    icon: Calculator,
    title: "Preventivi pronti in minuti",
    text: "Lo prepari in pochi minuti e lo mandi con la firma elettronica. Il cliente firma dal telefono.",
  },
  {
    icon: Building2,
    title: "Il cantiere si aggiorna da solo",
    text: "Il capocantiere carica giornale lavori e foto dal telefono. Tu vedi tutto senza chiamare.",
  },
  {
    icon: Receipt,
    title: "Fatture e scadenze sotto controllo",
    text: "Fatturi dal gestionale e vedi subito chi ti deve ancora pagare.",
  },
  {
    icon: TrendingUp,
    title: "Sai se ci stai guadagnando",
    text: "Margine cantiere per cantiere e cassa a 30, 60, 90 giorni. Prima che sia troppo tardi.",
  },
  {
    icon: Zap,
    title: "I preventivi fermi si muovono da soli",
    text: "WhatsApp ed email partono in automatico sui preventivi fermi. Il sistema rincorre i clienti al posto tuo.",
  },
];

const guarantees = [
  {
    icon: CalendarCheck,
    text: "31 giorni completi: a fine prova scegli il piano o chiudi. Nessun addebito automatico.",
  },
  {
    icon: Headphones,
    text: "Supporto italiano: ti aiutiamo noi a partire, dalla configurazione in poi.",
  },
  {
    icon: ShieldCheck,
    text: "I dati sono tuoi: li esporti quando vuoi.",
  },
];

function TrialCTA({ position }: { position: string }) {
  return (
    <a
      href={TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        fbTrackCustom("Click EiC 31 Giorni", { cta_position: position })
      }
      className="block w-full rounded-lg bg-secondary px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-secondary-foreground shadow-[0_0_40px_-10px_hsl(var(--gold-glow)/0.8)] transition-transform duration-200 hover:scale-105 sm:inline-block sm:w-auto sm:px-10 sm:text-lg"
    >
      Attiva i 31 Giorni Gratis
    </a>
  );
}

/**
 * Landing /crmgratis — prova gratuita di 31 giorni di Edilizia in Cloud.
 * Colori brand (navy + oro), copy DOLORE → SOLUZIONE → RISULTATO.
 */
const CrmGratis = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <SEOHead
        title="Prova Gratis 31 Giorni di Edilizia in Cloud"
        description="Preventivi, cantieri, fatture e incassi in un posto solo. Prova Edilizia in Cloud gratis per 31 giorni: nessun addebito automatico, supporto italiano."
        url={`${SITE_URL}/crmgratis`}
        noindex
      />

      <main className="bg-background font-outfit text-foreground">
        {/* Hero */}
        <section className="px-5 pb-12 pt-10 text-center sm:px-6 sm:pb-16 sm:pt-14">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-secondary-foreground sm:mb-5 sm:px-5 sm:py-2 sm:text-sm">
              31 giorni gratis &mdash; nessun addebito automatico
            </p>
            <h1 className="text-[26px] font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Preventivi, Cantieri, Fatture e Incassi{" "}
              <span className="text-secondary">in un Posto Solo</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Basta preventivi rifatti il venerd&igrave; sera, SAL sul quaderno
              e clienti da rincorrere al telefono.{" "}
              <strong className="text-foreground">
                Prova Edilizia in Cloud per 31 giorni senza pagare 1&euro;
              </strong>
              : a fine prova scegli tu.
            </p>

            <div className="mt-7 sm:mt-8">
              <TrialCTA position="hero" />
            </div>

            <img
              src="/landing/crm-dashboard.webp"
              alt="Dashboard di Edilizia in Cloud con preventivi, trattative e incassi"
              width={1640}
              height={924}
              className="mx-auto mt-10 w-full max-w-3xl sm:mt-12"
              loading="eager"
            />
          </div>
        </section>

        {/* Cosa cambia */}
        <section className="border-t border-border bg-card px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-4xl">
              Cosa Cambia <span className="text-secondary">da Domani</span>
            </h2>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-background p-6 text-left"
                >
                  <feature.icon className="h-8 w-8 text-secondary" aria-hidden />
                  <h3 className="mt-4 text-lg font-extrabold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center sm:mt-12">
              <TrialCTA position="dopo-funzionalita" />
            </div>
          </div>
        </section>

        {/* Garanzie */}
        <section className="px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-extrabold sm:text-4xl">
              Zero Rischi, <span className="text-secondary">Zero Vincoli</span>
            </h2>
            <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {guarantees.map((guarantee) => (
                <li key={guarantee.text} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0 text-secondary sm:h-7 sm:w-7"
                    aria-hidden
                  />
                  <span className="text-base font-semibold sm:text-lg">
                    {guarantee.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center sm:mt-12">
              <TrialCTA position="fine-pagina" />
              <p className="mt-4 text-sm text-muted-foreground">
                Attivi oggi, domani lavori gi&agrave; col gestionale.
              </p>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
};

export default CrmGratis;
