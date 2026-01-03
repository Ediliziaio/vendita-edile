import { motion } from "framer-motion";
import { Trophy, Check, X, Target, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

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

// Tratti integrati da VESalesIsDifferentSection
const losers = [
  { trait: "Subisce la trattativa" },
  { trait: "Accetta ogni cliente" },
  { trait: "Compete sul prezzo" },
  { trait: "Rincorre il cliente" },
  { trait: "Va a sensazione" },
];

const winners = [
  { trait: "GUIDA la trattativa" },
  { trait: "FILTRA il cliente" },
  { trait: "CREA valore percepito" },
  { trait: "DECIDE il ritmo" },
  { trait: "CONTROLLA i numeri" },
];

const VEWhoWinsSection = () => {
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
    <section id="chi-vince" className="py-20 md:py-32 bg-gradient-to-b from-background via-gold/5 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <Trophy className="w-4 h-4" />
              Mentre tu lotti per sopravvivere, loro prosperano. Ecco come.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            CHI VINCE OGGI IN EDILIZIA
            <span className="block text-gold text-2xl md:text-3xl mt-2">(E cosa fanno di diverso da te)</span>
          </h2>
        </AnimatedSection>

        {/* TRUTH BLOCK - Integrato da VESalesIsDifferentSection */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-card border-2 border-gold rounded-2xl text-center"
            >
              <div className="space-y-3 mb-6">
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 La vendita edile <span className="text-destructive font-bold">NON</span> è marketing.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 <span className="text-destructive font-bold">NON</span> è motivazione.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  👉 <span className="text-destructive font-bold">NON</span> è "mentalità positiva".
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-2xl md:text-3xl font-black text-gold">
                  È PSICOLOGIA. È PROCESSO. È CONTROLLO.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Comparison Chi Perde vs Chi Vince - Integrato da VESalesIsDifferentSection */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Losers column */}
          <AnimatedSection delay={0.2}>
            <div className="p-6 md:p-8 bg-card border border-destructive/30 rounded-2xl h-full">
              <h3 className="text-xl font-bold text-destructive mb-6 text-center flex items-center justify-center gap-2">
                <X className="w-6 h-6" />
                CHI PERDE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {losers.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-3 p-4 bg-destructive/5 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="text-lg text-muted-foreground">
                        {item.trait}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Winners column */}
          <AnimatedSection delay={0.3}>
            <div className="p-6 md:p-8 bg-card border-2 border-gold rounded-2xl h-full">
              <h3 className="text-xl font-bold text-gold mb-6 text-center flex items-center justify-center gap-2">
                <Check className="w-6 h-6" />
                CHI VINCE
              </h3>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {winners.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 bg-gold/10 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-lg text-foreground font-medium">
                        {item.trait}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* New Paradigm Table */}
        <AnimatedSection delay={0.35}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Il <span className="text-gold">Nuovo Paradigma</span> — 5 Principi
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
                    <span className="text-3xl font-black text-gold/30">{item.num}</span>
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
                    <ArrowRight className="w-5 h-5 text-gold" />
                  </div>
                  
                  {/* New Way */}
                  <div className="md:col-span-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">"{item.newWay}"</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Winner Profile Box */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-gold" />
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
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.45}>
          <div className="text-center mb-8">
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="text-lg px-8 py-6 glow-gold"
            >
              Diventa Un Vincitore
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Transition - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">
              Cosa sanno <span className="text-gold font-semibold">loro</span> che tu <span className="text-destructive font-semibold">non sai</span>?
            </p>
            <p className="text-xl font-bold text-foreground">
              Noi lo sappiamo perché lo <span className="text-gold">FACCIAMO</span> ogni giorno...
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEWhoWinsSection;
