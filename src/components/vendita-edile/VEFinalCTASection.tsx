import { motion } from "framer-motion";
import { ExternalLink, Shield, Clock, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/showroom.jpg";

// Configura qui l'URL del tuo form esterno (Typeform, ecc.)
const EXTERNAL_FORM_URL = "https://example.typeform.com/to/your-form";

const VEFinalCTASection = () => {
  const handleCtaClick = () => {
    window.open(EXTERNAL_FORM_URL, "_blank");
  };

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
              Vendita Edile non è formazione.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-8 drop-shadow-[0_0_30px_hsl(var(--gold)/0.4)]">
              È un sistema di vendita costruito sul campo.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Se vuoi capire se è applicabile alla tua azienda, candidati ora.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="gold"
                onClick={handleCtaClick}
                className="text-base px-8 py-6 md:text-xl md:px-12 md:py-8 font-bold shadow-2xl shadow-gold/50 hover:shadow-gold/70 transition-all duration-300"
              >
                <span>Richiedi la Valutazione Strategica</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-6">
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
                ⚠️ Solo 3 posti disponibili per gennaio 2026
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
