import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getMonthName, getAvailableSpots } from "@/lib/utils";
import { ContactFormEmbed } from "@/components/ContactFormEmbed";
import showroomImage from "@/assets/showroom.jpg";

const VEFinalCTASection = () => {
  const trustBadges = [
    { icon: Shield, text: "Sistema testato" },
    { icon: Clock, text: "90 giorni" },
    { icon: Award, text: "Garanzia totale" },
  ];

  return (
    <section id="candidati" className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={showroomImage} 
          alt="Showroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <motion.span 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider"
            >
              Conclusione
            </motion.span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              VENDITA EDILE® non è un corso da guardare.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-8 drop-shadow-[0_0_30px_hsl(var(--gold)/0.4)]">
              È un sistema di vendita costruito sul campo, sui tuoi clienti.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Candidati ora: in 2 minuti scopri se la tua azienda rientra tra
              quelle che possiamo affiancare questo mese. Nessun impegno,
              nessun venditore al telefono.
            </p>
          </AnimatedSection>

          {/* Form di richiesta contatto embeddato */}
          <AnimatedSection delay={0.4}>
            <ContactFormEmbed height={680} />
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-6">
              {trustBadges.map((badge, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground px-4 py-2 bg-background/10 backdrop-blur-sm rounded-lg border border-border/30"
                >
                  <badge.icon className="w-4 h-4 text-gold" />
                  {badge.text}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          {/* Urgency Footer */}
          <AnimatedSection delay={0.8}>
            <div className="mt-12 pt-8 border-t border-border/30">
              <motion.p 
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gold font-semibold text-lg"
              >
                ⚠️ Solo {getAvailableSpots()} posti disponibili per {getMonthName()} {new Date().getFullYear()}
              </motion.p>
              <p className="text-muted-foreground text-sm mt-2">
                Risposta entro 48 ore • Chiamata strategica gratuita
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VEFinalCTASection;
