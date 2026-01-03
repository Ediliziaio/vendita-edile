import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

// Configura qui l'URL del tuo form esterno (Typeform, ecc.)
const EXTERNAL_FORM_URL = "https://example.typeform.com/to/your-form";

const VEFinalCTASection = () => {
  const handleCtaClick = () => {
    window.open(EXTERNAL_FORM_URL, "_blank");
  };

  return (
    <section id="candidati" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/15 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider">
            Conclusione
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Vendita Edile non è formazione.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="heading-sub text-gold mb-8">
            È un sistema di vendita costruito sul campo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Se vuoi capire se è applicabile alla tua azienda, candidati ora.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="gold"
              onClick={handleCtaClick}
              className="text-xl px-12 py-8 glow-gold"
            >
              <span>Richiedi la Valutazione Strategica</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Sistema testato
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              90 giorni
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Garanzia totale
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEFinalCTASection;
