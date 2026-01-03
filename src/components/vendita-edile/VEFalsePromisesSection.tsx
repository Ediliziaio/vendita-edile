import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VEFalsePromisesSection = () => {
  const falsePromises = [
    {
      promise: '"Avrai un consulente dedicato"',
      reality: "Poi scopri che non ha mai chiuso una trattativa edile",
    },
    {
      promise: '"Ti seguiremo passo dopo passo"',
      reality: "Poi risponde quando può e sparisce quando serve",
    },
    {
      promise: '"Costruiremo una strategia su misura"',
      reality: "Poi scopri che non conosce obiezioni, posa, margini",
    },
    {
      promise: '"Aumenteremo il fatturato"',
      reality: "Poi nessuno misura nulla",
    },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              PER ANNI TI HANNO RACCONTATO{" "}
              <span className="text-gold">QUESTE FRASI</span>
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-6 mb-16" staggerDelay={0.12}>
          {falsePromises.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 md:p-8 bg-background border border-border rounded-xl"
              >
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-3 line-through decoration-destructive/50 decoration-2">
                  {item.promise}
                </p>
                <p className="text-muted-foreground text-lg">
                  {item.reality}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5}>
          <div className="p-8 md:p-12 bg-destructive/10 border-2 border-destructive/30 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              LA VERITÀ È QUESTA
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Chi non ha mai:
            </p>
            <div className="space-y-2 text-lg text-foreground mb-6">
              <p>chiuso una commessa edilizia</p>
              <p>gestito un cliente che tratta sul prezzo</p>
              <p>affrontato ritardi, posa, problemi post-vendita</p>
            </div>
            <p className="text-xl md:text-2xl font-bold text-gold">
              👉 NON può insegnarti a vendere.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEFalsePromisesSection;
