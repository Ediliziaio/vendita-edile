import { motion } from "framer-motion";
import { X, AlertCircle, Target } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEProblemSection = () => {
  const falseProblems = [
    { text: "il mercato", excuse: '"È la crisi, è così per tutti"' },
    { text: "la concorrenza", excuse: '"Loro hanno prezzi più bassi"' },
    { text: 'il cliente indeciso', excuse: '"La gente non ha soldi"' },
    { text: 'il passaparola lento', excuse: '"Devo solo aspettare"' },
  ];

  const realProblems = [
    "Fai preventivi senza qualificare il cliente",
    "Non hai uno script: ogni trattativa è diversa",
    "Nessun follow-up strutturato: speri che richiamino",
    "Zero numeri: non sai dove perdi le vendite",
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--destructive)/0.05)_0%,transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        {/* Hook - Pattern Interrupt */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full mb-6"
            >
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-destructive text-sm font-semibold uppercase tracking-wider">
                La bugia che ti racconti
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Continui a dare la colpa a:
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ogni imprenditore che perde vendite si racconta sempre la stessa storia...
            </p>
          </div>
        </AnimatedSection>

        {/* False Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          {falseProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-navy-dark/50 border border-destructive/30 rounded-xl p-5 overflow-hidden group hover:border-destructive/50 transition-colors"
            >
              {/* Strike-through overlay effect */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-0.5 bg-destructive/60 transform -rotate-3" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-2">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-xl text-foreground font-semibold line-through decoration-destructive decoration-2">
                    {problem.text}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground italic ml-9">
                  {problem.excuse}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Reveal - Transition */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-24 h-1 bg-gold mx-auto mb-8"
            />
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              La verità che <span className="text-foreground font-semibold">nessuno ti dice?</span>
            </p>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Il problema <span className="text-destructive">sei TU.</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              O meglio: è il <span className="text-gold font-semibold">MODO</span> in cui vendi.
            </p>
          </div>
        </AnimatedSection>

        {/* Real Problems - The Truth */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-b from-navy-dark/80 to-navy/80 border border-gold/30 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-gold" />
              <h4 className="text-xl font-semibold text-gold">
                Ecco cosa sta DAVVERO succedendo:
              </h4>
            </div>
            
            <div className="space-y-4">
              {realProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-destructive/10 border-l-4 border-destructive rounded-r-lg"
                >
                  <span className="text-destructive font-bold text-lg">→</span>
                  <span className="text-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Final Punch - The Solution Tease */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gold/10 border-2 border-gold/50 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xl md:text-2xl text-foreground mb-3">
                Il tuo prodotto è ottimo. I tuoi preventivi sono competitivi.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gold mb-4">
                Ti manca solo UN SISTEMA per chiudere.
              </p>
              <p className="text-muted-foreground">
                E questo sistema esiste. Funziona. Lo usiamo noi ogni giorno.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEProblemSection;
