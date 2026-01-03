import { motion } from "framer-motion";
import { Check, X, AlertCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const VEForWhoSection = () => {
  const weAccept = [
    {
      text: "Aziende con margini sani (≥20%)",
      reason: "Perché lavoriamo sulla crescita, non sulla sopravvivenza"
    },
    {
      text: "Titolari con visione di crescita",
      reason: "Chi vuole passare da artigiano a imprenditore"
    },
    {
      text: "Chi ha già una struttura (o vuole crearla)",
      reason: "Perché senza struttura, niente metodo"
    },
    {
      text: "Chi è disposto a mettersi in discussione",
      reason: "Il metodo funziona SE lo applichi"
    },
  ];

  const weRefuse = [
    {
      text: "Chi cerca scorciatoie",
      reason: "Non esistono. Punto."
    },
    {
      text: "Chi vuole miracoli",
      reason: "I risultati si costruiscono, non piovono dal cielo"
    },
    {
      text: "Chi è in crisi grave",
      reason: "Prima sistema la casa, poi costruisci il palazzo"
    },
    {
      text: 'Chi vuole solo "qualche dritta"',
      reason: "Non vendiamo consigli. Vendiamo trasformazioni."
    },
  ];

  const { ref, formattedValue } = useCountUp({ 
    end: 20, 
    suffix: "%",
    prefix: "<"
  });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        {/* Pre-header provocatorio */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-destructive text-sm font-medium mb-6 uppercase tracking-wider">
              ⚠️ Leggi bene
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Leggi bene. <span className="text-destructive font-semibold">Potresti non essere adatto.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              NON È PER{" "}
              <span className="text-gold">TUTTI</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              (E non ci scusiamo per questo.)
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* We accept - potenziato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 md:p-8 bg-gold/10 border-2 border-gold rounded-2xl"
          >
            <h3 className="text-xl font-bold text-gold mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              LAVORIAMO SOLO CON:
            </h3>
            <StaggerContainer className="space-y-5" staggerDelay={0.1}>
              {weAccept.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-4 bg-background/50 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-semibold">{item.text}</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8 italic">
                      → {item.reason}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* We refuse - potenziato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 md:p-8 bg-destructive/10 border-2 border-destructive/30 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              NON LAVORIAMO CON:
            </h3>
            <StaggerContainer className="space-y-5" staggerDelay={0.1}>
              {weRefuse.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-4 bg-background/50 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-semibold">{item.text}</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8 italic">
                      → {item.reason}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Box centrale enfatizzato */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            className="max-w-2xl mx-auto p-6 md:p-8 bg-background border-2 border-gold rounded-2xl text-center mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Perché siamo così selettivi?
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Perché il nostro successo dipende dal <span className="text-gold font-semibold">TUO</span> successo.
            </p>
            <p className="text-foreground font-medium">
              Se non sei pronto, preferiamo dirti <span className="text-destructive font-bold">NO</span> adesso.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Acceptance rate - potenziato */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <motion.div
              ref={ref}
              className="inline-block p-8 bg-card border-2 border-gold rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-6xl md:text-7xl font-black text-gold mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {formattedValue}
              </motion.div>
              <p className="text-lg font-semibold text-foreground mb-1">
                delle candidature viene accettata
              </p>
              <p className="text-muted-foreground">
                Perché lavoriamo sui risultati, non sui numeri.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEForWhoSection;
