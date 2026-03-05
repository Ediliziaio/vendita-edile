import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const painBlocks = [
  {
    label: "IL PROBLEMA VERO",
    title: "20–30 preventivi al mese → 2–3 chiusure",
    arrow: "Il 90% del tuo lavoro finisce nel cestino del cliente.",
    cost: "€28.000 persi ogni mese (su media trattativa €9.500)",
  },
  {
    label: "IL SINTOMO CHE VEDI",
    title: "«Ti faccio lo sconto, così chiudiamo»",
    arrow: "Il cliente non ha bisogno dello sconto. Ha bisogno di un motivo per comprare adesso.",
    cost: "−15–20% di margine su ogni trattativa chiusa",
  },
  {
    label: "LA BUGIA CHE TI HAI RACCONTATO",
    title: "«I miei commerciali sono bravi, ci manca solo un po' di fortuna»",
    arrow: "Non è fortuna. È assenza di sistema. La fortuna non scala.",
  },
  {
    label: "LA TRAPPOLA NASCOSTA",
    title: "Lavori 10–12 ore al giorno ma non riesci a staccarti dalle trattative",
    arrow: "Sei diventato il tuo stesso collo di bottiglia. Ogni tuo cliente dipende da te.",
  },
];

const VEPainPointsSection = () => {
  const handleCtaClick = () => {
    const element = document.getElementById("costo-reale");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full mb-6"
            >
              <Target className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                Sii brutalmente onesto
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Quanti di questi ti <span className="text-gold">costano ogni mese</span>?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ogni punto che riconosci vale in media <span className="text-foreground font-semibold">€8.000–€12.000/anno</span> di margine perso. Conta.
            </p>
          </div>
        </AnimatedSection>

        {/* Pain Blocks */}
        <div className="flex flex-col gap-5 max-w-3xl mx-auto mb-12">
          {painBlocks.map((block, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
                {/* Gold label */}
                <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-xs font-bold text-gold uppercase tracking-wider mb-4">
                  {block.label}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {block.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span>{block.arrow}</span>
                </p>

                {block.cost && (
                  <div className="flex">
                    <span className="inline-block px-3 py-1 bg-destructive/10 border border-destructive/30 rounded-full text-sm font-semibold text-destructive">
                      Costo reale: {block.cost}
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Conclusione */}
        <AnimatedSection delay={0.4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-2 border-gold/40 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground mb-2">
              Se hai riconosciuto almeno <span className="font-bold">2 punti</span>:
            </p>
            <p className="text-3xl md:text-4xl font-bold text-destructive mb-4">
              Stai perdendo €30.000 – €50.000 al mese.
            </p>
            <p className="text-muted-foreground">
              Non perché sei incapace. Perché nessuno ti ha mai dato un sistema costruito per questo mercato, in questo momento.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.45}>
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
      </div>
    </section>
  );
};

export default VEPainPointsSection;
