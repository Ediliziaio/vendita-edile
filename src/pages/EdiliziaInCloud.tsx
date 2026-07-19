import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  TrendingUp,
  Wallet,
  Receipt,
  Calculator,
  Package,
  Truck,
  ClipboardList,
  Landmark,
  Users,
  GitBranch,
  MessageCircle,
  Mail,
  Zap,
  Bot,
  Image as ImageIcon,
  PenTool,
  Building2,
  ShieldCheck,
  BrainCircuit,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { SITE_URL, breadcrumbSchema, organizationSchema } from "@/lib/schema";

const EIC = "https://www.ediliziaincloud.com";

// Sitelink "istituzionali" (pagine chiave del sito EdiliziaInCloud)
const mainLinks = [
  { label: "Tutte le funzionalità", href: `${EIC}/funzionalita/` },
  { label: "Prezzi e piani", href: `${EIC}/prezzi/` },
  { label: "Richiedi una demo", href: `${EIC}/demo/` },
  { label: "Accedi all'app", href: "https://app.ediliziaincloud.com/login" },
];

// Sitelink alle funzionalità reali, raggruppate per area operativa
const areas = [
  {
    area: "Margini e cassa",
    desc: "I numeri veri dell'azienda, in tempo reale.",
    links: [
      { label: "Margini cantiere", href: `${EIC}/funzionalita/margini-cantiere/`, icon: TrendingUp },
      { label: "Previsionale di cassa", href: `${EIC}/funzionalita/contabilita-fiscale/`, icon: Wallet },
      { label: "Fatturazione elettronica", href: `${EIC}/funzionalita/fatturazione-elettronica/`, icon: Receipt },
      { label: "Contabilità fiscale", href: `${EIC}/funzionalita/contabilita-fiscale/`, icon: Landmark },
    ],
  },
  {
    area: "Cantieri e campo",
    desc: "Il cantiere che aggiorna l'ufficio da solo.",
    links: [
      { label: "Gestione cantieri", href: `${EIC}/funzionalita/gestione-cantieri/`, icon: Building2 },
      { label: "Giornale dei lavori", href: `${EIC}/funzionalita/giornale-lavori/`, icon: ClipboardList },
      { label: "Magazzino cantiere", href: `${EIC}/funzionalita/magazzino-cantiere/`, icon: Package },
      { label: "DDT digitali", href: `${EIC}/funzionalita/ddt-digitali/`, icon: Truck },
    ],
  },
  {
    area: "Preventivi e vendite",
    desc: "Dal computo metrico al contratto firmato.",
    links: [
      { label: "Preventivi con AI", href: `${EIC}/funzionalita/preventivi-edilizia/`, icon: Calculator },
      { label: "CRM edilizia", href: `${EIC}/funzionalita/crm-edilizia/`, icon: Users },
      { label: "Pipeline vendite", href: `${EIC}/funzionalita/pipeline-vendite/`, icon: GitBranch },
      { label: "Render AI infissi", href: `${EIC}/funzionalita/render-infissi/`, icon: ImageIcon },
    ],
  },
  {
    area: "Marketing e automazioni",
    desc: "Più richieste, meno lavoro manuale.",
    links: [
      { label: "WhatsApp marketing", href: `${EIC}/funzionalita/whatsapp-marketing/`, icon: MessageCircle },
      { label: "Email marketing", href: `${EIC}/funzionalita/email-marketing/`, icon: Mail },
      { label: "Automazioni", href: `${EIC}/funzionalita/automazioni/`, icon: Zap },
      { label: "Firma elettronica", href: `${EIC}/funzionalita/firma-elettronica/`, icon: PenTool },
    ],
  },
];

const painPoints = [
  {
    q: "Qual è il margine REALE di ogni commessa, oggi?",
    a: "Non a fine anno dal commercialista: adesso, cantiere per cantiere, preventivato contro consuntivo.",
  },
  {
    q: "Quanta cassa avrò tra 30, 60 e 90 giorni?",
    a: "Incassi, scadenze e pagamenti in un unico previsionale, per non trovarti mai scoperto.",
  },
  {
    q: "Dove sto perdendo soldi senza saperlo?",
    a: "Materiali, ore, rifacimenti, sconti: i buchi che si mangiano l'utile diventano visibili.",
  },
];

const EdiliziaInCloud = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const url = `${SITE_URL}/edilizia-in-cloud`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EdiliziaInCloud",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Gestionale in cloud con AI per imprese edili: margini per commessa, previsione di cassa, cantieri, fatturazione elettronica, magazzino, DDT, CRM, preventivi e automazioni.",
    url: EIC,
    offers: { "@type": "Offer", category: "SaaS" },
  };

  return (
    <>
      <SEOHead
        title="EdiliziaInCloud: il gestionale con AI per imprese edili"
        description="EdiliziaInCloud è il gestionale edilizia con AI: margini reali per commessa, previsione di cassa, cantieri, fatturazione elettronica, CRM e preventivi in un'unica piattaforma."
        url={url}
        keywords={[
          "edilizia in cloud",
          "gestionale edilizia",
          "software imprese edili",
          "margini cantiere",
          "fatturazione elettronica edilizia",
        ]}
        jsonLd={[
          organizationSchema(),
          softwareSchema,
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "EdiliziaInCloud", url },
          ]),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* HERO */}
        <section className="section-padding relative pt-28 md:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,106,33,0.12)_0%,transparent_55%)]" />
          <div className="container-narrow relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F26A21]/40 bg-[#F26A21]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F26A21]">
                <BrainCircuit className="h-4 w-4" />
                Il partner tecnologico di VENDITA EDILE®
              </span>

              <div className="mb-5 text-3xl font-black tracking-tight md:text-5xl">
                <span className="text-foreground">Edilizia</span>
                <span className="text-[#F26A21]">InCloud</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-3xl text-2xl font-bold leading-tight text-foreground md:text-4xl">
                Il gestionale con <span className="text-[#F26A21]">AI</span> n°1 per le
                imprese edili
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Aumenta margini, utili e guadagni controllando la tua azienda con
                l'intelligenza artificiale. Cantieri, margini reali, cassa,
                fatturazione, CRM e preventivi in un'unica piattaforma.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`${EIC}/demo/`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#F26A21] text-white hover:bg-[#F26A21]/90"
                  >
                    Prova gratis EdiliziaInCloud
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={`${EIC}/prezzi/`} target="_blank" rel="noopener noreferrer">
                  <Button variant="goldOutline" size="lg">
                    Guarda i piani
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COS'È */}
        <section className="px-4 md:px-6 pb-6">
          <div className="container-narrow">
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Cos'è EdiliziaInCloud
              </h2>
              <p>
                <strong className="text-foreground">EdiliziaInCloud</strong> è il
                gestionale in cloud pensato su misura per le imprese edili italiane:
                imprese di costruzione e ristrutturazione, serramentisti, installatori
                di fotovoltaico, showroom. Non è l'ennesimo software pieno di moduli
                che nessuno usa: è una <strong className="text-foreground">regia
                centrale</strong> che legge l'azienda e fa partire il lavoro.
              </p>
              <p>
                Il cuore è un'AI — <strong className="text-foreground">Silvio</strong> —
                che tiene insieme cantieri, cassa, vendite e documenti in{" "}
                <strong className="text-foreground">5 aree operative e 26 moduli
                collegati</strong>. Ogni segnale del cantiere (un DDT, un rapportino,
                una fattura) entra in un'unica memoria operativa e aggiorna i numeri
                dell'azienda in tempo reale.
              </p>
              <p>
                In una parola: <strong className="text-foreground">smetti di
                indovinare e inizi a sapere</strong> quanto stai davvero guadagnando su
                ogni lavoro.
              </p>
            </div>
          </div>
        </section>

        {/* PAIN / DOMANDE */}
        <section className="section-padding py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
              Le domande a cui EdiliziaInCloud risponde{" "}
              <span className="text-[#F26A21]">ogni giorno</span>
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {painPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/60 p-6"
                >
                  <p className="mb-3 text-lg font-bold text-foreground">{p.q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SITELINK / FUNZIONALITÀ */}
        <section className="px-4 md:px-6 py-8">
          <div className="container-narrow">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-4xl">
                5 aree operative, <span className="text-[#F26A21]">26 moduli</span>{" "}
                collegati
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Esplora le funzionalità di EdiliziaInCloud. Ogni link porta alla pagina
                di approfondimento sul sito ufficiale.
              </p>
            </div>

            {/* Link istituzionali */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {mainLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#F26A21]/40 bg-[#F26A21]/10 px-4 py-2 text-sm font-medium text-[#F26A21] transition-colors hover:bg-[#F26A21]/20"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            {/* Griglia aree + funzionalità */}
            <div className="grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area.area}
                  className="rounded-2xl border border-border bg-card/50 p-6"
                >
                  <h3 className="text-lg font-bold text-foreground">{area.area}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{area.desc}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {area.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground/90 transition-colors hover:border-[#F26A21]/50 hover:bg-[#F26A21]/5"
                        >
                          <link.icon className="h-4 w-4 flex-shrink-0 text-[#F26A21]" />
                          <span className="flex-1">{link.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI / SILVIO */}
        <section className="section-padding py-14 md:py-20">
          <div className="container-narrow">
            <div className="rounded-3xl border border-[#F26A21]/30 bg-card/60 p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F26A21]/15">
                  <Bot className="h-10 w-10 text-[#F26A21]" />
                </div>
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                    Non solo moduli. Un'AI che legge l'azienda e fa partire il lavoro.
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Silvio è l'intelligenza artificiale al centro di EdiliziaInCloud:
                    analizza il computo metrico, genera preventivi ad alta conversione,
                    scrive i rapportini, manda solleciti e azioni, e ti avvisa quando
                    un cantiere sta erodendo il margine. L'imprenditore non cerca
                    moduli: cerca risposte. Silvio gliele dà.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GARANZIA */}
        <section className="px-4 md:px-6 pb-14">
          <div className="container-narrow">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-card/50 p-8 text-center">
              <ShieldCheck className="h-10 w-10 text-[#F26A21]" />
              <h2 className="text-xl font-bold text-foreground md:text-2xl">
                Garanzia ROI 90 giorni
              </h2>
              <p className="text-muted-foreground">
                Provi EdiliziaInCloud gratis e il piano lo costruiscono su di te. Se in
                90 giorni non vedi ritorno, hai la garanzia. Il rischio è loro.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#F26A21]" /> Prova gratuita
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#F26A21]" /> Piano su misura
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#F26A21]" /> Supporto in italiano
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PONTE VENDITA EDILE + CTA */}
        <section className="px-4 md:px-6 pb-20">
          <div className="container-narrow">
            <div className="relative overflow-hidden rounded-3xl border border-[#F26A21]/40 bg-card/70 p-8 text-center md:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,106,33,0.12)_0%,transparent_60%)]" />
              <div className="relative">
                <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-foreground md:text-4xl">
                  Prima vendi bene. Poi tieni il controllo dei numeri.
                </h2>
                <p className="mx-auto mb-7 max-w-2xl text-muted-foreground md:text-lg">
                  <strong className="text-foreground">VENDITA EDILE®</strong> ti insegna
                  a chiudere di più senza abbassare i prezzi.{" "}
                  <strong className="text-foreground">EdiliziaInCloud</strong> ti fa
                  vedere quanto stai davvero guadagnando su ogni commessa. Insieme, sono
                  la cassaforte della tua impresa.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href={EIC} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-[#F26A21] text-white hover:bg-[#F26A21]/90"
                    >
                      Scopri EdiliziaInCloud
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Button asChild variant="gold" size="lg">
                    <Link to="/#candidati">Candidati a VENDITA EDILE®</Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Approfondisci nell'articolo:{" "}
                  <Link
                    to="/blog/gestionale-edilizia-in-cloud"
                    className="font-medium text-[#F26A21] hover:underline"
                  >
                    Perché vendere di più non basta senza un gestionale
                  </Link>
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

export default EdiliziaInCloud;
