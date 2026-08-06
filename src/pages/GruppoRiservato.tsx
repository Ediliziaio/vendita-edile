import { useEffect } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { SITE_URL } from "@/lib/schema";
import { fbTrackCustom } from "@/lib/analytics";

const GROUP_URL = "https://jo.my/gruppoedilizia";

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
      className="inline-block rounded-lg bg-[#43B14B] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-105 hover:bg-[#3AA042]"
    >
      Accedi al Gruppo Cliccando qui
    </a>
  );
}

/**
 * Landing /adgrupporiservato — replica della pagina funnel
 * "Iscriviti al Gruppo Gratuito per Imprenditori Edili".
 * Pagina destinazione ads: nessuna navigazione, solo CTA verso il gruppo.
 */
const GruppoRiservato = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <SEOHead
        title="Iscriviti al Gruppo Gratuito per Imprenditori Edili"
        description="Accedi al gruppo riservato per imprenditori edili: script, template e strategie per vendere di più. Zero email, zero telefono. Solo contenuti ad alto valore."
        url={`${SITE_URL}/adgrupporiservato`}
        noindex
      />

      <main className="font-outfit">
        {/* Hero */}
        <section className="bg-[#F1F9FF] px-6 pb-16 pt-14 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-extrabold italic leading-tight text-[#101828] sm:text-4xl md:text-5xl">
              PER ACCEDERE GRATIS A EDILIZIA IN CLOUD DEVI ISCRIVERTI AL{" "}
              <span className="whitespace-pre-wrap">
                Gruppo Esclusivo per imprenditori edili
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#1D2939] sm:text-xl">
              [ <strong>Accedi</strong> al <strong>gruppo riservato</strong> e{" "}
              <strong>scopri</strong> le <strong>leve</strong> che{" "}
              <strong>fanno davvero la differenza nel settore edile</strong>.{" "}
              <em className="underline underline-offset-4">
                Zero email, zero telefono
              </em>
              . Solo contenuti ad alto valore. ]
            </p>

            <div className="mt-8">
              <GroupCTA position="hero" />
            </div>

            <img
              src="/landing/crm-dashboard.png"
              alt="Dashboard di Edilizia in Cloud riservata agli imprenditori edili"
              width={1640}
              height={924}
              className="mx-auto mt-12 w-full max-w-3xl"
              loading="eager"
            />

            <div className="mt-10">
              <GroupCTA position="dopo-immagine" />
            </div>
          </div>
        </section>

        {/* Cosa scoprirai */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold text-[#101828] sm:text-4xl">
              Cosa Scoprirai Nel Gruppo
            </h2>

            <ul className="mt-10 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-7 w-7 shrink-0 text-[#43B14B]"
                    aria-hidden
                  />
                  <span className="text-lg font-semibold text-[#1D2939]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <GroupCTA position="fine-pagina" />
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#667085]">
                <AlertTriangle className="h-4 w-4" aria-hidden />
                L'accesso gratuito a Edilizia in Cloud è riservato ai membri del gruppo.
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
