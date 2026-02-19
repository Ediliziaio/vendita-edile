import { motion } from "framer-motion";
import { FileEdit, Search, CheckCircle, ArrowRight, Clock, Users, Target, AlertTriangle, Check, X, AlertCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

// Integrato da VEForWhoSection
const weAccept = [
  { text: "Aziende con margini sani (≥20%)", reason: "Lavoriamo sulla crescita, non sulla sopravvivenza" },
  { text: "Titolari con visione di crescita", reason: "Chi vuole passare da artigiano a imprenditore" },
  { text: "Chi ha già una struttura (o vuole crearla)", reason: "Senza struttura, niente metodo" },
  { text: "Chi è disposto a mettersi in discussione", reason: "Il metodo funziona SE lo applichi" },
];

const weRefuse = [
  { text: "Chi cerca scorciatoie", reason: "Non esistono. Punto." },
  { text: "Chi vuole miracoli", reason: "I risultati si costruiscono" },
  { text: "Chi è in crisi grave", reason: "Prima sistema la casa" },
  { text: 'Chi vuole solo "qualche dritta"', reason: "Vendiamo trasformazioni." },
];

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
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              ⚠️ Leggi bene. Potresti non essere adatto.
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-2">
              CHI ACCETTIAMO E <span className="text-gold">COME FUNZIONA</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Non è per tutti. <span className="text-gold font-semibold">E non ci scusiamo per questo.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Chi Accettiamo / Chi Rifiutiamo - Integrato da VEForWhoSection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* We accept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-4 md:p-6 bg-gold/10 border-2 border-gold rounded-2xl"
          >
            <h3 className="text-lg font-bold text-gold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              LAVORIAMO CON:
            </h3>
            <StaggerContainer className="space-y-3" staggerDelay={0.08}>
              {weAccept.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-3 bg-background/50 rounded-xl"
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm">{item.text}</span>
                    </div>
                    <p className="text-xs text-muted-foreground ml-6 italic">
                      → {item.reason}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* We refuse - ridotta prominenza */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-4 md:p-6 bg-muted/30 border border-destructive/20 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-muted-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive/70" />
              </div>
              NON LAVORIAMO CON:
            </h3>
            <StaggerContainer className="space-y-3" staggerDelay={0.08}>
              {weRefuse.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="p-3 bg-background/50 rounded-xl"
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium text-sm">{item.text}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 ml-6 italic">
                      → {item.reason}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Acceptance Rate */}
        <AnimatedSection delay={0.25}>
          <div className="text-center mb-12">
            <motion.div
              ref={percentRef}
              className="inline-block p-6 bg-card border-2 border-gold rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {percentValue}
              </motion.div>
              <p className="text-foreground font-semibold mb-1">
                delle candidature viene accettata
              </p>
              <p className="text-sm text-muted-foreground">
                Il nostro successo dipende dal TUO successo.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Timeline Steps */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-xl font-bold text-center text-foreground mb-8">
            IL PROCESSO IN <span className="text-gold">3 STEP</span>
          </h3>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative"
              >
                <div className="p-6 bg-card border border-border rounded-2xl h-full hover:border-gold transition-colors">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-background text-xs font-bold rounded-full">
                    {step.step}
                  </div>
                  
                  <div className="flex flex-col items-center text-center pt-4">
                    <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                    <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-3">
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

        {/* CTA finale */}
        <AnimatedSection delay={0.4}>
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

        {/* Transition - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground">
              Hai ancora dubbi? <span className="text-gold font-semibold">Ecco le risposte...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VESelectionProcessSection;
