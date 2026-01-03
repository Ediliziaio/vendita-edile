import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { X } from "lucide-react";

const EmptyPromisesSection = () => {
  const problems = [
    "Nessun tracciamento serio",
    "Nessuna analisi sui margini",
    "Nessuna responsabilità sui risultati",
  ];

  const excuses = [
    '"Serve tempo."',
    '"Il problema è il prodotto."',
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              "Ti porteremo X clienti al mese."
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              "Aumenteremo il fatturato del X%."
            </p>
            <h2 className="heading-section text-foreground">E poi?</h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-4 mb-12" staggerDelay={0.1}>
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-background border border-destructive/30 rounded-xl flex items-center gap-4"
              >
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-foreground font-medium">{problem}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Se le cose non funzionano:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {excuses.map((excuse, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-muted border border-border rounded-full text-foreground/70 italic"
                >
                  {excuse}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-navy-light rounded-2xl text-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gold mb-4">
              TANTE PROMESSE. POCHI FATTI.
            </h3>
            <p className="text-xl text-muted-foreground">
              E intanto tu paghi.
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Questo è stato il mercato delle agenzie marketing per l'edilizia fino ad oggi.
            </p>
            <p className="text-xl text-foreground font-medium">
              Ed è normale.
            </p>
            <p className="text-xl text-gold font-semibold mt-4">
              👉 Cosa può sapere di edilizia chi non ha mai gestito un'azienda edile vera?
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmptyPromisesSection;
