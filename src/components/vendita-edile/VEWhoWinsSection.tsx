import { motion } from "framer-motion";
import { Trophy, Check, X, Target, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const newParadigm = [
  {
    num: "01",
    principle: "POSIZIONAMENTO",
    oldWay: "Facciamo tutto per tutti",
    newWay: "Siamo specialisti per il cliente ideale"
  },
  {
    num: "02",
    principle: "QUALIFICAZIONE",
    oldWay: "Ogni lead è buono",
    newWay: "Solo lead qualificati meritano tempo"
  },
  {
    num: "03",
    principle: "TRATTATIVA",
    oldWay: "Rispondo alle richieste",
    newWay: "Guido il cliente verso la decisione"
  },
  {
    num: "04",
    principle: "PREZZO",
    oldWay: "Faccio lo sconto per chiudere",
    newWay: "Creo valore che giustifica il prezzo"
  },
  {
    num: "05",
    principle: "FOLLOW-UP",
    oldWay: "Aspetto che richiami",
    newWay: "Sistema automatico che converte"
  }
];

const winnerProfile = [
  "Chiude il 30-40% dei preventivi (vs. 10-15% medio)",
  "Mantiene margini del 25-35% (vs. 10-15% medio)",
  "Lavora meno ore con più risultati",
  "Ha clienti che lo CERCANO (non li rincorre)",
  "Può dire NO a lavori non redditizi",
  "Dorme la notte (senza ansia da fatturato)"
];

const comparison = [
  { you: "Rincorri i clienti", winner: "I clienti lo cercano" },
  { you: "Competi sul prezzo", winner: "Vende valore" },
  { you: "Subisci le obiezioni", winner: "Le previene" },
  { you: "Speri che richiami", winner: "Ha un sistema" },
  { you: "Improvvisa", winner: "Ha uno script" }
];

const VEWhoWinsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Trophy className="w-4 h-4" />
              Mentre tu lotti per sopravvivere, loro prosperano. Ecco come.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            CHI VINCE OGGI IN EDILIZIA
            <span className="block text-primary text-2xl md:text-3xl mt-2">(E cosa fanno di diverso da te)</span>
          </h2>
        </AnimatedSection>

        {/* New Paradigm Table */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8 mt-12">
            Il <span className="text-primary">Nuovo Paradigma</span> — 5 Principi
          </h3>
        </AnimatedSection>

        <StaggerContainer className="max-w-5xl mx-auto mb-16">
          {newParadigm.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 mb-4"
              >
                <div className="grid md:grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-3xl font-black text-primary/30">{item.num}</span>
                  </div>
                  
                  {/* Principle */}
                  <div className="md:col-span-2">
                    <span className="font-bold text-foreground">{item.principle}</span>
                  </div>
                  
                  {/* Old Way */}
                  <div className="md:col-span-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground line-through text-sm">"{item.oldWay}"</span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="md:col-span-1 hidden md:flex justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* New Way */}
                  <div className="md:col-span-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">"{item.newWay}"</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Winner Profile Box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-3xl p-8 md:p-12 mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Il Profilo del Vincitore</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {winnerProfile.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            <span className="text-destructive">Tu</span> vs. <span className="text-primary">Chi Vince</span>
          </h3>
          
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl overflow-hidden mb-12">
            {/* Header */}
            <div className="grid grid-cols-2 bg-muted/50">
              <div className="p-4 text-center font-bold text-destructive border-r border-border">
                TU OGGI
              </div>
              <div className="p-4 text-center font-bold text-primary">
                CHI VINCE
              </div>
            </div>
            
            {/* Rows */}
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                <div className="p-4 flex items-center gap-2 border-r border-border">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item.you}</span>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item.winner}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Question */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Cosa sanno <span className="text-primary">loro</span> che tu <span className="text-destructive">non sai</span>?
            </p>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              E qui entriamo in gioco noi.
            </p>
            <p className="text-xl font-bold text-foreground mt-2">
              Perché possiamo insegnartelo. E sai <span className="text-primary">perché</span>?
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEWhoWinsSection;
