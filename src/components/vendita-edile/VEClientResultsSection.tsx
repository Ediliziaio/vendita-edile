import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, LayoutDashboard, Zap, HeartPulse } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEClientResultsSection = () => {
  const results = [
    { icon: TrendingUp, value: "+30–50%", label: "fatturato" },
    { icon: DollarSign, value: "+20–40%", label: "valore medio contratto" },
    { icon: Clock, value: "–60/70%", label: "tempo in trattative inutili" },
    { icon: LayoutDashboard, value: "✓", label: "pipeline sotto controllo" },
    { icon: Zap, value: "✓", label: "incassi più rapidi" },
    { icon: HeartPulse, value: "✓", label: "meno stress" },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Risultati
            </span>
            <h2 className="heading-section text-foreground mb-4">
              I RISULTATI MEDI DEI{" "}
              <span className="text-gold">CLIENTI</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold))" }}
              className="p-6 bg-background border border-border rounded-xl text-center transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gold mb-2">
                {result.value}
              </div>
              <p className="text-sm text-muted-foreground">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VEClientResultsSection;
