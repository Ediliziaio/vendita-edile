import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Users, DollarSign } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VECostOfInactionSection = () => {
  const costs = [
    { icon: DollarSign, text: "€30.000–50.000 persi" },
    { icon: Clock, text: "decine di ore buttate" },
    { icon: Users, text: "clienti premium che vanno altrove" },
    { icon: TrendingDown, text: "margini compressi" },
  ];

  return (
    <section className="section-padding bg-destructive/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/40 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-destructive text-sm font-semibold uppercase tracking-wider">
                Attenzione
              </span>
            </div>
            <h2 className="heading-section text-foreground mb-4">
              IL COSTO DI{" "}
              <span className="text-destructive">NON AGIRE</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ogni mese senza sistema:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-card border border-destructive/30 rounded-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <cost.icon className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-lg text-foreground">{cost.text}</span>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-gold">
              👉 Il vero rischio è restare fermi.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VECostOfInactionSection;
