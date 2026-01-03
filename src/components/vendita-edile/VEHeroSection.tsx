import { motion } from "framer-motion";
import { AlertTriangle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const VEHeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 md:pt-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-light opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1)_0%,transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        {/* Warning badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/50 rounded-full">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-destructive text-sm font-semibold uppercase tracking-wider">
              Attenzione Imprenditore Edile
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-hero text-center text-foreground mb-6"
        >
          Ogni mese stai perdendo{" "}
          <span className="text-gradient">€30.000 – €50.000</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="heading-sub text-center text-muted-foreground mb-4"
        >
          perché NON hai un sistema di vendita strutturato
        </motion.p>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-muted-foreground">
            Se operi in{" "}
            <span className="text-foreground font-medium">infissi</span>,{" "}
            <span className="text-foreground font-medium">serramenti</span>,{" "}
            <span className="text-foreground font-medium">fotovoltaico</span>,{" "}
            <span className="text-foreground font-medium">edilizia</span>,{" "}
            <span className="text-foreground font-medium">ristrutturazioni</span>,{" "}
            questa pagina ti riguarda direttamente.
          </p>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-foreground">
            Perché oggi non vince chi lavora di più,
          </p>
          <p className="text-xl md:text-2xl text-gold font-semibold">
            vince chi vende meglio, più velocemente e con margini più alti.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mb-16"
        >
          <Button
            size="lg"
            variant="gold"
            onClick={handleCtaClick}
            className="text-lg px-8 py-6 glow-gold"
          >
            Richiedi Valutazione Strategica
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
