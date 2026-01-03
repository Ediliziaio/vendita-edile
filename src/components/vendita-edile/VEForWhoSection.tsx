import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const VEForWhoSection = () => {
  const weAccept = [
    "aziende con margini sani (≥20%)",
    "visione di crescita",
    "struttura minima o volontà di crearla",
  ];

  const weRefuse = [
    "chi cerca scorciatoie",
    "chi vuole miracoli",
    "chi è in crisi grave",
    'chi vuole solo "qualche dritta"',
  ];

  const { ref, formattedValue } = useCountUp({ 
    end: 20, 
    suffix: "%",
    prefix: "<"
  });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Selezione
            </span>
            <h2 className="heading-section text-foreground mb-4">
              NON È PER{" "}
              <span className="text-gold">TUTTI</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* We accept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gold/10 border-2 border-gold rounded-2xl"
          >
            <h3 className="text-xl font-bold text-gold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              LAVORIAMO SOLO CON:
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {weAccept.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* We refuse */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-destructive/10 border border-destructive/30 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              NON LAVORIAMO CON:
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {weRefuse.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Acceptance rate */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <motion.div
              ref={ref}
              className="inline-block p-8 bg-background border border-border rounded-2xl"
            >
              <div className="text-5xl md:text-6xl font-black text-gold mb-2">
                {formattedValue}
              </div>
              <p className="text-lg text-muted-foreground">
                delle aziende diventa partner
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Perché lavoriamo sui risultati.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEForWhoSection;
