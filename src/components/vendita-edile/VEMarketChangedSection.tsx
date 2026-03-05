import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/button";

const stats = [
  {
    end: 22,
    prefix: "−",
    suffix: "%",
    label: "Domanda edile 2024 vs 2022",
    source: "Fonte: ANCE 2024",
  },
  {
    end: 15000,
    prefix: "+",
    suffix: "",
    label: "Nuovi competitor entrati col Superbonus",
    source: "Fonte: Registro Imprese",
  },
  {
    end: 0,
    prefix: "",
    suffix: "%",
    label: "Delle aziende ha aggiornato il sistema di vendita dal 2021",
    source: "Stima interna su 47 aziende affiancate",
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[number]; index: number }) => {
  const { ref, formattedValue } = useCountUp({
    end: stat.end,
    duration: 2000,
    prefix: stat.prefix,
    suffix: stat.suffix,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-card/50 border border-gold/30 rounded-xl p-6 text-center"
    >
      <div ref={ref} className="text-4xl md:text-5xl font-black text-gold mb-3">
        {formattedValue}
      </div>
      <p className="text-foreground font-medium mb-3">{stat.label}</p>
      <span className="px-3 py-1 bg-gold/10 text-gold/80 text-xs font-semibold rounded-full">
        {stat.source}
      </span>
    </motion.div>
  );
};

const VEMarketChangedSection = () => {
  const handleCtaClick = () => {
    const el = document.getElementById("chi-vince");
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.05)_0%,transparent_50%)]" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
              Il mercato è cambiato.{" "}
              <span className="text-gold">Le tue tecniche di vendita no.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tre numeri che spiegano perché stai lavorando di più e guadagnando di meno:
            </p>
          </div>
        </AnimatedSection>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Il problema vero */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-b from-navy-dark/80 to-navy/80 border border-gold/30 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Il problema vero non è il mercato.
            </h3>
            <div className="space-y-3 text-lg text-muted-foreground mb-6">
              <p>Il Superbonus è finito <span className="text-foreground font-semibold">per tutti</span>.</p>
              <p>I competitor sono aumentati <span className="text-foreground font-semibold">per tutti</span>.</p>
              <p>Lo sconto in fattura è eliminato <span className="text-foreground font-semibold">per tutti</span>.</p>
            </div>
            <p className="text-lg text-foreground font-semibold mb-2">
              Ma alcune aziende stanno crescendo lo stesso.
            </p>
            <p className="text-xl text-gold font-bold">
              La differenza non è il prodotto. Non è il prezzo.{" "}
              <span className="underline decoration-gold/50 underline-offset-4">È il sistema con cui vendi.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Button
              variant="goldOutline"
              size="lg"
              onClick={handleCtaClick}
              className="text-lg px-8 py-6"
            >
              Guarda cosa fanno le aziende che crescono oggi
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEMarketChangedSection;
