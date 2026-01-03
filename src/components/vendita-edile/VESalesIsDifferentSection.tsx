import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VESalesIsDifferentSection = () => {
  const losers = [
    { trait: "Subisce la trattativa" },
    { trait: "Accetta ogni cliente" },
    { trait: "Compete sul prezzo" },
    { trait: "Rincorre il cliente" },
    { trait: "Va a sensazione" },
  ];

  const winners = [
    { trait: "GUIDA la trattativa" },
    { trait: "FILTRA il cliente" },
    { trait: "CREA valore percepito" },
    { trait: "DECIDE il ritmo" },
    { trait: "CONTROLLA i numeri" },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-narrow">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Ecco perché i corsi generici non funzionano
            </span>
            <h2 className="heading-section text-foreground mb-4">
              VENDERE IN EDILIZIA È{" "}
              <span className="text-gold">DIVERSO</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-foreground">
              E chi non lo capisce, ti fa perdere soldi.
            </p>
          </div>
        </AnimatedSection>

        {/* Truth block */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-card border-2 border-gold rounded-2xl text-center"
            >
              <div className="space-y-3 mb-6">
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 La vendita edile <span className="text-destructive font-bold">NON</span> è marketing.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 <span className="text-destructive font-bold">NON</span> è motivazione.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 <span className="text-destructive font-bold">NON</span> è "mentalità positiva".
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-2xl md:text-3xl font-black text-gold">
                  È PSICOLOGIA. È PROCESSO. È CONTROLLO.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Comparison table */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Losers column */}
          <AnimatedSection delay={0.2}>
            <div className="p-6 md:p-8 bg-card border-2 border-destructive/30 rounded-2xl h-full">
              <h3 className="text-xl font-bold text-destructive mb-6 text-center flex items-center justify-center gap-2">
                <X className="w-6 h-6" />
                CHI PERDE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {losers.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-3 p-4 bg-destructive/5 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-lg text-muted-foreground">
                        {item.trait}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Winners column */}
          <AnimatedSection delay={0.3}>
            <div className="p-6 md:p-8 bg-card border-2 border-gold rounded-2xl h-full">
              <h3 className="text-xl font-bold text-gold mb-6 text-center flex items-center justify-center gap-2">
                <Check className="w-6 h-6" />
                CHI VINCE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {winners.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 bg-gold/10 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-lg text-foreground font-medium">
                        {item.trait}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Central warning block */}
        <AnimatedSection delay={0.4}>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/40 rounded-2xl text-center mb-8"
          >
            <p className="text-xl text-muted-foreground mb-4">
              Se <span className="text-destructive font-bold">NON</span> controlli questi 5 elementi, stai vendendo a caso.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              E vendere a caso significa perdere{" "}
              <span className="text-destructive">€30.000-€50.000</span> al mese.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground inline-flex items-center gap-2">
              Ecco cosa costruiamo insieme in{" "}
              <span className="text-gold font-bold">90 giorni</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VESalesIsDifferentSection;
