import { motion } from "framer-motion";
import { AlertCircle, Target, TrendingDown, Users, Percent, Ban, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEProblemSection = () => {
  const marketChanges = [
    { 
      icon: Percent,
      title: "SUPERBONUS 110%", 
      impact: "Ha creato aspettative irrealistiche. I clienti pensano ancora di avere diritto a tutto gratis.",
      badge: "2020-2023"
    },
    { 
      icon: Ban,
      title: "SCONTO IN FATTURA", 
      impact: "Ha abituato i clienti a non pagare. Ora il prezzo pieno sembra una rapina.",
      badge: "Eliminato"
    },
    { 
      icon: Users,
      title: "BOOM DI COMPETITOR", 
      impact: "Durante i bonus sono spuntati 10.000 \"esperti\". Guerra al ribasso totale.",
      badge: "+300%"
    },
    { 
      icon: TrendingDown,
      title: "FINE DEGLI INCENTIVI", 
      impact: "I clienti ora sono diffidenti, indecisi, aspettano \"il prossimo bonus\".",
      badge: "2024"
    },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--destructive)/0.05)_0%,transparent_50%)]" />
      
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
              className="relative bg-navy-dark/50 border border-destructive/30 rounded-xl p-5 overflow-hidden group hover:border-gold/50 transition-colors"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <change.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg text-foreground font-bold">
                        {change.title}
                      </span>
                      <span className="px-2 py-0.5 bg-destructive/20 text-destructive text-xs font-semibold rounded">
                        {change.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {change.impact}
                    </p>
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
              <p>Il Superbonus ha <span className="text-destructive font-semibold">drogato</span> il mercato.</p>
              <p>Lo sconto in fattura ha <span className="text-destructive font-semibold">ucciso</span> i margini.</p>
              <p>I competitor improvvisati hanno <span className="text-destructive font-semibold">abbassato</span> i prezzi.</p>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Le regole del gioco sono cambiate.
              <br />
              <span className="text-gold">Ma nessuno ti ha dato il nuovo manuale.</span>
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Real Problems - Consequences */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-b from-navy-dark/80 to-navy/80 border border-gold/30 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
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
                  className="flex items-start gap-3 p-3 bg-destructive/10 border-l-4 border-destructive rounded-r-lg"
                >
                  <span className="text-destructive font-bold text-lg">→</span>
                  <span className="text-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Final Punch - The Solution Tease */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-navy-dark/80 border-2 border-gold/50 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xl md:text-2xl text-foreground mb-3">
                La buona notizia?
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Chi capisce il nuovo gioco VINCE.
              </p>
              <p className="text-muted-foreground">
                Chi continua con le vecchie regole... <span className="text-destructive font-semibold">sparisce.</span>
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEProblemSection;