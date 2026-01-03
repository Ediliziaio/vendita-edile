import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VEPainPointsSection = () => {
  const painPoints = [
    "Fare 20–30 preventivi al mese e chiuderne 2–3",
    'Clienti che chiedono sempre "uno sconto finale"',
    "Trattative infinite che non portano a nulla",
    'Commerciali che trattano "a sensazione"',
    "Zero controllo su pipeline, numeri e incassi",
    "Lavorare tanto… e guadagnare meno di quanto dovresti",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Sii onesto
            </span>
            <h2 className="heading-section text-foreground">
              STANCO DI:
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="max-w-2xl mx-auto space-y-4" staggerDelay={0.1}>
          {painPoints.map((point, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 10, borderColor: "hsl(var(--gold))" }}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl transition-colors cursor-default"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-destructive/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-lg text-foreground">{point}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default VEPainPointsSection;
