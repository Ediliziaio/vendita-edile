import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEDifferentiatorSection = () => {
  const notThisItems = [
    "un videocorso da guardare la sera",
    'una consulenza da "prendi appunti"',
    "teoria da applicare forse un giorno",
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive text-sm font-semibold uppercase">
                Non è un corso
              </span>
              <span className="px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive text-sm font-semibold uppercase">
                Non è consulenza
              </span>
            </div>
            <h2 className="heading-section text-foreground mb-4">
              È <span className="text-gold">AFFIANCAMENTO OPERATIVO</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* What it's not */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-background border border-border rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Questo non è:</h3>
            <div className="space-y-4">
              {notThisItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What it is */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-gold/10 border-2 border-gold rounded-2xl"
          >
            <h3 className="text-xl font-bold text-gold mb-6">
              Vendita Edile – Programma 90 Giorni
            </h3>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">
                Entriamo nella tua azienda e lavoriamo{" "}
                <span className="font-bold text-gold">SULLE TUE VENDITE REALI</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VEDifferentiatorSection;
