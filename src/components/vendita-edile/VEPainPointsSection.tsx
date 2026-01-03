import { motion } from "framer-motion";
import { CircleX, Clock, TrendingDown, Users, Calculator, Frown, AlertTriangle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const VEPainPointsSection = () => {
  const painPoints = [
    {
      icon: Calculator,
      title: "20-30 preventivi → 2-3 chiusure",
      description: "Il 90% del tuo lavoro finisce nel cestino. Ore sprecate per clienti che non comprano.",
      cost: "€15.000/mese persi",
    },
    {
      icon: TrendingDown,
      title: '"Mi fa l\'ultimo sconto?"',
      description: "Ogni trattativa diventa una guerra di nervi. Il margine si assottiglia, tu ti logori.",
      cost: "-30% sui margini",
    },
    {
      icon: Clock,
      title: 'Trattative infinite nel "ci penso"',
      description: "Settimane di follow-up inutili. Il cliente sparisce. Tu riparti da zero.",
      cost: "40+ ore/mese buttate",
    },
    {
      icon: Users,
      title: 'Commerciali che vanno "a sensazione"',
      description: "Nessuno script. Nessuna struttura. Ogni vendita è un'improvvisazione rischiosa.",
      cost: "Risultati imprevedibili",
    },
    {
      icon: Frown,
      title: "Zero controllo sui numeri",
      description: "Non sai dove perdi le vendite. Non sai quali commerciali funzionano. Voli alla cieca.",
      cost: "Decisioni sbagliate",
    },
    {
      icon: AlertTriangle,
      title: "Lavori tanto, guadagni poco",
      description: "12+ ore al giorno e il conto in banca non riflette lo sforzo. Qualcosa non torna.",
      cost: "Burnout garantito",
    },
  ];

  const handleCtaClick = () => {
    const element = document.getElementById("costo-reale");
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header con Pattern Interrupt */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-6"
            >
              <CircleX className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Sii brutalmente onesto
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quanti di questi ti <span className="text-gold">fanno male</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ogni casella che riconosci ti sta costando migliaia di euro.
              <br />
              <span className="text-foreground font-medium">Contale. Poi fai i conti.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--gold))" }}
              className="group relative bg-card border border-border rounded-xl p-5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <point.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
                
                {/* Cost Badge - mantieni rosso per la perdita */}
                <div className="flex justify-end">
                  <span className="inline-block px-3 py-1 bg-destructive/10 border border-destructive/30 rounded-full text-xs font-semibold text-destructive">
                    {point.cost}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Math - Totale Impatto */}
        <AnimatedSection delay={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-2 border-gold/40 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground mb-2">
              Se hai riconosciuto almeno <span className="font-bold">3 punti</span>:
            </p>
            <p className="text-3xl md:text-4xl font-bold text-destructive mb-4">
              Stai perdendo €30.000 – €50.000 ogni mese.
            </p>
            <p className="text-muted-foreground">
              Non perché sei incapace. Perché il mercato è cambiato e nessuno ti ha dato il nuovo manuale.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.35}>
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="text-lg px-8 py-6 glow-gold"
            >
              Calcola il Tuo Costo Reale
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Transition Hook - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground mb-2">
              Se hai riconosciuto anche solo 2 punti, fai questo calcolo...
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-gold">Quanto ti sta costando tutto questo?</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEPainPointsSection;
