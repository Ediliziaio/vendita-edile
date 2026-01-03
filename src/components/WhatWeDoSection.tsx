import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { TrendingUp, Clock, Euro, AlertTriangle, Target, Zap } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

interface MetricCardProps {
  icon: React.ElementType;
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  color: string;
}

const MetricCard = ({ icon: Icon, value, prefix = "", suffix = "", label, sublabel, color }: MetricCardProps) => {
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
  const { ref, formattedValue } = useCountUp({
    end: numericValue,
    duration: 2000,
    prefix,
    suffix,
    decimals: 0,
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative p-6 bg-card border border-border rounded-2xl group transition-all duration-300 hover:border-gold/50 overflow-hidden"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
          {formattedValue}
        </div>
        
        <div className="text-lg font-semibold text-foreground mb-1">
          {label}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {sublabel}
        </div>
      </div>
    </motion.div>
  );
};

const WhatWeDoSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "40",
      prefix: "+",
      suffix: "%",
      label: "Fatturato medio",
      sublabel: "rispetto a prima di lavorare con noi",
      color: "from-gold to-amber-600",
    },
    {
      icon: Clock,
      value: "70",
      prefix: "-",
      suffix: "%",
      label: "Tempo perso",
      sublabel: "in trattative inutili",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Euro,
      value: "50",
      prefix: "€",
      suffix: "K",
      label: "Commesse mensili aggiuntive",
      sublabel: "in media per i nostri clienti",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      value: "5",
      suffix: " ore",
      label: "Risparmiate a settimana",
      sublabel: "in attività commerciali",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const losses = [
    "€30.000-50.000 in commesse che vanno ai concorrenti",
    "20+ ore in preventivi che non chiuderanno mai",
    "Clienti premium che scelgono chi si presenta meglio",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8">
            Il nostro approccio
          </span>
          <h2 className="heading-section text-foreground mb-6">
            COSA FACCIAMO <span className="text-gold">(DAVVERO)</span>
          </h2>
        </AnimatedSection>

        {/* Agitation Box - Kennedy Style */}
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 bg-navy-dark rounded-2xl border border-border mb-12 overflow-hidden"
          >
            {/* Pulse effect */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"
            />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground italic leading-relaxed">
                "Lavori <span className="text-red-400 font-semibold">12 ore al giorno</span>. 
                Fai preventivi che <span className="text-red-400 font-semibold">non chiudono</span>. 
                E quando chiudono... sono clienti che ti <span className="text-red-400 font-semibold">logorano per 500€ di sconto</span>."
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Transition Text */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-2">Basta.</p>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Non facciamo "marketing". Costruiamo un{" "}
              <span className="text-gold font-bold">SISTEMA DI ACQUISIZIONE</span>{" "}
              che fa il lavoro sporco al posto tuo:
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Metrics Grid - Hormozi Style */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.15}>
          {metrics.map((metric, index) => (
            <StaggerItem key={index}>
              <MetricCard {...metric} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Cost of Inaction Box - Kennedy Style */}
        <AnimatedSection delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-8 md:p-10 rounded-2xl border-2 border-red-500/50 bg-red-950/20 overflow-hidden"
          >
            {/* Warning pattern */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-orange-500" />
            
            <div className="relative z-10 pl-4">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center"
                >
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-red-400">
                  IL COSTO DI NON AGIRE
                </h3>
              </div>
              
              <p className="text-lg text-foreground mb-6">
                Ogni mese che aspetti, stai <span className="text-red-400 font-semibold">perdendo</span>:
              </p>
              
              <ul className="space-y-4">
                {losses.map((loss, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 text-lg text-muted-foreground"
                  >
                    <span className="text-red-400 font-bold mt-0.5">•</span>
                    <span>{loss}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Final Quote Box */}
        <AnimatedSection delay={0.7}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 p-8 md:p-10 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent rounded-2xl border border-gold/30 text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center"
              >
                <Zap className="w-7 h-7 text-gold" />
              </motion.div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Tu continui a fare il tuo mestiere.{" "}
              <span className="text-gold font-bold">
                Noi portiamo clienti pronti a firmare.
              </span>
            </p>
            
            <p className="mt-4 text-muted-foreground">
              Il marketing deve <span className="text-gold font-semibold">semplificare</span> il lavoro commerciale, non complicarlo.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
