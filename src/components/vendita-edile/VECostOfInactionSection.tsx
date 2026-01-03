import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Users, DollarSign, Calendar, Target } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const VECostOfInactionSection = () => {
  const timelineCosts = [
    { period: "1 mese", amount: "€30.000–50.000", icon: Calendar },
    { period: "6 mesi", amount: "€180.000–300.000", icon: Calendar },
    { period: "12 mesi", amount: "€360.000–600.000", icon: Calendar },
  ];

  const hiddenCosts = [
    { 
      icon: Clock, 
      text: "Ore buttate in trattative che non chiudono",
      question: "Quante ore/mese?"
    },
    { 
      icon: Users, 
      text: "Clienti premium che vanno dalla concorrenza",
      question: "Quanti/anno?"
    },
    { 
      icon: TrendingDown, 
      text: "Margini compressi per sconti inutili",
      question: "Quanto % in meno?"
    },
    { 
      icon: Target, 
      text: "Stress e notti insonni",
      question: "Quanto vale la tua salute?"
    },
  ];

  const { ref: lossRef, formattedValue: lossValue } = useCountUp({ 
    end: 50000, 
    duration: 2500,
    prefix: "€"
  });

  return (
    <section className="section-padding bg-destructive/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pre-header shock */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-destructive text-sm font-semibold uppercase tracking-wider">
                Attenzione
              </span>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Quanto ti sta costando rimandare?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              IL COSTO DI{" "}
              <span className="text-destructive">NON AGIRE</span>{" "}
              È REALE
            </h2>
            <p className="text-xl text-muted-foreground">
              Ecco quanto <span className="text-destructive font-semibold">perdi</span> ogni mese senza sistema:
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline perdite */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {timelineCosts.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--destructive))" }}
              className="p-6 bg-card border border-destructive/30 rounded-xl text-center transition-all duration-300"
            >
              <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                {cost.period}
              </div>
              <div ref={index === 0 ? lossRef : undefined} className="text-2xl md:text-3xl font-black text-destructive">
                {cost.amount}
              </div>
              <div className="text-sm text-muted-foreground mt-1">persi</div>
            </motion.div>
          ))}
        </div>

        {/* Costi nascosti dettagliati */}
        <AnimatedSection delay={0.3}>
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold text-foreground mb-6">
              I costi che <span className="text-destructive">non vedi</span> (ma paghi):
            </h3>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto" staggerDelay={0.1}>
              {hiddenCosts.map((cost, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-5 bg-card border border-destructive/30 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <cost.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <span className="text-foreground block mb-1">{cost.text}</span>
                      <span className="text-sm text-destructive font-medium italic">{cost.question}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* Box finale shock */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            className="max-w-2xl mx-auto p-6 md:p-8 bg-card border-2 border-destructive rounded-2xl text-center mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
              ⚠️ Ogni giorno che aspetti, il tuo concorrente sta chiudendo i{" "}
              <span className="text-destructive">TUOI</span> clienti.
            </p>
            <p className="text-lg text-muted-foreground">
              Non sta fermo. Sta vendendo. A chi? A chi avrebbe potuto scegliere TE.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Transizione positiva */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-gold">
              👉 Ma c'è una buona notizia...
            </p>
            <p className="text-muted-foreground mt-2">
              Puoi cambiare tutto questo. In 90 giorni.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VECostOfInactionSection;
