import { motion } from "framer-motion";
import { Shield, Check, Clock, TrendingUp, Zap, Users, MessageSquare, FileText, AlertTriangle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const VEPricingSection = () => {
  const guaranteePoints = [
    "non migliori le vendite",
    "non aumenti il controllo",
    "non ottieni risultati concreti",
  ];

  const includes = [
    { icon: Users, text: "Affiancamento 1:1" },
    { icon: FileText, text: "Script personalizzati" },
    { icon: MessageSquare, text: "Revisione trattative" },
    { icon: Zap, text: "Supporto WhatsApp diretto" },
  ];

  const comparison = [
    { label: "Costo del programma", value: "€9.000", color: "text-foreground" },
    { label: "1 solo contratto recuperato", value: "€15.000+", color: "text-gold" },
    { label: "ROI dopo 90 giorni", value: "5-10x", color: "text-gold" },
  ];

  const { ref: roiRef, formattedValue: roiValue } = useCountUp({ 
    end: 45000, 
    duration: 2500,
    prefix: "+€"
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
    <section id="investimento" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pre-header frame */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Investimento
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Non è un costo.{" "}
            <span className="text-gold font-semibold">È un investimento con ROI calcolabile.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground">
              QUANTO COSTA?
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              La domanda sbagliata è "Quanto costa".
              <br />
              La domanda giusta è: <span className="text-gold font-semibold">"Quanto mi costa NON farlo?"</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Pricing card - potenziata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 md:p-10 bg-card border-2 border-gold rounded-2xl text-center relative overflow-hidden"
          >
            {/* Badge ROI */}
            <motion.div 
              ref={roiRef}
              className="absolute top-4 right-4 px-3 py-1 bg-gold/20 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-bold text-gold">ROI: {roiValue}</span>
            </motion.div>

            <h3 className="text-lg font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Investimento
            </h3>
            <div className="mb-4">
              <span className="text-5xl md:text-6xl font-black text-gold">€9.000</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <Clock className="w-5 h-5" />
              <span>Durata: 90 giorni</span>
            </div>

            {/* Cosa include */}
            <div className="text-left mb-6 p-4 bg-background rounded-xl">
              <p className="text-sm font-semibold text-foreground mb-3 uppercase">Include:</p>
              <div className="space-y-2">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="w-full text-lg py-6 glow-gold"
            >
              Richiedi Valutazione
            </Button>
          </motion.div>

          {/* Guarantee card - potenziata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="p-8 md:p-10 bg-navy-light border-2 border-gold/50 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold">GARANZIA 100%</h3>
                <p className="text-sm text-muted-foreground">ZERO RISCHIO PER TE</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Se entro 90 giorni:
            </p>

            <ul className="space-y-3 mb-6">
              {guaranteePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive text-sm font-bold">✕</span>
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <motion.div 
              className="p-5 bg-gold/10 border border-gold/30 rounded-xl mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xl font-black text-gold text-center mb-2">
                👉 Ti rimborsiamo. TUTTO.
              </p>
              <p className="text-sm text-foreground text-center">
                Non "parte". Non "dipende". <span className="font-bold">TUTTO.</span>
              </p>
            </motion.div>

            <p className="text-sm text-muted-foreground text-center italic">
              Lo mettiamo per iscritto prima di iniziare.
            </p>
          </motion.div>
        </div>

        {/* Confronto visivo */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-xl mx-auto mb-12">
            <h3 className="text-center text-lg font-semibold text-foreground mb-6">
              Cosa ottieni davvero:
            </h3>
            <div className="space-y-3">
              {comparison.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className={`text-xl font-bold ${item.color}`}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Transition - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-2">
              Ma non accettiamo tutti.
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-gold">Ecco chi cerchiamo e come candidarsi...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEPricingSection;
