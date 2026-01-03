import { motion } from "framer-motion";
import { AlertCircle, Target, TrendingDown, Users, Percent, Ban, Building2, X, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

// Tecniche obsolete integrate da VEOldTechniquesSection
const obsoleteTechniques = [
  { technique: "Fai più preventivi, chiudi di più", whyFails: "Il cliente vuole VALORE, non quantità." },
  { technique: "Abbassa il prezzo per vincere", whyFails: "Corsa al ribasso = margini zero" },
  { technique: "Sii aggressivo nella chiusura", whyFails: "Il cliente 2024 fugge dalla pressione." },
  { technique: "Il prodotto si vende da solo", whyFails: "15 concorrenti vendono lo stesso prodotto." },
  { technique: "Aspetta che il cliente richiami", whyFails: "Il 70% delle vendite va a chi fa follow-up." },
  { technique: "I social portano clienti", whyFails: "I social portano CURIOSI, non contratti." }
];

const VEProblemSection = () => {
  const marketChanges = [
    { 
      icon: Percent,
      title: "SUPERBONUS 110%", 
      impact: "€119,5 miliardi di lavori. 496.315 cantieri. Clienti abituati a \"gratis\".",
      badge: "ENEA 2024",
      stat: "€119,5 MLD"
    },
    { 
      icon: Ban,
      title: "SCONTO IN FATTURA", 
      impact: "Eliminato con DL 11/2023. I clienti ora devono PAGARE ma non ci sono abituati.",
      badge: "Feb 2023",
      stat: "Eliminato"
    },
    { 
      icon: Users,
      title: "BOOM DI COMPETITOR", 
      impact: "+15.000 nuove imprese edili in 3 anni. Concorrenza triplicata, guerra al ribasso.",
      badge: "Registro Imprese",
      stat: "+15.000"
    },
    { 
      icon: TrendingDown,
      title: "FINE DEGLI INCENTIVI", 
      impact: "-22% investimenti nel 2024. -30% manutenzione straordinaria prevista nel 2025.",
      badge: "ANCE 2025",
      stat: "-22%"
    },
  ];

  const handleCtaClick = () => {
    const element = document.getElementById("chi-vince");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--gold)/0.05)_0%,transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        {/* Hook - Pattern Interrupt */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-6"
            >
              <AlertCircle className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Il mercato è cambiato. Tu lo sai.
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Il mercato dell'edilizia è stato <span className="text-destructive">STRAVOLTO</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              E tu stai ancora vendendo con le regole di 5 anni fa.
            </p>
          </div>
        </AnimatedSection>

        {/* Market Changes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {marketChanges.map((change, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-navy-dark/50 border border-gold/30 rounded-xl p-5 overflow-hidden group hover:border-gold/50 transition-colors"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <change.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-lg text-foreground font-bold">
                        {change.title}
                      </span>
                      <span className="text-lg font-black text-destructive">
                        {change.stat}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {change.impact}
                    </p>
                    <span className="px-2 py-0.5 bg-gold/20 text-gold text-xs font-semibold rounded">
                      Fonte: {change.badge}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Reveal - NOT YOUR FAULT */}
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-2 border-gold/50 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center"
          >
            <Building2 className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              NON È COLPA TUA.
            </p>
            <div className="space-y-2 text-lg text-muted-foreground mb-6">
              <p>€119,5 miliardi di Superbonus hanno <span className="text-destructive font-semibold">drogato</span> il mercato.</p>
              <p>Lo sconto in fattura ha <span className="text-destructive font-semibold">ucciso</span> i margini (eliminato Feb 2023).</p>
              <p>+15.000 competitor improvvisati hanno <span className="text-destructive font-semibold">triplicato</span> la concorrenza.</p>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Le regole del gioco sono cambiate.
              <br />
              <span className="text-gold">Ma nessuno ti ha dato il nuovo manuale.</span>
            </p>
            <p className="text-xs text-muted-foreground/70 mt-4">
              Fonti: ENEA, ANCE, Registro Imprese
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Tecniche Obsolete - Integrato da VEOldTechniquesSection */}
        <AnimatedSection delay={0.25}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            LE TECNICHE CHE <span className="text-gold">NON FUNZIONANO PIÙ</span>
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {obsoleteTechniques.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-xl p-5 h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 line-through opacity-70 text-sm">
                      "{item.technique}"
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {item.whyFails}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Real Problems - Consequences */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-b from-navy-dark/80 to-navy/80 border border-gold/30 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-gold" />
              <h4 className="text-xl font-semibold text-gold">
                E questo significa che oggi:
              </h4>
            </div>
            
            <div className="space-y-4">
              {[
                "Le vecchie tecniche di vendita NON funzionano più",
                "I clienti sono più diffidenti e indecisi di sempre",
                "La concorrenza gioca solo sul prezzo",
                "Chi non ha un SISTEMA, sparisce"
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-gold/10 border-l-4 border-gold rounded-r-lg"
                >
                  <span className="text-gold font-bold text-lg">→</span>
                  <span className="text-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.35}>
          <div className="text-center mb-8">
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="text-lg px-8 py-6 glow-gold"
            >
              Scopri Come Risolvere
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Transition Hook - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Ma il problema vero non sono le tecniche sbagliate...
            </p>
            <p className="text-xl font-bold text-foreground">
              Questi numeri non mentono. <span className="text-gold">Guarda la timeline completa...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEProblemSection;
