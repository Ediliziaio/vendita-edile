import { motion } from "framer-motion";
import { Shield, FileCheck, Lock } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEGuaranteeSection = () => {
  const guaranteePoints = [
    "non migliori le vendite",
    "non aumenti il controllo",
    "non ottieni risultati concreti",
  ];

  return (
    <section className="py-16 md:py-24 bg-navy-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 border-2 border-gold mb-6"
            >
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-gold" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
              GARANZIA TOTALE
              <span className="block text-gold">ZERO RISCHIO</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Non chiediamo fiducia cieca. Ti diamo una garanzia scritta.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 md:p-10 bg-card border-2 border-gold/50 rounded-2xl relative"
            >
              {/* Sigillo */}
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-full h-full rounded-full bg-gold flex items-center justify-center shadow-lg"
                >
                  <div className="text-center">
                    <span className="text-navy font-black text-xs md:text-sm block">100%</span>
                    <span className="text-navy font-bold text-[10px] md:text-xs">GARANTITO</span>
                  </div>
                </motion.div>
              </div>

              <p className="text-foreground text-lg mb-6">
                Se entro <span className="text-gold font-bold">90 giorni</span>:
              </p>

              <ul className="space-y-4 mb-8">
                {guaranteePoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive text-lg font-bold">✕</span>
                    </div>
                    <span className="text-lg md:text-xl text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="p-6 md:p-8 bg-gold/10 border-2 border-gold rounded-xl mb-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl md:text-3xl font-black text-gold text-center mb-3">
                  👉 Ti rimborsiamo. TUTTO.
                </p>
                <p className="text-base md:text-lg text-foreground text-center">
                  Non "parte". Non "dipende". <span className="font-black text-gold">TUTTO.</span>
                </p>
              </motion.div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileCheck className="w-5 h-5 text-gold" />
                  <span className="text-sm md:text-base">Garanzia scritta nel contratto</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="w-5 h-5 text-gold" />
                  <span className="text-sm md:text-base">Prima di iniziare</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="text-center text-muted-foreground mt-8 text-lg italic">
              "Se non funziona, non ti costa nulla. Se funziona, ti cambia l'azienda."
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VEGuaranteeSection;
