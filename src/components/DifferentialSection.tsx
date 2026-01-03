import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Building2, Users, FileCheck, TrendingUp } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";
const DifferentialSection = () => {
  const realityPoints = [{
    icon: Building2,
    text: "Clienti veri."
  }, {
    icon: Users,
    text: "Trattative vere."
  }, {
    icon: FileCheck,
    text: "Errori veri."
  }, {
    icon: TrendingUp,
    text: "Numeri veri."
  }];
  return <section id="differenza" className="section-padding bg-background relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider">
                La differenza
              </span>
              <h2 className="heading-section text-foreground mb-6">
                MARKETING EDILE È <span className="text-gold">DIVERSO</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Per un motivo molto chiaro:
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 md:p-8 bg-card border border-border rounded-2xl">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  👉 Noi abbiamo{" "}
                  <span className="text-gold font-bold">
                    un'azienda edile che vende infissi e serramenti.
                  </span>
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Non un progetto teorico.</p>
                  <p>Non un caso studio inventato.</p>
                  <p className="text-foreground font-medium">
                    Un'azienda reale, in Italia.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} direction="right">
            <motion.div whileHover={{
            scale: 1.02
          }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={showroomImage} alt="Showroom infissi e serramenti moderni" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-foreground/80 font-medium">
              </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {realityPoints.map((point, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            borderColor: "hsl(var(--gold))"
          }} className="p-6 bg-navy-light border border-border rounded-xl text-center transition-colors duration-300">
                <point.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-foreground font-semibold">{point.text}</p>
              </motion.div>)}
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default DifferentialSection;