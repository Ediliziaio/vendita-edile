import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { HelpCircle } from "lucide-react";
import cantiereImage from "@/assets/cantiere.jpg";

const UncomfortableQuestionSection = () => {
  const whereAre = [
    "i loro showroom pieni?",
    "i loro preventivi chiusi?",
    "i loro bilanci?",
  ];

  const whatDoTheyKnow = [
    "delle obiezioni sul prezzo?",
    "dei costi di posa?",
    "dei margini di commessa?",
    "del post-vendita?",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-12">
            <HelpCircle className="w-10 h-10 text-gold" />
            <h2 className="heading-section text-foreground text-center">
              FACCIAMOCI UNA DOMANDA SCOMODA
            </h2>
          </div>
        </AnimatedSection>

        {/* Image banner */}
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12"
          >
            <img
              src={cantiereImage}
              alt="Team al lavoro su un cantiere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground font-medium max-w-md">
                Noi installiamo infissi{" "}
                <span className="text-gold">ogni giorno</span>. Le agenzie no.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection delay={0.2}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Dove sono:
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {whereAre.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.p
                      whileHover={{ x: 10, color: "hsl(var(--gold))" }}
                      className="text-lg text-muted-foreground flex items-center gap-3 transition-colors"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {item}
                    </motion.p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Cosa ne sanno:
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {whatDoTheyKnow.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.p
                      whileHover={{ x: 10, color: "hsl(var(--gold))" }}
                      className="text-lg text-muted-foreground flex items-center gap-3 transition-colors"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {item}
                    </motion.p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <motion.p
            className="text-center text-2xl md:text-3xl font-bold text-gold mt-16"
            whileHover={{ scale: 1.02 }}
          >
            La risposta è semplice: non lo vivono.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default UncomfortableQuestionSection;
