import { motion } from "framer-motion";
import { Shield, Check, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const VEPricingSection = () => {
  const guaranteePoints = [
    "non migliori le vendite",
    "non aumenti il controllo",
    "non ottieni risultati concreti",
  ];

  const handleCtaClick = () => {
    const element = document.getElementById("candidati");
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
    <section id="investimento" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Investimento
            </span>
            <h2 className="heading-section text-foreground mb-4">
              QUANTO COSTA
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-card border-2 border-gold rounded-2xl text-center"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Investimento
            </h3>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-black text-gold">€9.000</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <Clock className="w-5 h-5" />
              <span>Durata: 90 giorni</span>
            </div>
            <p className="text-lg text-foreground font-medium mb-8">
              Affiancamento diretto
            </p>
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="w-full text-lg py-6 glow-gold"
            >
              Richiedi Valutazione
            </Button>
          </motion.div>

          {/* Guarantee card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 md:p-10 bg-navy-light border border-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground">GARANZIA TOTALE</h3>
            </div>

            <p className="text-muted-foreground mb-4">
              Se entro 90 giorni:
            </p>

            <ul className="space-y-3 mb-6">
              {guaranteePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-gold/10 rounded-xl mb-4">
              <p className="text-lg font-bold text-gold text-center">
                👉 Ti rimborsiamo. Punto.
              </p>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Zero scuse. Zero "dipende".
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VEPricingSection;
