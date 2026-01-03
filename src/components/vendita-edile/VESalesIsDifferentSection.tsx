import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VESalesIsDifferentSection = () => {
  const winnerTraits = [
    "guida la trattativa",
    "filtra il cliente",
    "crea valore",
    "decide il ritmo",
    "controlla i numeri",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-6">
              VENDERE IN EDILIZIA È{" "}
              <span className="text-gold">DIVERSO</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              E lo è per un motivo molto chiaro:
            </p>
            <p className="text-xl md:text-2xl font-medium text-foreground">
              👉 La vendita edile NON è marketing.
            </p>
            <p className="text-xl md:text-2xl font-bold text-gold">
              È PSICOLOGIA, PROCESSO, CONTROLLO.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto">
            <div className="p-6 md:p-8 bg-card border-2 border-gold rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Chi vince:
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {winnerTraits.map((trait, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-background rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-lg text-foreground font-medium">
                        {trait}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VESalesIsDifferentSection;
