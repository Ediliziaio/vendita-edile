import { motion } from "framer-motion";
import { Trophy, Check, X, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

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

const VEWhoWinsSection = () => {
  const handleCtaClick = () => {
    const element = document.getElementById("candidati");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="chi-vince" className="py-20 md:py-32 bg-gradient-to-b from-background via-gold/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <Trophy className="w-4 h-4" />
              Ecco cosa fanno di diverso da te
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-center mb-12 text-foreground">
            CHI VINCE OGGI IN EDILIZIA
          </h2>
        </AnimatedSection>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="p-4 md:p-8 bg-card border border-destructive/30 rounded-2xl h-full">
              <h3 className="text-xl font-bold text-destructive mb-6 text-center flex items-center justify-center gap-2">
                <X className="w-6 h-6" />
                CHI PERDE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {losers.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div whileHover={{ x: -5 }} className="flex items-center gap-3 p-4 bg-destructive/5 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-base md:text-lg text-muted-foreground">{item.trait}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="p-4 md:p-8 bg-card border-2 border-gold rounded-2xl h-full">
              <h3 className="text-xl font-bold text-gold mb-6 text-center flex items-center justify-center gap-2">
                <Check className="w-6 h-6" />
                CHI VINCE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {winners.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 p-4 bg-gold/10 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-base md:text-lg text-foreground font-medium">{item.trait}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button size="lg" variant="gold" onClick={handleCtaClick} className="text-lg px-8 py-6 glow-gold">
              Diventa Un Vincitore
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEWhoWinsSection;
