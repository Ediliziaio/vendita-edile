import { useEffect } from "react";
import { Download, ExternalLink, PlayCircle } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { ContactFormEmbed } from "@/components/ContactFormEmbed";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { SITE_URL } from "@/lib/schema";
import { fbTrack, fbTrackCustom } from "@/lib/analytics";

type Resource = {
  key: string;
  kicker: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
  icon: "download" | "external" | "play";
};

const resources: Resource[] = [
  {
    key: "manuale-ci-devo-pensare",
    kicker: "Manuale PDF",
    title: "Come Rispondere a “Ci Devo Pensare” e Trasformarlo in un “Ok, Firmo”",
    image: "/landing/manuale-ci-devo-pensare.webp",
    imageAlt: "Copertina del manuale PDF: Come Rispondere a Ci Devo Pensare",
    ctaLabel: "Scaricalo Ora",
    href: "https://drive.google.com/file/d/1Tkbi8Yqw23c8lTMhkksyZXpgHzw6vhv4/view?usp=sharing",
    icon: "download",
  },
  {
    key: "manuale-preventivo-vendita",
    kicker: "Manuale PDF",
    title: "“Come Trasformare un Preventivo in una Vendita (Senza Rincorrere il Cliente)”",
    image: "/landing/manuale-preventivo-vendita.webp",
    imageAlt: "Copertina del manuale PDF: Come Trasformare un Preventivo in una Vendita",
    ctaLabel: "Scaricalo Ora",
    href: "https://drive.google.com/file/d/1HIpJ1p9yzK79ntTIydk6AC0aFRe7-JPr/view?usp=sharing",
    icon: "download",
  },
  {
    key: "crm-gratis",
    kicker: "Gestionale Tutto in Uno",
    title:
      "AUMENTA LE VENDITE E FATTURATO DELLA TUA AZIENDA CON EDILIZIA IN CLOUD, IL 1° GESTIONALE TUTTO IN UNO PER AZIENDE EDILI",
    description:
      "Edilizia in Cloud ti fa Acquisire Contatti e Vendite per la tua Attività e ti Aiuta ad Automatizzare e Digitalizzare tutti i processi della tua Attività... provalo GRATIS per 31 giorni, senza addebito automatico.",
    image: "/landing/crm-dashboard.webp",
    imageAlt: "Dashboard di Edilizia in Cloud, il gestionale tutto in uno per aziende edili",
    ctaLabel: "Prova GRATIS 31 Giorni",
    href: "/crmgratis",
    icon: "external",
  },
  {
    key: "gruppo-facebook",
    kicker: "Gruppo Facebook per Imprenditori Edili",
    title: "Imprenditore Edile®: Crescita, Vendite, Marketing e Libertà",
    description:
      "Qui dentro non trovi chiacchiere, trovi risultati. Strategie pratiche, risorse gratuite ad alto valore, casi studio reali, collaborazioni tra professionisti del settore e consigli da esperti di marketing, vendita e gestione specifici per il settore edile.",
    image: "/landing/gruppo-facebook.webp",
    imageAlt: "Anteprima del gruppo Facebook Imprenditore Edile",
    ctaLabel: "Accedi Ora",
    href: "https://www.facebook.com/groups/marketingedile?locale=it_IT",
    icon: "external",
  },
  {
    key: "video-15-clienti",
    kicker: "Video Formativo",
    title:
      "15 Nuovi Clienti OGNI MESE con questo Sistema (per Imprenditori Edili, Infissi, Fotovoltaico ecc...)",
    image: "/landing/video-15-clienti.webp",
    imageAlt: "Anteprima video: 15 nuovi clienti ogni mese",
    ctaLabel: "Accedi al VIDEO",
    href: "https://www.youtube.com/watch?v=iIi2TOB5UPM",
    icon: "play",
  },
  {
    key: "video-chiudere-preventivi",
    kicker: "Video Formativo",
    title:
      "Come Chiudere Preventivi in Edilizia (infissi, fotovoltaico, tetti, edile): Strategie e Consigli Pratici",
    image: "/landing/video-chiudere-preventivi.webp",
    imageAlt: "Anteprima video: come chiudere preventivi in edilizia",
    ctaLabel: "Accedi al VIDEO",
    href: "https://www.youtube.com/watch?v=MwRPEy0NHSw",
    icon: "play",
  },
];

const ctaIcons = {
  download: Download,
  external: ExternalLink,
  play: PlayCircle,
} as const;

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = ctaIcons[resource.icon];
  // I link interni (es. /crmgratis) restano nella stessa scheda;
  // quelli esterni (Drive, Facebook, YouTube) si aprono in una nuova.
  const isExternal = /^https?:\/\//.test(resource.href);
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-md shadow-black/5 transition-shadow hover:shadow-xl">
      <a
        href={resource.href}
        {...externalProps}
        onClick={() => fbTrackCustom("Click Risorsa Gratis", { resource: resource.key })}
        aria-label={resource.title}
      >
        <img
          src={resource.image}
          alt={resource.imageAlt}
          className="aspect-square w-full object-cover"
          loading="lazy"
        />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-6 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-[#B8860B]">
          {resource.kicker}
        </p>
        <h3 className="text-lg font-extrabold leading-snug text-[#101828]">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="text-sm leading-relaxed text-[#475467]">
            {resource.description}
          </p>
        )}
        <div className="mt-auto pt-3">
          <a
            href={resource.href}
            {...externalProps}
            onClick={() => fbTrackCustom("Click Risorsa Gratis", { resource: resource.key })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#43B14B] px-8 py-3.5 font-bold text-white transition-transform duration-200 hover:scale-105 hover:bg-[#3AA042] sm:w-auto"
          >
            <Icon className="h-5 w-5" aria-hidden />
            {resource.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Landing /risorsegratuite — replica della pagina funnel
 * "Risorse Gratuite Esclusive per Imprenditori Edili".
 * Contiene i materiali riservati (manuali, CRM, gruppo FB, video)
 * e il form per la consulenza strategica.
 */
const RisorseGratuite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // Evento pixel richiesto per questa pagina (oltre al PageView del PixelTracker):
    // fbq('track', 'PV Risorse Gratis')
    fbTrack("PV Risorse Gratis");
  }, []);

  return (
    <>
      <SEOHead
        title="Risorse Gratuite Esclusive per Imprenditori Edili"
        description="Risorse gratuite per imprenditori edili: manuali PDF di vendita, CRM tutto in uno, gruppo riservato e video formativi. Più clienti, più cantieri, più profitti."
        url={`${SITE_URL}/risorsegratuite`}
        noindex
      />

      <main className="font-outfit">
        {/* Barra alta oro con titolo */}
        <section className="bg-[#DBB33B] px-5 py-8 text-center sm:px-6 sm:py-10">
          <div className="mx-auto max-w-4xl">
            <img
              src="/landing/logo-vendita-edile.webp"
              alt="Vendita Edile — Il metodo di vendita per l'edilizia"
              width={298}
              height={142}
              className="mx-auto mb-5 w-32 rounded-lg bg-white p-3 shadow-md sm:mb-6 sm:w-40"
            />
            <h1 className="text-[22px] font-extrabold leading-snug text-[#101828] sm:text-3xl md:text-4xl">
              Risorse Gratuite Esclusive per Imprenditori Edili: Pi&ugrave;
              Clienti, Pi&ugrave; Cantieri, Pi&ugrave; Profitti&hellip; Subito
            </h1>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-[#F1F9FF] px-5 py-10 text-center sm:px-6 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[22px] font-extrabold leading-snug text-[#101828] sm:text-3xl md:text-4xl">
              Troppi Preventivi Persi? Troppo Lavoro e Pochi Profitti? Scarica
              le Risorse Gratuite che Ti Aiutano a Vendere Meglio e Guadagnare
              di Pi&ugrave;
            </h2>
            <p className="mt-4 text-base font-semibold text-[#475467] sm:mt-5 sm:text-xl">
              in Settori Come Ristrutturazioni, Fotovoltaico, Serramenti,
              Caldaie e Altro...
            </p>
          </div>
        </section>

        {/* Materiali riservati */}
        <section className="bg-[#F5F6F8] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#101828] sm:text-4xl">
              Materiali Riservati
            </h2>
            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource.key} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Form consulenza strategica */}
        <section id="consulenza" className="bg-[#F1F9FF] px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-[#101828] sm:text-4xl">
              Richiedi ora la Tua Consulenza Strategica
            </h2>
            <p className="mt-4 text-base text-[#475467] sm:text-lg">
              Compila il form: un nostro Consulente ti ricontatta per capire
              insieme come aumentare vendite e margini della tua azienda.
            </p>
            <ContactFormEmbed className="mt-10" height={680} />
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
};

export default RisorseGratuite;
