import { motion } from "framer-motion";
import { Clock, Brain, TrendingDown, Users, Target, Euro, AlertTriangle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const lossTimeline = [
  { period: "OGNI MESE", loss: "30.000-50.000", detail: "Vendite perse + margini compressi" },
  { period: "OGNI ANNO", loss: "360.000-600.000", detail: "Fatturato bruciato" },
  { period: "IN 3 ANNI", loss: "1.000.000+", detail: "Patrimonio evaporato" }
];

const hiddenCosts = [
  {
    icon: Clock,
    cost: "TEMPO",
    impact: "40+ ore/mese in trattative che non chiudono",
    detail: "= 480 ore/anno buttate"
  },
  {
    icon: Brain,
    cost: "STRESS",
    impact: "Notti insonni, ansia, salute compromessa",
    detail: "= incalcolabile"
  },
  {
    icon: TrendingDown,
    cost: "MARGINI",
    impact: "-20/30% su ogni preventivo",
    detail: "= lavori per pagare le bollette"
  },
  {
    icon: Target,
    cost: "OPPORTUNITÀ",
    impact: "Clienti premium che vanno ai concorrenti",
    detail: "= crescita bloccata"
  },
  {
    icon: Users,
    cost: "TEAM",
    impact: "Commerciali demotivati, turnover alto",
    detail: "= costi di formazione continui"
  }
];

const VETrueCostSection = () => {
  const { ref: monthlyRef, count: monthlyCount } = useCountUp({ end: 50000, duration: 2000 });
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-destructive/10 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/15 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
              <Euro className="w-4 h-4" />
              Facciamo due conti. Ti faranno male.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            IL VERO COSTO DI CONTINUARE COSÌ
            <span className="block text-destructive text-2xl md:text-3xl mt-2">(E perché non puoi più ignorarlo)</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            Nel 2021-2022 bastava aprire la serranda per vendere.
            <br />
            <span className="text-foreground font-semibold">Nel 2024 il mercato è crollato del 22% (ANCE). Nel 2025 calerà un altro 30%.</span>
          </p>
          <p className="text-base text-destructive font-semibold text-center mb-8">
            Chi non ha un sistema, chiude.
          </p>
        </AnimatedSection>

        {/* Loss Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {lossTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/30 rounded-2xl p-6 text-center"
                >
                  <p className="text-sm font-bold text-destructive mb-2">{item.period}</p>
                  <p className="text-3xl md:text-4xl font-black text-foreground mb-2" ref={index === 0 ? monthlyRef : undefined}>
                    €{index === 0 ? monthlyCount.toLocaleString('it-IT') : item.loss}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Hidden Costs Grid */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            I Costi Che <span className="text-destructive">Non Vedi</span> (Ma Paghi Ogni Giorno)
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {hiddenCosts.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-xl p-5 h-full text-center"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h4 className="font-black text-foreground mb-2">{item.cost}</h4>
                <p className="text-sm text-muted-foreground mb-1">{item.impact}</p>
                <p className="text-xs font-bold text-destructive">{item.detail}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Brutal Comparison Box */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-xl font-bold text-center text-foreground mb-8">
              <AlertTriangle className="w-6 h-6 text-primary inline mr-2" />
              Il Confronto Brutale: Il Valore Della Tua Ora
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Today */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6">
                <h4 className="font-bold text-destructive text-center mb-4">TU OGGI</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>100 ore/mese</li>
                  <li>→ €80.000 fatturato</li>
                  <li>→ €10.000 margine</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-destructive/30">
                  <p className="text-center">
                    <span className="text-3xl font-black text-destructive">€100</span>
                    <span className="text-muted-foreground">/ora LORDO</span>
                  </p>
                </div>
              </div>

              {/* After Program */}
              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
                <h4 className="font-bold text-primary text-center mb-4">DOPO IL PROGRAMMA</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>100 ore/mese</li>
                  <li>→ €120.000 fatturato</li>
                  <li>→ €25.000 margine</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-primary/30">
                  <p className="text-center">
                    <span className="text-3xl font-black text-primary">€250</span>
                    <span className="text-muted-foreground">/ora LORDO</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-black text-primary">
                DIFFERENZA: <span className="text-3xl">+150%</span> sul tuo tempo.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Final Question */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Quanti mesi puoi ancora permetterti di perdere
              <span className="text-destructive"> €30.000-50.000</span>?
            </p>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              La domanda giusta è: chi sta vincendo oggi in edilizia?
            </p>
            <p className="text-xl font-bold text-foreground mt-2">
              E <span className="text-primary">come</span>?
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VETrueCostSection;
