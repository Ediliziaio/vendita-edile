import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Clock, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";

// Import client logos
import logoRoma from "@/assets/logo-impresa-edile-roma.png";
import logoVeneto from "@/assets/logo-posatore-veneto.png";
import logoMilano from "@/assets/logo-serramentista-milano.png";
import logoToscana from "@/assets/logo-showroom-toscana.png";

const VEResultsSection = () => {
  const commesse = useCountUp({ end: 50, duration: 2000, prefix: "€", suffix: "K" });
  const fatturato = useCountUp({ end: 50, duration: 2000, prefix: "+", suffix: "%" });
  const tempo = useCountUp({ end: 70, duration: 2000, prefix: "-", suffix: "%" });

  const proofPoints = [
    "Media calcolata su 47 aziende affiancate",
    "Settori: infissi, serramenti, fotovoltaico, ristrutturazioni",
    "Risultati verificabili (su richiesta)",
  ];

  const clientLogos = [
    { src: logoRoma, alt: "Impresa Edile Roma" },
    { src: logoVeneto, alt: "Posatore Veneto" },
    { src: logoMilano, alt: "Serramentista Milano" },
    { src: logoToscana, alt: "Showroom Toscana" },
  ];

  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header con Authority */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Risultati Documentati
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Questo è ciò che <span className="text-gold drop-shadow-[0_0_20px_hsl(var(--gold)/0.4)]">OTTERRAI</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Non promesse vuote. <span className="text-foreground font-medium">Numeri reali</span> dai nostri clienti.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid - Potenziata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Stat 1 - Commesse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div 
              ref={commesse.ref}
              className="p-6 md:p-8 bg-gradient-to-b from-card to-card/80 border-2 border-gold/30 rounded-2xl text-center transition-all duration-300 group-hover:border-gold group-hover:shadow-xl group-hover:shadow-gold/30"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2 drop-shadow-[0_0_15px_hsl(var(--gold)/0.3)]">
                €30-{Math.round(commesse.count)}K
              </div>
              <p className="text-foreground font-semibold text-lg mb-1">Nuove commesse</p>
              <p className="text-sm text-muted-foreground">ogni mese in più</p>
            </div>
          </motion.div>

          {/* Stat 2 - Fatturato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div 
              ref={fatturato.ref}
              className="p-6 md:p-8 bg-gradient-to-b from-card to-card/80 border-2 border-gold/30 rounded-2xl text-center transition-all duration-300 group-hover:border-gold group-hover:shadow-xl group-hover:shadow-gold/30"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2 drop-shadow-[0_0_15px_hsl(var(--gold)/0.3)]">
                +30-{Math.round(fatturato.count)}%
              </div>
              <p className="text-foreground font-semibold text-lg mb-1">Fatturato</p>
              <p className="text-sm text-muted-foreground">aumento garantito</p>
            </div>
          </motion.div>

          {/* Stat 3 - Tempo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div 
              ref={tempo.ref}
              className="p-6 md:p-8 bg-gradient-to-b from-card to-card/80 border-2 border-gold/30 rounded-2xl text-center transition-all duration-300 group-hover:border-gold group-hover:shadow-xl group-hover:shadow-gold/30"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2 drop-shadow-[0_0_15px_hsl(var(--gold)/0.3)]">
                -60/{Math.round(tempo.count)}%
              </div>
              <p className="text-foreground font-semibold text-lg mb-1">Tempo perso</p>
              <p className="text-sm text-muted-foreground">su trattative inutili</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Badge */}
        <AnimatedSection delay={0.4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 border-2 border-gold rounded-2xl shadow-xl shadow-gold/30">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Timeline garantita</p>
                <p className="text-3xl md:text-4xl font-black text-gold drop-shadow-[0_0_10px_hsl(var(--gold)/0.4)]">90 GIORNI</p>
                <p className="text-sm text-foreground">o meno</p>
              </div>
              <ArrowRight className="w-8 h-8 text-gold hidden md:block" />
              <div className="text-center hidden md:block">
                <p className="text-sm text-muted-foreground mb-1">Oppure</p>
                <p className="text-2xl font-bold text-foreground">RIMBORSO</p>
                <p className="text-sm text-gold">100% garantito</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Client Logos Section */}
        <AnimatedSection delay={0.45}>
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">Hanno già lavorato con noi</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Proof Points */}
        <AnimatedSection delay={0.5}>
          <div className="bg-navy-dark/50 border border-border rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col gap-3">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Transition to next section */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-10">
            <p className="text-xl text-muted-foreground">
              Ma aspetta... <span className="text-foreground font-medium">come facciamo a garantirlo?</span>
            </p>
            <p className="text-lg text-gold font-semibold mt-2">
              Perché siamo diversi da tutti gli altri. ↓
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEResultsSection;
