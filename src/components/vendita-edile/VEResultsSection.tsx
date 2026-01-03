import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

const StatCard = ({ value, label, sublabel }: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold))" }}
      className="p-6 md:p-8 bg-card border border-border rounded-2xl text-center transition-colors duration-300"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gold mb-2">
        {value}
      </div>
      <p className="text-foreground font-medium mb-1">{label}</p>
      {sublabel && (
        <p className="text-sm text-muted-foreground">{sublabel}</p>
      )}
    </motion.div>
  );
};

const VEResultsSection = () => {
  const stats = [
    { value: "€30–50K", label: "Nuove commesse", sublabel: "al mese" },
    { value: "+30–50%", label: "Fatturato", sublabel: "in più" },
    { value: "–60/70%", label: "Tempo perso", sublabel: "in meno" },
  ];

  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              I nostri clienti, in media
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Aggiungono <span className="text-gold">RISULTATI REALI</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-card border-2 border-gold rounded-xl">
              <p className="text-xl md:text-2xl font-bold text-foreground">
                Entro <span className="text-gold">90 giorni</span>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEResultsSection;
