import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VECredibilitySection = () => {
  const credentials = [
    "vendiamo infissi ogni giorno",
    "affrontiamo trattative reali",
    "gestiamo posa, margini, fornitori",
    "chiudiamo contratti veri",
    "incassiamo sul campo",
  ];

  const processPoints = [
    "è stato testato su di noi",
    "ha prodotto incassi",
    "è stato corretto sugli errori reali",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Chi siamo
            </span>
            <h2 className="heading-section text-foreground mb-4">
              NON SIAMO FORMATORI DA PALCO
            </h2>
            <p className="text-xl text-gold font-medium">
              Abbiamo un'azienda edile vera
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">
              Ogni giorno:
            </h3>
            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {credentials.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* Our process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-6 md:p-8 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">
              Ogni processo che insegniamo:
            </h3>
            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {processPoints.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xl md:text-2xl">
              <span className="text-foreground">👉 Prima funziona per noi.</span>
              <ArrowRight className="w-6 h-6 text-gold hidden md:block" />
              <span className="text-gold font-bold">Poi lo applichiamo a te.</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VECredibilitySection;
