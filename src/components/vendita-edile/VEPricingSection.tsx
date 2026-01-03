import { motion } from "framer-motion";
import { Clock, Users, MessageSquare, FileText, Zap, Repeat, FileCheck, BadgeCheck } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const VEPricingSection = () => {
  const valueStack = [
    { 
      icon: Users, 
      title: "Affiancamento 1:1 per 90 giorni", 
      description: "Sessioni settimanali personalizzate",
      value: 12000 
    },
    { 
      icon: FileText, 
      title: "Script di Vendita Personalizzati", 
      description: "Creati su misura per il tuo settore",
      value: 4500 
    },
    { 
      icon: MessageSquare, 
      title: "Revisione Trattative Settimanale", 
      description: "Analisi e feedback su ogni trattativa",
      value: 6000 
    },
    { 
      icon: Zap, 
      title: "Supporto WhatsApp Diretto", 
      description: "Risposte rapide quando ne hai bisogno",
      value: 3000 
    },
    { 
      icon: Repeat, 
      title: "Sistema di Follow-up", 
      description: "Mai più clienti persi per mancato contatto",
      value: 2500 
    },
    { 
      icon: FileCheck, 
      title: "Template Preventivi Persuasivi", 
      description: "Modelli testati che convertono",
      value: 2000 
    },
  ];

  const totalValue = valueStack.reduce((sum, item) => sum + item.value, 0);
  const actualPrice = 9000;
  const savings = totalValue - actualPrice;

  const { ref: totalValueRef, formattedValue: totalValueAnimated } = useCountUp({ 
    end: totalValue, 
    duration: 2000,
    prefix: "€"
  });

  const { ref: savingsRef, formattedValue: savingsAnimated } = useCountUp({ 
    end: savings, 
    duration: 2000,
    prefix: "€"
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
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Cosa Ottieni
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-section text-foreground mb-4">
              ECCO COSA RICEVI
              <span className="block text-gold">(E QUANTO VALE)</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ogni elemento ha un valore economico reale, calcolato sui prezzi di mercato.
            </p>
          </div>
        </AnimatedSection>

        {/* Value Stack Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {valueStack.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--gold))" }}
                className="p-5 md:p-6 bg-card border border-border rounded-xl flex items-start gap-4 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg md:text-xl font-bold text-gold">
                    €{item.value.toLocaleString("it-IT")}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Total Value Box */}
        <AnimatedSection delay={0.4}>
          <motion.div
            ref={totalValueRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto p-6 md:p-8 bg-navy-light border-2 border-gold/50 rounded-2xl text-center mb-12 md:mb-16"
          >
            <p className="text-lg text-muted-foreground mb-2 uppercase tracking-wider">Valore Totale</p>
            <p className="text-4xl md:text-5xl font-black text-gold">
              {totalValueAnimated}
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Pricing Card */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 md:p-12 bg-card border-2 border-gold rounded-2xl text-center relative overflow-hidden"
            >
              {/* Savings Badge */}
              <motion.div 
                ref={savingsRef}
                className="absolute top-4 right-4 px-3 py-2 bg-green-500/20 border border-green-500/50 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-bold text-green-400">RISPARMI {savingsAnimated}</span>
              </motion.div>

              <h3 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Il Tuo Investimento
              </h3>

              {/* Crossed out value */}
              <div className="mb-4">
                <span className="text-2xl md:text-3xl text-muted-foreground line-through decoration-2">
                  €{totalValue.toLocaleString("it-IT")}
                </span>
              </div>

              {/* Actual price */}
              <div className="mb-6">
                <span className="text-5xl md:text-7xl font-black text-gold">
                  €{actualPrice.toLocaleString("it-IT")}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Clock className="w-5 h-5" />
                <span className="text-lg">Durata: 90 giorni</span>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="w-5 h-5 text-gold" />
                  <span>Garanzia 100%</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-5 h-5 text-gold" />
                  <span>Solo 3 posti/mese</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="gold"
                onClick={handleCtaClick}
                className="w-full text-lg py-6 glow-gold"
              >
                Richiedi Valutazione Gratuita
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                Nessun impegno. Scopri se fa per te.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12 md:mt-16">
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
