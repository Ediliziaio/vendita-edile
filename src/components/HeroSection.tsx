import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, AlertTriangle, TrendingUp } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex flex-col justify-center section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Warning Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-sm text-destructive font-medium">
            <AlertTriangle size={16} className="animate-pulse" />
            ATTENZIONE IMPRENDITORE EDILE: €30.000-50.000 persi ogni mese senza un sistema
          </span>
        </motion.div>

        {/* Main headline - More aggressive */}
        <motion.h1 initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }} className="heading-hero text-foreground mb-8">
          STANCO DI
          <br />
          <span className="text-gold">AGENZIE</span> CHE
          <br />
          <span className="text-gold">BRUCIANO</span> SOLDI?
        </motion.h1>

        {/* Concrete numbers - Hormozi style */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="mb-8 space-y-4">
          <p className="heading-sub text-foreground/80 font-normal">
            I nostri clienti aggiungono{" "}
            <span className="text-gold font-bold">€30.000-€50.000</span> di commesse in media al mese.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-lg md:text-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              <TrendingUp size={18} />
              +40% fatturato medio
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              -70% tempo trattative
            </span>
          </div>
        </motion.div>

        {/* Differentiator */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }} className="mb-6">
          <p className="body-large text-muted-foreground max-w-xl">
            Non siamo consulenti da scrivania.{" "}
            <span className="text-foreground font-semibold">
              Abbiamo un'azienda di serramenti vera.
            </span>{" "}
            Ogni strategia funziona{" "}
            <span className="text-gold font-semibold">prima per noi</span>, poi
            per te.
          </p>
        </motion.div>

        {/* Urgency element */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.85
      }} className="mb-8">
          <p className="text-sm text-muted-foreground">
            ⚡ Solo <span className="text-gold font-bold">3 posti</span>{" "}
            disponibili questo mese — lavoriamo con poche aziende
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="flex flex-col sm:flex-row items-start gap-4">
          <Button 
            variant="gold" 
            size="xl" 
            className="glow-gold group"
            onClick={() => {
              const element = document.getElementById("candidati");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Richiedi Valutazione Gratuita</span>
            <motion.span className="inline-block ml-2" animate={{
            x: [0, 5, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }}>
              →
            </motion.span>
          </Button>
          <p className="text-xs text-muted-foreground max-w-[200px]">
            Zero vincoli. Se non funziona, non paghi.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scopri</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;