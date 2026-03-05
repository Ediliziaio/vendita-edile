import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star } from "lucide-react";
import logoSerramentista from "@/assets/logo-serramentista-milano.png";
import logoImpresa from "@/assets/logo-impresa-edile-roma.png";
import logoShowroom from "@/assets/logo-showroom-toscana.png";

const caseStudies = [
  {
    sector: "Serramentista",
    logo: logoSerramentista,
    problem: "Preventivi ignorati, clienti che sparivano dopo il sopralluogo.",
    result: "+47% tasso di chiusura",
    detail: "Da 18 a 34 contratti/mese",
    timeline: "In 90 giorni",
  },
  {
    sector: "Impresa Edile",
    logo: logoImpresa,
    problem: "Dipendenza totale dal passaparola, zero prevedibilità.",
    result: "+€320.000 fatturato",
    detail: "Con un sistema di acquisizione strutturato",
    timeline: "In 6 mesi",
  },
  {
    sector: "Showroom Fotovoltaico",
    logo: logoShowroom,
    problem: "Lead dal web che non convertivano, costo per lead altissimo.",
    result: "3x ROI sul marketing",
    detail: "Costo acquisizione cliente dimezzato",
    timeline: "In 120 giorni",
  },
];

const testimonials = [
  {
    quote: "Prima perdevo il 70% dei preventivi. Oggi chiudo 1 su 2. Il metodo funziona perché è pensato per chi lavora in cantiere, non per marketer.",
    name: "Marco R.",
    role: "Titolare",
    company: "Serramenti Milano",
    stars: 5,
  },
  {
    quote: "Ho smesso di fare sconti per vincere i lavori. Ora i clienti scelgono me per il valore, non per il prezzo più basso.",
    name: "Giuseppe T.",
    role: "Imprenditore Edile",
    company: "Edil Roma Costruzioni",
    stars: 5,
  },
  {
    quote: "In 3 mesi abbiamo strutturato un processo vendita che prima non esisteva. I numeri parlano da soli: +40% di fatturato.",
    name: "Andrea L.",
    role: "Direttore Commerciale",
    company: "Solar Toscana",
    stars: 5,
  },
  {
    quote: "L'affiancamento è diverso da qualsiasi corso. Ti seguono sul campo, nelle trattative vere. È lì che fai il salto.",
    name: "Luca F.",
    role: "Titolare",
    company: "Posatore Veneto",
    stars: 5,
  },
];

const VECaseStudiesSection = () => {
  return (
    <section className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium tracking-wide mb-6">
            Casi Studio Reali
          </span>
          <h2 className="heading-section mb-4">
            Cosa Dicono Chi Ha Già{" "}
            <span className="text-gradient">Fatto Il Percorso</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Risultati concreti da imprenditori edili come te.
          </p>
        </AnimatedSection>

        {/* Case Studies Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" staggerDelay={0.15}>
          {caseStudies.map((cs, i) => (
            <StaggerItem key={i}>
              <div className="h-full rounded-xl border border-secondary/20 bg-card/50 backdrop-blur-sm p-6 flex flex-col hover:border-secondary/40 transition-colors duration-300">
                {/* Logo + Sector */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={cs.logo}
                    alt={`Logo ${cs.sector}`}
                    className="w-10 h-10 object-contain rounded-md bg-foreground/10 p-1"
                  />
                  <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                    {cs.sector}
                  </span>
                </div>

                {/* Problem */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {cs.problem}
                </p>

                {/* Result */}
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-secondary mb-1">{cs.result}</p>
                  <p className="text-sm text-foreground/70">{cs.detail}</p>
                  <span className="inline-block mt-3 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    ⏱ {cs.timeline}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <AnimatedSection className="mb-6">
          <h3 className="heading-sub text-center mb-10">
            Le Parole di Chi <span className="text-gradient">Ci Ha Scelto</span>
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" staggerDelay={0.12}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-secondary/15 bg-card/30 p-6 relative hover:border-secondary/30 transition-colors duration-300">
                <Quote className="absolute top-4 right-4 w-6 h-6 text-secondary/20" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>

                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <a href="#candidati">
            <Button variant="gold" size="xl" className="group">
              Candidati Ora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VECaseStudiesSection;
