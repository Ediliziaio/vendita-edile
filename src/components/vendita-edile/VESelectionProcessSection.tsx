import { motion } from "framer-motion";
import { FileEdit, Search, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VESelectionProcessSection = () => {
  const steps = [
    {
      icon: FileEdit,
      step: "1️⃣",
      title: "Candidatura",
      time: "5 minuti",
    },
    {
      icon: Search,
      step: "2️⃣",
      title: "Analisi",
      time: "48h",
    },
    {
      icon: CheckCircle,
      step: "3️⃣",
      title: "Esito",
      time: "SÌ / NO",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              PROCESSO DI{" "}
              <span className="text-gold">SELEZIONE</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-3">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <span className="text-2xl mb-1">{step.step}</span>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-gold font-medium">{step.time}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Accettiamo{" "}
              <span className="text-gold font-bold">meno del 20%</span>{" "}
              delle aziende.
            </p>
            <p className="text-muted-foreground">
              Perché lavoriamo sui risultati.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VESelectionProcessSection;
