import { motion } from "framer-motion";
import { FileEdit, Search, CheckCircle, ArrowRight, Clock, Users, Target, AlertTriangle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const VESelectionProcessSection = () => {
  const steps = [
    {
      icon: FileEdit,
      step: "STEP 1",
      title: "Candidatura",
      time: "5 minuti",
      description: "Compili un questionario. Ci racconti la tua azienda."
    },
    {
      icon: Search,
      step: "STEP 2",
      title: "Analisi",
      time: "48h",
      description: "Studiamo i tuoi numeri. Valutiamo il potenziale."
    },
    {
      icon: CheckCircle,
      step: "STEP 3",
      title: "Esito",
      time: "SÌ / NO",
      description: "Niente 'forse'. Niente 'ne riparliamo'. Sì o No."
    },
  ];

  const stats = [
    { label: "Candidature ricevute/mese", value: "50+", icon: Users },
    { label: "Aziende accettate/mese", value: "max 5", icon: Target },
    { label: "Tasso di accettazione", value: "<20%", icon: CheckCircle },
  ];

  const { ref: percentRef, formattedValue: percentValue } = useCountUp({ 
    end: 20, 
    suffix: "%",
    prefix: "<"
  });

  const handleCtaClick = () => {
    const element = document.getElementById("candidati");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Come Funziona
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Come funziona la candidatura
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-2">
              IL PROCESSO È{" "}
              <span className="text-gold">SEMPLICE</span>.
            </h2>
            <p className="text-xl text-muted-foreground">
              L'accesso <span className="text-destructive font-semibold">NO</span>.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline visiva potenziata */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative"
              >
                <div className="p-6 bg-card border border-border rounded-2xl h-full hover:border-gold transition-colors">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-background text-xs font-bold rounded-full">
                    {step.step}
                  </div>
                  
                  <div className="flex flex-col items-center text-center pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-gold">{step.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Box "Perché questo processo?" */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            className="max-w-2xl mx-auto p-6 md:p-8 bg-card border border-border rounded-2xl mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Perché questo processo?
            </h3>
            <div className="space-y-3">
              <p className="text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">→</span>
                Non vendiamo a tutti.
              </p>
              <p className="text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">→</span>
                Accettiamo solo chi ha il potenziale per ottenere risultati.
              </p>
              <p className="text-foreground font-semibold flex items-start gap-2">
                <span className="text-gold mt-0.5">→</span>
                Il nostro business si basa sui <span className="text-gold">risultati</span>, non sui corsi venduti.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Statistiche enfatizzate */}
        <AnimatedSection delay={0.5}>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  ref={index === 2 ? percentRef : undefined}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 bg-background border border-border rounded-xl text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-2xl font-black text-gold mb-1">
                    {index === 2 ? percentValue : stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* CTA finale con urgenza */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Vuoi scoprire se sei tra il <span className="text-gold">20%</span>?
              </p>
              
              <Button
                size="lg"
                variant="gold"
                onClick={handleCtaClick}
                className="text-lg px-8 py-6 glow-gold mb-4"
              >
                Candidati Ora
              </Button>

              <motion.div 
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AlertTriangle className="w-4 h-4 text-gold" />
                <span>Posti limitati. <span className="text-gold font-semibold">Max 5 aziende/mese.</span></span>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VESelectionProcessSection;
