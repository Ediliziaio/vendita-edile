import { motion } from "framer-motion";
import { Check, X, ShieldCheck, FileText, Search, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const ForWhoSection = () => {
  const { ref: statRef, count: acceptanceRate } = useCountUp({ end: 17, duration: 2000 });

  const weAccept = [
    { text: "Margini sani", detail: "(almeno 20% sul lavoro)" },
    { text: "Visione a 1-3 anni", detail: "(non cerchi la scorciatoia)" },
    { text: "Team strutturato", detail: "(almeno 3 persone)" },
    { text: "Lavoro stabile", detail: "da gestire già oggi" },
    { text: "Ambizione reale", detail: "di scalare il business" },
  ];

  const weRefuse = [
    { text: "Cerca il preventivo", detail: "più basso" },
    { text: "Vuole risultati", detail: "in 2 settimane" },
    { text: "È una ditta individuale", detail: "senza struttura" },
    { text: "È sull'orlo", detail: "della crisi finanziaria" },
    { text: "Cerca solo", detail: "follower o like" },
  ];

  const processSteps = [
    { icon: FileText, label: "Candidatura", time: "5 min" },
    { icon: Search, label: "Analisi", time: "48h" },
    { icon: CheckCircle, label: "Esito", time: "Sì/No" },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10 text-gold" />
            <h2 className="heading-section text-foreground">
              NON TUTTI POSSONO <span className="text-gold">ENTRARE</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Accettiamo solo aziende che hanno le basi per crescere. 
            Prima di iniziare, facciamo un'analisi approfondita.
          </p>
        </AnimatedSection>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* We Accept Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-background border-2 border-green-500/30 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-400" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">LAVORIAMO CON CHI HA:</h3>
            </div>
            <div className="space-y-4">
              {weAccept.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/40 transition-colors">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">{item.text}</span>
                    <span className="text-muted-foreground ml-1">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* We Refuse Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-background border-2 border-red-500/30 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">NON LAVORIAMO CON CHI:</h3>
            </div>
            <div className="space-y-4">
              {weRefuse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/40 transition-colors">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">{item.text}</span>
                    <span className="text-muted-foreground ml-1">{item.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Selection Process */}
        <AnimatedSection delay={0.2}>
          <div className="p-6 md:p-8 bg-navy-light rounded-2xl mb-8">
            <h3 className="text-lg font-bold text-foreground mb-6 text-center">
              📊 PROCESSO DI SELEZIONE
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 px-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="font-semibold text-foreground">{step.label}</span>
                    <span className="text-sm text-muted-foreground">({step.time})</span>
                  </motion.div>
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                      className="hidden md:block w-12 h-0.5 bg-gold/40"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-8 md:p-10 bg-background border border-border rounded-2xl text-center mb-8"
          >
            <p className="text-xl md:text-2xl text-foreground mb-2">
              <span className="text-gold font-bold">Lavoriamo a percentuale sulle tue vendite.</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Se non sei pronto,{" "}
              <span className="text-foreground font-medium">perdiamo entrambi. Per questo selezioniamo con cura.</span>
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Impact Stat */}
        <AnimatedSection delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-gold/10 border border-gold/30 rounded-xl"
            ref={statRef}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-bold text-gold">{Math.round(acceptanceRate)}%</span>
              <div className="text-left">
                <p className="text-foreground font-medium">delle aziende diventa nostro partner</p>
                <p className="text-sm text-muted-foreground">
                  Non per arroganza. Perché lavoriamo a percentuale: se non sei pronto a crescere, non ha senso per nessuno dei due.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ForWhoSection;
