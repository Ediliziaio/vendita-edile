import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Check, FlaskConical } from "lucide-react";
import teamImage from "@/assets/team.jpg";
const MethodSection = () => {
  const methodPoints = ["è stata testata sui nostri preventivi", "è passata dai nostri showroom", "è stata misurata sugli incassi", "è stata corretta sugli errori"];
  return <section id="metodo" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left">
            <motion.div whileHover={{
            scale: 1.02
          }} className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={teamImage} alt="Il nostro team di professionisti" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                
              </div>
            </motion.div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-10 h-10 text-gold" />
                <span className="text-lg text-gold font-medium uppercase tracking-wider">
                  Il nostro metodo
                </span>
              </div>
              <h2 className="heading-section text-foreground mb-6">
                PRIMA FUNZIONA PER NOI.
              </h2>
              <p className="heading-sub text-gold mb-8">
                POI LO APPLICHIAMO PER TE.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-foreground/80 mb-6">
                Ogni strategia che proponiamo:
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {methodPoints.map((point, index) => <StaggerItem key={index}>
                  <motion.div whileHover={{
                x: 10,
                borderColor: "hsl(var(--gold))"
              }} className="flex items-center gap-4 p-4 bg-background/10 backdrop-blur-sm border border-border/30 rounded-xl transition-colors">
                    <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-background" strokeWidth={3} />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                </StaggerItem>)}
            </StaggerContainer>
          </div>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="p-8 md:p-12 bg-background rounded-2xl">
            <p className="text-xl md:text-2xl text-foreground mb-4">
              👉 Non vendiamo promesse.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gold">
              👉 Vendiamo processi già validati.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default MethodSection;