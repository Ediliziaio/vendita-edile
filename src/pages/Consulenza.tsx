import { useEffect, useState } from "react";
import {
  ArrowRight,
  X,
  Check,
  CalendarCheck,
  PhoneCall,
  ClipboardList,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { ContactFormEmbed } from "@/components/ContactFormEmbed";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { SITE_URL } from "@/lib/schema";
import { fbTrackCustom } from "@/lib/analytics";
import imgPreventivo from "@/assets/img-preventivo.webp";
import imgFlo from "@/assets/flo-profili.jpg";

// Confronto stile "cosa offre": due alternative barrate + la nostra evidenziata.
const comparison = [
  {
    ok: false,
    label: "Corsi di vendita...",
    text: "Teoria da aula. In cantiere e in showroom non si applica.",
  },
  {
    ok: false,
    label: "Agenzie di marketing...",
    text: "Lead freddi e pubblicità che non firma i preventivi.",
  },
  {
    ok: true,
    label: "VENDITA EDILE®",
    text: "Un metodo di vendita costruito per l'edilizia, applicato con te sulle trattative vere.",
  },
];

const pains = [
  "Il cliente entusiasta al sopralluogo... che poi sparisce.",
  "Il “ci devo pensare” che non diventa mai una firma.",
  "Lo sconto fatto pur di non perdere il lavoro — e il margine che se ne va con lui.",
  "Le settimane piene di appuntamenti e i mesi vuoti di contratti.",
];

const solutions = [
  "Sappiamo cosa significa vivere di preventivi, acconti e cantieri che devono partire.",
  "L'obiettivo non è fare like: è far firmare più preventivi allo stesso prezzo.",
  "Alzare lo scontrino medio senza perdere il cliente.",
  "Costruire un flusso di richieste che non dipende solo dal passaparola.",
];

const stats = [
  { value: "+47%", label: "tasso di chiusura", detail: "in 90 giorni (serramentista)" },
  { value: "+€320.000", label: "di fatturato", detail: "in 6 mesi (impresa edile)" },
  { value: "3x", label: "ROI sul marketing", detail: "in 120 giorni (fotovoltaico)" },
];

const testimonials = [
  {
    sector: "Serramenti",
    name: "Marco",
    surname: "R.",
    company: "Serramenti Milano",
    quote:
      "Prima perdevo il 70% dei preventivi. Oggi chiudo 1 su 2. Il metodo funziona perché è pensato per chi lavora in cantiere, non per marketer.",
  },
  {
    sector: "Impresa Edile",
    name: "Giuseppe",
    surname: "T.",
    company: "Edil Roma Costruzioni",
    quote:
      "Ho smesso di fare sconti per vincere i lavori. Ora i clienti scelgono me per il valore, non per il prezzo più basso.",
  },
  {
    sector: "Fotovoltaico",
    name: "Andrea",
    surname: "L.",
    company: "Solar Toscana",
    quote:
      "In 3 mesi abbiamo strutturato un processo vendita che prima non esisteva. I numeri parlano da soli: +40% di fatturato.",
  },
];

// Le promesse tipiche del mercato... e come vanno a finire.
const brokenPromises = [
  {
    promise: "“Fai il corso e venderai il doppio”",
    reality:
      "Poi il corso finisce, gli appunti restano nel cassetto e in trattativa sei solo come prima.",
  },
  {
    promise: "“Ti riempiamo di lead”",
    reality:
      "Poi arrivano contatti freddi, appuntamenti a vuoto e preventivi che non firmano.",
  },
  {
    promise: "“Il nostro metodo funziona in tutti i settori”",
    reality:
      "Peccato che chi l'ha scritto non abbia mai messo piede in un cantiere o in uno showroom.",
  },
];

const whoFor = [
  "Aziende con margini sani, che vogliono crescere (non sopravvivere)",
  "Titolari che vogliono passare da artigiano a imprenditore",
  "Chi ha già una struttura — o vuole costruirla",
  "Chi è disposto a mettersi in discussione: il metodo funziona se lo applichi",
];

const whoNot = [
  "Chi cerca scorciatoie: non esistono. Punto.",
  "Chi vuole solo lead, senza toccare come vende",
  "Chi non ha un'ora a settimana da dedicare alla propria crescita",
  "Chi sceglie i fornitori solo in base al prezzo più basso",
];

const faqs = [
  {
    q: "È davvero gratis?",
    a: "Sì. 30 minuti, zero costi, zero vincoli. È il nostro modo di farti vedere come lavoriamo, prima di chiederti qualsiasi cosa.",
  },
  {
    q: "Mi venderete qualcosa?",
    a: "Alla fine, se ha senso, ti raccontiamo come lavoriamo. Se non ha senso, te lo diciamo noi. Non prendiamo tutti: selezioniamo le aziende con cui lavorare.",
  },
  {
    q: "Come si svolge?",
    a: "30 minuti al telefono o in video. Ti facciamo domande su preventivi, trattative e margini. Niente slide, niente teoria.",
  },
  {
    q: "Devo preparare qualcosa?",
    a: "Ti basta avere in mente gli ultimi 10 preventivi: quanti firmati, quanti persi e a che prezzo.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    step: "1",
    title: "Prenoti la chiamata",
    text: "Compili il form qui sotto in 1 minuto. Ti richiamiamo entro 24 ore lavorative.",
  },
  {
    icon: PhoneCall,
    step: "2",
    title: "Analizziamo i tuoi numeri",
    text: "30 minuti al telefono: dove perdi firme, dove perdi margine, cosa sistemare per primo.",
  },
  {
    icon: ClipboardList,
    step: "3",
    title: "Esci con un piano",
    text: "2-3 azioni concrete da applicare subito. Che tu lavori con noi o no.",
  },
];

function scrollToForm(position: string) {
  fbTrackCustom("Click Consulenza Gratuita", { cta_position: position });
  const el = document.getElementById("consulenza");
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 16;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function ConsulenzaCTA({ position, label }: { position: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollToForm(position)}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 text-base font-extrabold text-secondary-foreground shadow-[0_0_40px_-10px_hsl(var(--gold-glow)/0.8)] transition-transform duration-200 hover:scale-105 sm:w-auto sm:px-9 sm:text-lg"
    >
      {label ?? "Prenota la Consulenza Gratuita"}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-dark text-secondary">
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </button>
  );
}

/**
 * Landing /consulenza — pagina ads con CTA unica: consulenza gratuita.
 * Design a "isole" arrotondate alternate navy/bianco con sticky bar finale,
 * ispirato ai funnel long-form di settore, nei colori brand (navy + oro).
 */
const Consulenza = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const onScroll = () => setShowBar(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Consulenza Gratuita per Imprenditori Edili"
        description="30 minuti al telefono con chi lavora solo con l'edilizia: capiamo dove perdi firme e margine e cosa sistemare per primo. Gratis e senza impegno."
        url={`${SITE_URL}/consulenza`}
        noindex
      />

      <main className="bg-background pb-24 font-outfit text-foreground sm:pb-28">
        {/* Hero — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 text-center sm:px-10 sm:py-16">
            <p className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-foreground">
              Imprenditore Edile:
            </p>
            <h1 className="mx-auto max-w-3xl text-[30px] font-extrabold leading-tight sm:text-5xl">
              BASTA <span className="text-secondary">preventivi fermi</span> e
              clienti che <span className="text-secondary">spariscono</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Affida la crescita commerciale della tua azienda a chi lavora{" "}
              <strong className="text-foreground">solo con l'edilizia</strong>:
              serramenti, ristrutturazioni, fotovoltaico, impianti.
            </p>
            <div className="mt-7 sm:mt-8">
              <ConsulenzaCTA position="hero" />
            </div>

            {/* Confronto */}
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border bg-background text-left sm:mt-12">
              <p className="border-b border-border px-5 py-3 text-center text-sm font-extrabold uppercase tracking-widest">
                Cosa Cambia
              </p>
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className={
                    row.ok
                      ? "m-3 rounded-xl border-2 border-secondary bg-secondary/5 px-4 py-4"
                      : "border-b border-border px-5 py-4"
                  }
                >
                  <p
                    className={
                      "flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest " +
                      (row.ok ? "text-secondary" : "text-muted-foreground")
                    }
                  >
                    {row.ok ? (
                      <Check className="h-4 w-4" aria-hidden />
                    ) : (
                      <X className="h-4 w-4 text-destructive" aria-hidden />
                    )}
                    {row.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed sm:text-base">
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Dolore — isola bianca */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-white px-5 py-12 text-navy-dark sm:px-10 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-extrabold leading-tight text-[#101828] sm:text-4xl">
                Tutti quei preventivi mandati...{" "}
                <span className="text-[#B8860B]">e mai firmati.</span>
              </h2>
              <ul className="mt-7 space-y-4">
                {pains.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#DBB33B]"
                      aria-hidden
                    />
                    <span className="text-base font-medium italic text-[#1D2939] sm:text-lg">
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
              <img
                src={imgPreventivo}
                alt="Preventivo cartaceo su un tavolo di lavoro"
                className="mt-8 w-full rounded-2xl"
                loading="lazy"
              />
              <p className="mt-6 text-base leading-relaxed text-[#475467] sm:text-lg">
                Non è un problema di qualità del tuo lavoro.{" "}
                <strong className="text-[#101828]">
                  È un problema di come vendi il tuo lavoro.
                </strong>{" "}
                E si sistema.
              </p>
            </div>
          </section>
        </div>

        {/* Promesse vs realtà — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 sm:px-10 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-4xl">
                Tante promesse.{" "}
                <span className="text-secondary">Zero firme in più.</span>
              </h2>
              <p className="mt-4 text-center text-base text-muted-foreground sm:text-lg">
                Se hai già provato corsi, agenzie o consulenti generalisti,
                questa storia la conosci:
              </p>
              <div className="mt-8 space-y-4">
                {brokenPromises.map((item) => (
                  <div
                    key={item.promise}
                    className="rounded-2xl border border-border bg-background p-5 sm:p-6"
                  >
                    <p className="text-base font-extrabold italic text-secondary sm:text-lg">
                      {item.promise}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.reality}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-base font-semibold sm:text-lg">
                Il problema non sei tu.{" "}
                <span className="text-secondary">
                  È che nessuno di loro vive di cantieri.
                </span>
              </p>
            </div>
          </section>
        </div>

        {/* Founder — isola bianca */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-white px-5 py-12 text-navy-dark sm:px-10 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mx-auto mb-4 w-fit rounded-full bg-[#101828] px-4 py-1.5 text-sm font-bold text-white">
                Chi te lo dice?
              </p>
              <h2 className="text-center text-2xl font-extrabold leading-tight text-[#101828] sm:text-4xl">
                Prima l'abbiamo fatto noi.{" "}
                <span className="text-[#B8860B]">Poi ne abbiamo fatto un metodo.</span>
              </h2>

              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src={imgFlo}
                  alt="Flo, fondatore di Vendita Edile"
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover shadow-lg sm:h-40 sm:w-40"
                  loading="lazy"
                />
                <div className="space-y-4 text-base leading-relaxed text-[#475467] sm:text-lg">
                  <p>
                    Mi chiamo <strong className="text-[#101828]">Flo</strong>.
                    Da <strong className="text-[#101828]">8 anni</strong> con
                    Marketing Edile porto clienti alle aziende edili{" "}
                    <strong className="text-[#101828]">solo a provvigione</strong>:
                    guadagno solo se tu vendi.
                  </p>
                  <p>
                    A fine 2023 ho aperto una mia azienda di serramenti, da
                    zero, per testare sul campo quello che vedevo funzionare.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-[#DBB33B] bg-[#DBB33B]/10 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                  <div>
                    <p className="text-3xl font-extrabold text-[#B8860B]">€400.000</p>
                    <p className="font-semibold text-[#101828]">nei primi 3 mesi</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-[#B8860B]">€2M+</p>
                    <p className="font-semibold text-[#101828]">in meno di 2 anni</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-bold italic text-[#B8860B]">
                  Senza sconto in fattura. Solo con un sistema di vendita
                  costruito sul cliente.
                </p>
              </div>

              <p className="mt-8 text-center text-base font-semibold text-[#101828] sm:text-lg">
                Vendita Edile® non è un corso.{" "}
                <span className="text-[#B8860B]">
                  È quel sistema, costruito sul campo.
                </span>
              </p>
            </div>
          </section>
        </div>

        {/* Soluzione — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 sm:px-10 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
                Ragioniamo da <span className="text-secondary">cantiere</span>,
                non da agenzia
              </h2>
              <ul className="mt-8 space-y-4 text-left">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-6 w-6 shrink-0 text-secondary"
                      aria-hidden
                    />
                    <span className="text-base font-semibold sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Numeri */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <p className="text-3xl font-extrabold text-secondary">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-bold">{stat.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <ConsulenzaCTA position="dopo-soluzione" />
              </div>
            </div>
          </section>
        </div>

        {/* Testimonianze — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 sm:px-10 sm:py-16">
            <p className="mx-auto mb-4 w-fit rounded-full border border-white/20 px-4 py-1.5 text-sm text-muted-foreground">
              Non credere a noi.
            </p>
            <h2 className="text-center text-2xl font-extrabold sm:text-4xl">
              Credi a chi ha già{" "}
              <span className="text-secondary">fatto il percorso.</span>
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {testimonials.map((t) => (
                <figure
                  key={t.company}
                  className="flex flex-col rounded-2xl border border-border bg-background p-6"
                >
                  <p className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                    {t.sector}
                  </p>
                  <p className="mt-3 text-xl font-extrabold">
                    {t.name} <span className="text-secondary">{t.surname}</span>
                  </p>
                  <blockquote className="mt-2 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Quote className="h-3.5 w-3.5 text-secondary" aria-hidden />
                    {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        {/* Per chi è / non è — isola bianca */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-white px-5 py-12 text-navy-dark sm:px-10 sm:py-16">
            <h2 className="text-center text-2xl font-extrabold text-[#101828] sm:text-4xl">
              Non Lavoriamo <span className="text-[#B8860B]">con Tutti</span>
            </h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-2xl border-2 border-[#DBB33B] bg-[#DBB33B]/5 p-6">
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#B8860B]">
                  La consulenza fa per te se sei...
                </p>
                <ul className="mt-4 space-y-3">
                  {whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]" aria-hidden />
                      <span className="text-sm leading-relaxed text-[#1D2939] sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E4E7EC] bg-[#F9FAFB] p-6">
                <p className="text-sm font-extrabold uppercase tracking-widest text-[#667085]">
                  Non fa per te se sei...
                </p>
                <ul className="mt-4 space-y-3">
                  {whoNot.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-[#D92D20]" aria-hidden />
                      <span className="text-sm leading-relaxed text-[#475467] sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Garanzia — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 text-center sm:px-10 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <ShieldCheck className="mx-auto h-12 w-12 text-secondary" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl">
                Il Rischio è <span className="text-secondary">Nostro, Non Tuo</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                La consulenza è gratis, comunque vada. E se poi decidi di
                lavorare con noi, il percorso è coperto dalla{" "}
                <strong className="text-foreground">Garanzia ROI 90 giorni</strong>:
                se in 90 giorni non ottieni risultati concreti, hai la
                garanzia. Come con Marketing Edile, dove guadagniamo solo a
                provvigione: <strong className="text-foreground">se non vendi tu, non guadagniamo noi.</strong>
              </p>
              <div className="mt-8">
                <ConsulenzaCTA position="garanzia" />
              </div>
            </div>
          </section>
        </div>

        {/* Come funziona — isola bianca */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-white px-5 py-12 text-navy-dark sm:px-10 sm:py-16">
            <h2 className="text-center text-2xl font-extrabold text-[#101828] sm:text-4xl">
              Come Funziona la{" "}
              <span className="text-[#B8860B]">Consulenza Gratuita</span>
            </h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3 sm:gap-6">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-[#E4E7EC] bg-[#F9FAFB] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DBB33B] text-base font-extrabold text-[#101828]">
                      {item.step}
                    </span>
                    <item.icon className="h-6 w-6 text-[#B8860B]" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-[#101828]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FAQ — isola bianca */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section className="mx-auto max-w-5xl rounded-3xl bg-white px-5 py-12 text-navy-dark sm:px-10 sm:py-16">
            <h2 className="text-center text-2xl font-extrabold text-[#101828] sm:text-4xl">
              Domande <span className="text-[#B8860B]">Dirette</span>
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 sm:mt-10">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#E4E7EC] bg-[#F9FAFB] p-5 sm:p-6"
                >
                  <h3 className="text-base font-extrabold text-[#101828] sm:text-lg">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467] sm:text-base">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Form — isola scura */}
        <div className="px-3 pt-3 sm:px-4 sm:pt-4">
          <section
            id="consulenza"
            className="mx-auto max-w-5xl rounded-3xl bg-navy-dark px-5 py-12 text-center sm:px-10 sm:py-16"
          >
            <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-extrabold text-secondary-foreground">
              Gratis e senza impegno
            </p>
            <h2 className="text-2xl font-extrabold sm:text-4xl">
              Prenota la Tua{" "}
              <span className="text-secondary">Consulenza Gratuita</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              30 minuti al telefono con un Consulente che lavora solo con
              l'edilizia. Capiamo dove perdi firme e margine — e cosa sistemare
              per primo.
            </p>
            <ContactFormEmbed className="mt-8 sm:mt-10" height={680} />
            <p className="mt-5 text-sm text-muted-foreground">
              Ti richiamiamo entro 24 ore lavorative. Nessun venditore
              aggressivo, nessun vincolo.
            </p>
          </section>
        </div>
      </main>

      {/* Barra sticky in basso */}
      <div
        className={
          "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-navy-dark/95 px-4 py-3 backdrop-blur transition-transform duration-300 " +
          (showBar ? "translate-y-0" : "translate-y-full")
        }
      >
        <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 sm:gap-5">
          <p className="hidden text-sm font-semibold sm:block sm:text-base">
            Stanco di preventivi che{" "}
            <span className="text-secondary">non firmano?</span>
          </p>
          <button
            type="button"
            onClick={() => scrollToForm("sticky-bar")}
            className="w-full rounded-full bg-secondary px-6 py-3 text-sm font-extrabold text-secondary-foreground transition-transform duration-200 hover:scale-105 sm:w-auto sm:text-base"
          >
            Consulenza Gratuita
          </button>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default Consulenza;
