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

const features = [
  {
    icon: Users,
    title: "CRM e pipeline vendite",
    text: "Tutti i contatti e i preventivi in un unico posto: sai sempre chi richiamare e quanto vale ogni trattativa.",
  },
  {
    icon: Calculator,
    title: "Preventivi con AI",
    text: "Prepari preventivi professionali in pochi minuti e li invii con firma elettronica integrata.",
  },
  {
    icon: Building2,
    title: "Gestione cantieri",
    text: "Giornale dei lavori, magazzino di cantiere e DDT digitali: il cantiere sotto controllo dal telefono.",
  },
  {
    icon: Receipt,
    title: "Fatturazione elettronica",
    text: "Fatture, contabilità fiscale e scadenze gestite senza commercialista in mezzo a ogni passaggio.",
  },
  {
    icon: TrendingUp,
    title: "Margini e previsionale di cassa",
    text: "Vedi quanto guadagni davvero su ogni cantiere e quanta cassa avrai tra 30, 60 e 90 giorni.",
  },
  {
    icon: Zap,
    title: "WhatsApp, email e automazioni",
    text: "Follow-up automatici sui preventivi fermi: il sistema rincorre i clienti al posto tuo.",
  },
];

const guarantees = [
  {
    icon: CalendarCheck,
    text: "31 giorni di prova completa: a fine prova scegli il piano o cancelli, nessun addebito automatico",
  },
  { icon: Headphones, text: "Supporto italiano dedicato, dalla configurazione in poi" },
  { icon: ShieldCheck, text: "I tuoi dati restano tuoi: esporti tutto quando vuoi" },
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
      className="inline-block rounded-lg bg-[#43B14B] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105 hover:bg-[#3AA042]"
    >
      Attiva GRATIS i tuoi 31 Giorni
    </a>
  );
}

/**
 * Landing /crmgratis — prova gratuita di 31 giorni di Edilizia in Cloud.
 * È la destinazione della card "gestionale" di /risorsegratuite e l'URL
 * a cui puntava il funnel originale (venditaedile.it/crmgratis).
 */
const CrmGratis = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <SEOHead
        title="Prova Gratis 31 Giorni di Edilizia in Cloud"
        description="Attiva gratis 31 giorni di Edilizia in Cloud: CRM, preventivi con AI, cantieri, fatturazione e automazioni in un unico gestionale per aziende edili. Nessun addebito automatico."
        url={`${SITE_URL}/crmgratis`}
        noindex
      />

      <main className="font-outfit">
        {/* Hero */}
        <section className="bg-[#F1F9FF] px-6 pb-16 pt-14 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 inline-block rounded-full bg-[#DBB33B] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#101828]">
              Prova gratuita &mdash; nessun addebito automatico
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-[#101828] sm:text-4xl md:text-5xl">
              31 Giorni GRATIS di Edilizia in Cloud: il Gestionale Tutto in Uno
              per Aziende Edili
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#1D2939] sm:text-xl">
              <strong>Acquisisci contatti e vendite</strong> e{" "}
              <strong>
                automatizza e digitalizza tutti i processi della tua attivit&agrave;
              </strong>
              : preventivi, cantieri, fatture e incassi in un unico posto.
              Provalo per 31 giorni <strong>senza pagare 1&euro;</strong>.
            </p>

            <div className="mt-8">
              <TrialCTA position="hero" />
            </div>

            <img
              src="/landing/crm-dashboard.png"
              alt="Dashboard di Edilizia in Cloud con opportunità, funnel e conversioni"
              width={1640}
              height={924}
              className="mx-auto mt-12 w-full max-w-3xl"
              loading="eager"
            />
          </div>
        </section>

        {/* Funzionalità */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold text-[#101828] sm:text-4xl">
              Cosa Fai con Edilizia in Cloud
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#E4E7EC] bg-[#F9FAFB] p-6 text-left"
                >
                  <feature.icon className="h-8 w-8 text-[#43B14B]" aria-hidden />
                  <h3 className="mt-4 text-lg font-extrabold text-[#101828]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <TrialCTA position="dopo-funzionalita" />
            </div>
          </div>
        </section>

        {/* Garanzie */}
        <section className="bg-[#F1F9FF] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold text-[#101828] sm:text-4xl">
              Zero Rischi, Zero Vincoli
            </h2>
            <ul className="mt-10 space-y-5">
              {guarantees.map((guarantee) => (
                <li key={guarantee.text} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-7 w-7 shrink-0 text-[#43B14B]"
                    aria-hidden
                  />
                  <span className="text-lg font-semibold text-[#1D2939]">
                    {guarantee.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <TrialCTA position="fine-pagina" />
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
};

export default CrmGratis;
