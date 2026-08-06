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
  /** Formato dell'immagine nella card: quadrata (copertine) o 16:9 (video/screenshot). */
  imageAspect: "square" | "video";
  ctaLabel: string;
  href: string;
  icon: "download" | "external" | "play";
};

const resources: Resource[] = [
  {
    key: "manuale-ci-devo-pensare",
    kicker: "Manuale PDF",
    title: "Come Rispondere a “Ci Devo Pensare” e Trasformarlo in un “Ok, Firmo”",
    description:
      "Le risposte esatte da dare quando il cliente prende tempo. Da leggere prima del prossimo appuntamento.",
    image: "/landing/manuale-ci-devo-pensare.webp",
    imageAlt: "Copertina del manuale PDF: Come Rispondere a Ci Devo Pensare",
    imageAspect: "square",
    ctaLabel: "Scarica il Manuale Gratis",
    href: "https://drive.google.com/file/d/1Tkbi8Yqw23c8lTMhkksyZXpgHzw6vhv4/view?usp=sharing",
    icon: "download",
  },
  {
    key: "manuale-preventivo-vendita",
    kicker: "Manuale PDF",
    title: "Come Trasformare un Preventivo in una Vendita (Senza Rincorrere il Cliente)",
    description:
      "Il metodo per farti dire sì senza telefonate a vuoto e senza sconti forzati.",
    image: "/landing/manuale-preventivo-vendita.webp",
    imageAlt: "Copertina del manuale PDF: Come Trasformare un Preventivo in una Vendita",
    imageAspect: "square",
    ctaLabel: "Scarica il Manuale Gratis",
    href: "https://drive.google.com/file/d/1HIpJ1p9yzK79ntTIydk6AC0aFRe7-JPr/view?usp=sharing",
    icon: "download",
  },
  {
    key: "crm-gratis",
    kicker: "Gestionale per Imprese Edili",
    title: "Edilizia in Cloud: Preventivi, Cantieri, Fatture e Incassi in un Posto Solo",
    description:
      "Basta fogli, Excel e telefonate per sapere come va un cantiere. Provalo gratis per 31 giorni: a fine prova scegli tu, nessun addebito automatico.",
    image: "/landing/crm-dashboard.webp",
    imageAlt: "Dashboard di Edilizia in Cloud, il gestionale per aziende edili",
    imageAspect: "video",
    ctaLabel: "Prova Gratis 31 Giorni",
    href: "/crmgratis",
    icon: "external",
  },
  {
    key: "gruppo-facebook",
    kicker: "Gruppo Facebook Riservato",
    title: "Imprenditore Edile®: Crescita, Vendite, Marketing e Libertà",
    description:
      "Niente chiacchiere: strategie pratiche, casi reali e consigli di marketing, vendita e gestione specifici per il settore edile.",
    image: "/landing/gruppo-facebook.webp",
    imageAlt: "Anteprima del gruppo Facebook Imprenditore Edile",
    imageAspect: "square",
    ctaLabel: "Entra nel Gruppo",
    href: "https://www.facebook.com/groups/marketingedile?locale=it_IT",
    icon: "external",
  },
  {
    key: "video-15-clienti",
    kicker: "Video Formativo",
    title: "15 Nuovi Clienti al Mese con questo Sistema (Edili, Infissi, Fotovoltaico)",
    description:
      "Il sistema passo-passo per far arrivare richieste ogni mese, senza dipendere dal passaparola.",
    image: "/landing/video-15-clienti.webp",
    imageAlt: "Anteprima video: 15 nuovi clienti ogni mese",
    imageAspect: "video",
    ctaLabel: "Guarda il Video",
    href: "https://www.youtube.com/watch?v=iIi2TOB5UPM",
    icon: "play",
  },
  {
    key: "video-chiudere-preventivi",
    kicker: "Video Formativo",
    title: "Come Chiudere i Preventivi in Edilizia: Strategie e Consigli Pratici",
    description:
      "Cosa dire (e cosa non dire) per far firmare il preventivo senza abbassare il prezzo.",
    image: "/landing/video-chiudere-preventivi.webp",
    imageAlt: "Anteprima video: come chiudere preventivi in edilizia",
    imageAspect: "video",
    ctaLabel: "Guarda il Video",
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
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20 transition-shadow hover:shadow-2xl">
      <a
        href={resource.href}
        {...externalProps}
        onClick={() => fbTrackCustom("Click Risorsa Gratis", { resource: resource.key })}
        aria-label={resource.title}
      >
        <img
          src={resource.image}
          alt={resource.imageAlt}
          className={
            resource.imageAspect === "square"
              ? "aspect-square w-full object-cover"
              : "aspect-video w-full object-cover"
          }
          loading="lazy"
        />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-5 text-center sm:p-6">
        <p className="text-xs font-extrabold uppercase tracking-widest text-secondary sm:text-sm">
          {resource.kicker}
        </p>
        <h3 className="text-lg font-extrabold leading-snug">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {resource.description}
          </p>
        )}
        <div className="mt-auto pt-3">
          <a
            href={resource.href}
            {...externalProps}
            onClick={() => fbTrackCustom("Click Risorsa Gratis", { resource: resource.key })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 font-extrabold uppercase tracking-wide text-secondary-foreground transition-transform duration-200 hover:scale-105 sm:w-auto sm:px-8"
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
 * Landing /risorsegratuite — hub delle risorse gratuite:
 * manuali, gestionale, gruppo FB, video + form consulenza.
 * Colori brand (navy + oro), copy DOLORE → SOLUZIONE → RISULTATO.
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
        title="Risorse Gratuite per Imprenditori Edili"
        description="Manuali PDF di vendita, gestionale gratis per 31 giorni, gruppo riservato e video formativi per imprese edili. Più clienti, più cantieri, più margine."
        url={`${SITE_URL}/risorsegratuite`}
        noindex
      />

      <main className="bg-background font-outfit text-foreground">
        {/* Barra alta oro con logo e titolo */}
        <section className="bg-secondary px-5 py-8 text-center sm:px-6 sm:py-10">
          <div className="mx-auto max-w-4xl">
            <img
              src="/landing/logo-vendita-edile.webp"
              alt="Vendita Edile — Il metodo di vendita per l'edilizia"
              width={298}
              height={142}
              className="mx-auto mb-5 w-32 rounded-lg bg-white p-3 shadow-md sm:mb-6 sm:w-40"
            />
            <h1 className="text-[22px] font-extrabold leading-snug text-secondary-foreground sm:text-3xl md:text-4xl">
              Risorse Gratuite per Imprenditori Edili: Pi&ugrave; Clienti,
              Pi&ugrave; Cantieri, Pi&ugrave; Margine
            </h1>
          </div>
        </section>

        {/* Hero — dolore */}
        <section className="px-5 py-10 text-center sm:px-6 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-[22px] font-extrabold leading-snug sm:text-3xl md:text-4xl">
              Preventivi che Finiscono nel Nulla? Tanto Lavoro e Margini che{" "}
              <span className="text-secondary">Non Si Vedono?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl">
              Qui trovi i manuali, i video e gli strumenti che usiamo ogni
              giorno con le imprese edili. <strong className="text-foreground">Tutto gratis</strong> — per
              ristrutturazioni, fotovoltaico, serramenti, caldaie e impianti.
            </p>
          </div>
        </section>

        {/* Materiali riservati */}
        <section className="border-t border-border bg-card/50 px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide sm:text-4xl">
              Materiali <span className="text-secondary">Riservati</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard key={resource.key} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Form consulenza strategica */}
        <section id="consulenza" className="border-t border-border px-5 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-4xl">
              Vuoi una Mano <span className="text-secondary">Diretta?</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Lascia i tuoi dati: ti richiama un Consulente. Capiamo insieme
              dove stai perdendo margine e cosa sistemare per primo.{" "}
              <strong className="text-foreground">Senza impegno.</strong>
            </p>
            <ContactFormEmbed className="mt-8 sm:mt-10" height={680} />
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
};

export default RisorseGratuite;
