import { motion } from "framer-motion";
import { Clock, Users, MessageSquare, FileText, Zap, Repeat, FileCheck, BadgeCheck, BarChart3, Users2, TrendingUp, Calculator } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const valueStack = [
  { 
    icon: Users, 
    title: "Affiancamento 1:1 per 90 giorni", 
    description: "Sessioni settimanali personalizzate sul TUO sistema di vendita (non uno standard)",
    value: 12000 
  },
  { 
    icon: FileText, 
    title: "Script di Vendita Personalizzati", 
    description: "Scritti sulla tua clientela, testati e raffinati in trattativa reale",
    value: 4500 
  },
  { 
    icon: MessageSquare, 
    title: "Revisione Trattative Settimanale", 
    description: "Ascolto di ogni trattativa con feedback specifico entro 24h",
    value: 6000 
  },
  { 
    icon: Zap, 
    title: "Supporto WhatsApp Diretto", 
    description: "Risposta entro 4h su qualsiasi trattativa in corso, 6 giorni su 7",
    value: 3000 
  },
  { 
    icon: Repeat, 
    title: "Sistema di Follow-Up Automatizzato", 
    description: "Sequenza testata per recuperare i «ci penso» e non perdere mai un contatto",
    value: 2500 
  },
  { 
    icon: FileCheck, 
    title: "Template Preventivi che Convertono", 
    description: "Layout e struttura testati su €0,6M di trattative",
    value: 2000 
  },
  { 
    icon: BarChart3, 
    title: "Dashboard KPI Vendite", 
    description: "Misuri tasso di chiusura, GUADAGNO medio, sorgenti lead ogni settimana",
    value: 1800 
  },
  { 
    icon: Users2, 
    title: "Accesso alla Community Vendita Edile®", 
    description: "Network di imprenditori edili che condividono casi reali (non teoria)",
    value: 1200 
  },
];

const totalValue = valueStack.reduce((sum, item) => sum + item.value, 0);
const actualPrice = 9000;
const savings = totalValue - actualPrice;

const VEPricingSection = () => {
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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="investimento" className="section-padding bg-background relative overflow-hidden">
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
              <span className="block text-gold">(E QUANTO VALE SUL MERCATO)</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ogni elemento ha un prezzo reale, calcolato sui prezzi di mercato per servizi equivalenti. <span className="text-foreground font-semibold">Non numeri inventati.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Value Stack — Table-like layout */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Table Header */}
          <AnimatedSection delay={0.15}>
            <div className="hidden md:grid grid-cols-[1fr_auto] gap-4 px-6 py-3 border-b border-gold/30 mb-2">
              <span className="text-sm font-bold text-gold uppercase tracking-wider">Cosa Ricevi</span>
              <span className="text-sm font-bold text-gold uppercase tracking-wider text-right">Valore</span>
            </div>
          </AnimatedSection>

          <StaggerContainer className="space-y-3">
            {valueStack.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 4, borderColor: "hsl(var(--gold))" }}
                  className="p-4 md:p-5 bg-card border border-border rounded-xl flex flex-col md:flex-row md:items-center gap-3 md:gap-4 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 pl-13 md:pl-0">
                    <span className="text-lg md:text-xl font-black text-gold">
                      €{item.value.toLocaleString("it-IT")}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Total Value Row */}
          <AnimatedSection delay={0.4}>
            <motion.div
              ref={totalValueRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 p-5 md:p-6 bg-gold/10 border-2 border-gold/40 rounded-xl flex items-center justify-between"
            >
              <span className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider">Valore Totale</span>
              <span className="text-2xl md:text-4xl font-black text-gold">{totalValueAnimated}</span>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Pricing Card */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 md:p-8 lg:p-12 bg-card border-2 border-gold rounded-2xl text-center relative overflow-hidden"
            >
              {/* Savings Badge */}
              <motion.div 
                ref={savingsRef}
                className="absolute top-2 right-2 md:top-4 md:right-4 px-2 py-1 md:px-3 md:py-2 bg-green-500/20 border border-green-500/50 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs md:text-sm font-bold text-green-400">RISPARMI {savingsAnimated}</span>
              </motion.div>

              <h3 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Il Tuo Investimento Oggi
              </h3>

              {/* Crossed out value */}
              <div className="mb-3">
                <span className="text-2xl md:text-3xl text-muted-foreground line-through decoration-2">
                  €{totalValue.toLocaleString("it-IT")}
                </span>
              </div>

              {/* Actual price */}
              <div className="mb-6">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-gold">
                  €{actualPrice.toLocaleString("it-IT")}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
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

        {/* ROI Rapido */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-3xl mx-auto mt-12 md:mt-16 p-6 md:p-8 bg-card border border-border rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">Calcolo Rapido ROI</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gold/5 rounded-xl">
                <TrendingUp className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-foreground">
                  Se chiudi solo <span className="font-black text-gold">1 trattativa extra</span> al mese grazie al programma 
                  (media: €9.500 × 40% GUADAGNO = <span className="font-black text-gold">€3.800</span>), 
                  l'investimento si ripaga in <span className="font-black text-foreground">meno di 3 mesi</span>.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <TrendingUp className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-foreground">
                  Se chiudi <span className="font-black text-gold">2 trattative extra</span> al mese, 
                  sei già <span className="font-black text-gold">in profitto dal mese 2</span>.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.7}>
          <div className="text-center mt-12 md:mt-16">
            <p className="text-lg text-muted-foreground mb-2">
              Ma quanto ti sta costando NON avere questo sistema?
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-gold">Vediamo i numeri...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEPricingSection;
