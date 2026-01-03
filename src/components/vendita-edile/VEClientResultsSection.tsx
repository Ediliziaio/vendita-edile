import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, LayoutDashboard, Zap, HeartPulse, BadgeCheck, MessageCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const VEClientResultsSection = () => {
  const results = [
    { 
      icon: TrendingUp, 
      value: "+30–50%", 
      label: "fatturato",
      description: "Senza aumentare i costi fissi"
    },
    { 
      icon: DollarSign, 
      value: "+20–40%", 
      label: "valore medio contratto",
      description: "Vendendo VALORE, non prezzo"
    },
    { 
      icon: Clock, 
      value: "–60/70%", 
      label: "tempo perso",
      description: "Più tempo per chi paga davvero"
    },
    { 
      icon: LayoutDashboard, 
      value: "✓", 
      label: "pipeline sotto controllo",
      description: "Sai ESATTAMENTE dove sei ogni giorno"
    },
    { 
      icon: Zap, 
      value: "✓", 
      label: "incassi più rapidi",
      description: "Meno rincorse, più liquidità"
    },
    { 
      icon: HeartPulse, 
      value: "✓", 
      label: "meno stress",
      description: "Vendi con metodo, non con ansia"
    },
  ];

  const { ref: daysRef, formattedValue: daysValue } = useCountUp({ 
    end: 90, 
    duration: 2000 
  });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Risultati Verificabili
            </span>
          </div>
        </AnimatedSection>

        {/* Pre-header provocatorio */}
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Questi non sono numeri inventati.{" "}
            <span className="text-gold font-semibold">Sono estratti dai bilanci.</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground">
              I RISULTATI MEDI DEI{" "}
              <span className="text-gold">NOSTRI CLIENTI</span>
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12" staggerDelay={0.1}>
          {results.map((result, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "hsl(var(--gold))" }}
                className="p-6 bg-background border border-border rounded-xl text-center transition-all duration-300 h-full hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gold mb-2">
                  {result.value}
                </div>
                <p className="text-base font-semibold text-foreground mb-2">{result.label}</p>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Box enfatizzato - tempo */}
        <AnimatedSection delay={0.4}>
          <motion.div 
            ref={daysRef}
            className="max-w-2xl mx-auto p-6 md:p-8 bg-gold/10 border-2 border-gold rounded-2xl text-center mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Questi risultati arrivano nei primi{" "}
              <span className="text-gold">{daysValue} giorni</span>.
            </p>
            <p className="text-lg text-muted-foreground">
              Non in 12 mesi. Non "prima o poi".{" "}
              <span className="text-gold font-semibold">Nei primi 90 giorni.</span>
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Disclaimer credibilità */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 p-5 bg-background border border-border rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Richiedi le referenze.</p>
                <p className="text-sm text-muted-foreground">Ti mettiamo in contatto con chi ha già fatto il percorso.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
              <BadgeCheck className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-gold">Verificabile</span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEClientResultsSection;
