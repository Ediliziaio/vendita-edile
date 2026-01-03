import { motion } from "framer-motion";
import { AlertTriangle, ArrowDown, Check, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-windows.jpg";

const VEHeroSection = () => {
  const aziende = useCountUp({ end: 47, duration: 2000 });
  const fatturato = useCountUp({ end: 2.3, duration: 2000, decimals: 1 });
  const rinnovi = useCountUp({ end: 87, duration: 2000 });

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

  const painPoints = [
    "Fai 20+ preventivi al mese ma ne chiudi 2-3",
    "I clienti ti chiedono SEMPRE \"l'ultimo sconto\"",
    "Hai commerciali che \"vanno a sensazione\"",
    "Trattative infinite che muoiono nel \"ci penso\"",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32 overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Showroom infissi e serramenti" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.2)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Urgency Pre-header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 md:top-24 left-0 right-0 z-20"
      >
        <div className="bg-gold/20 backdrop-blur-sm border-y border-gold/40 py-2">
          <motion.p 
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-sm md:text-base text-gold font-medium"
          >
            ⚠️ GENNAIO 2026: Solo <span className="font-bold">3 posti disponibili</span> per nuovi affiancamenti
          </motion.p>
        </div>
      </motion.div>

      <div className="container-narrow relative z-10 mt-8">
        {/* Pattern Interrupt Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-destructive/30 border-2 border-destructive rounded-lg shadow-lg shadow-destructive/30"
          >
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-destructive text-sm md:text-base font-bold uppercase tracking-wide">
              🛑 FERMATI. Leggi questo prima di perdere un altro cliente.
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline - Competitor Focus */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-foreground mb-4 leading-tight"
        >
          In questo momento, mentre leggi,
          <br />
          <span className="text-gold drop-shadow-[0_0_30px_hsl(var(--gold)/0.5)]">un tuo concorrente sta chiudendo</span>
          <br />
          il cliente che <span className="underline decoration-destructive decoration-4">TU hai perso ieri.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          E lo sta facendo con lo <span className="text-foreground font-semibold">STESSO prodotto</span>, 
          allo <span className="text-foreground font-semibold">STESSO prezzo</span>... 
          ma con un <span className="text-gold font-bold">SISTEMA diverso.</span>
        </motion.p>

        {/* Market Context Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy-dark/90 border-2 border-destructive/50 rounded-xl p-5 md:p-6 mb-6 max-w-3xl mx-auto"
        >
          <p className="text-sm font-bold text-destructive uppercase tracking-wider text-center mb-3">
            2024-2025: I NUMERI DEL CROLLO (Fonte: ANCE/ISTAT)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
            <div>
              <p className="text-2xl font-black text-destructive">-22%</p>
              <p className="text-muted-foreground text-xs">Investimenti recupero</p>
            </div>
            <div>
              <p className="text-2xl font-black text-destructive">-30%</p>
              <p className="text-muted-foreground text-xs">Manut. prevista 2025</p>
            </div>
            <div>
              <p className="text-2xl font-black text-destructive">-5,3%</p>
              <p className="text-muted-foreground text-xs">Settore costruzioni</p>
            </div>
            <div>
              <p className="text-2xl font-black text-orange-500">69,9%</p>
              <p className="text-muted-foreground text-xs">Difficoltà assunzioni</p>
            </div>
          </div>
          <p className="text-center text-foreground mt-4 text-sm">
            Chi vendeva "a sensazione" oggi è in crisi. <span className="text-gold font-semibold">Chi ha un SISTEMA sta dominando.</span>
          </p>
        </motion.div>

        {/* Verità Scomoda Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 border-2 border-gold/60 rounded-xl p-6 md:p-8 mb-10 max-w-3xl mx-auto shadow-2xl shadow-gold/20"
        >
          <motion.p 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gold mb-3 drop-shadow-[0_0_20px_hsl(var(--gold)/0.4)]"
          >
            €30.000 – €50.000 al mese.
          </motion.p>
          <p className="text-lg md:text-xl text-center text-foreground mb-2">
            Questa è la cifra <span className="font-bold">ESATTA</span> che stai lasciando sul tavolo.
          </p>
          <p className="text-base text-center text-muted-foreground">
            Non è un'ipotesi. È la media dei nostri <span className="text-gold font-semibold">47 clienti</span> PRIMA di lavorare con noi.
          </p>
        </motion.div>

        {/* Target Identification with Checkboxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl text-center text-foreground mb-6">
            Se vendi <span className="text-gold font-semibold">infissi, serramenti, fotovoltaico o ristrutturazioni</span>
            <br />
            e almeno <span className="font-bold">UNA</span> di queste ti suona familiare...
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'hsl(var(--gold))' }}
                className="flex items-start gap-3 bg-navy-light/60 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 cursor-default"
              >
                <div className="w-5 h-5 rounded border-2 border-gold bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold" />
                </div>
                <span className="text-foreground text-sm md:text-base">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center text-lg md:text-xl text-gold font-semibold mt-6"
          >
            ...questo messaggio potrebbe valere <span className="text-2xl font-bold drop-shadow-[0_0_10px_hsl(var(--gold)/0.5)]">€100.000+</span> per te quest'anno.
          </motion.p>
        </motion.div>

        {/* USP Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-navy-dark/90 backdrop-blur-sm border border-gold/40 rounded-xl p-6 md:p-8 mb-10 max-w-3xl mx-auto text-center shadow-xl"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            L'<span className="text-gold font-bold">UNICO</span> programma di affiancamento per l'edilizia
            <br className="hidden md:block" />{" "}
            creato da chi <span className="font-semibold">VENDE infissi ogni giorno.</span>
          </p>
          <p className="text-muted-foreground mt-3">
            Non da formatori. Non da consulenti.
            <br />
            <span className="text-foreground font-medium">Da imprenditori edili con un'azienda VERA.</span>
          </p>
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-foreground px-4 py-2 bg-gold/10 rounded-lg border border-gold/30" 
            ref={aziende.ref}
          >
            <Users className="w-5 h-5 text-gold" />
            <span className="text-2xl md:text-3xl font-bold text-gold drop-shadow-[0_0_10px_hsl(var(--gold)/0.4)]">{Math.round(aziende.count)}+</span>
            <span className="text-sm text-muted-foreground">aziende affiancate</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-foreground px-4 py-2 bg-gold/10 rounded-lg border border-gold/30" 
            ref={fatturato.ref}
          >
            <TrendingUp className="w-5 h-5 text-gold" />
            <span className="text-2xl md:text-3xl font-bold text-gold drop-shadow-[0_0_10px_hsl(var(--gold)/0.4)]">+€{fatturato.formattedValue}M</span>
            <span className="text-sm text-muted-foreground">fatturato generato</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-foreground px-4 py-2 bg-gold/10 rounded-lg border border-gold/30" 
            ref={rinnovi.ref}
          >
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-2xl md:text-3xl font-bold text-gold drop-shadow-[0_0_10px_hsl(var(--gold)/0.4)]">{Math.round(rinnovi.count)}%</span>
            <span className="text-sm text-muted-foreground">tasso rinnovi</span>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="text-lg md:text-xl px-10 py-7 font-bold shadow-2xl shadow-gold/40 hover:shadow-gold/60 transition-all duration-300"
            >
              Scopri se Qualifichi (2 minuti)
            </Button>
          </motion.div>
          
          <div className="flex flex-col items-center gap-2 mt-4">
            <p className="text-sm text-muted-foreground">
              📞 Solo <span className="text-gold font-semibold">3 posti</span> per gennaio • Risposta entro 48h
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Shield className="w-4 h-4" />
              <span>Garanzia 100% Soddisfatto o Rimborsato</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm uppercase tracking-wider">Scopri di più</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VEHeroSection;
