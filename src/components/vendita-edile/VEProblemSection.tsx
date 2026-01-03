import { motion } from "framer-motion";
import { X } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEProblemSection = () => {
  const falseProblems = [
    "il mercato",
    "la concorrenza",
    'il cliente che "non decide"',
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-6">
              Il problema <span className="text-gold">NON</span> è:
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          {falseProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 bg-destructive/10 border border-destructive/30 rounded-xl"
            >
              <X className="w-5 h-5 text-destructive flex-shrink-0" />
              <span className="text-lg text-foreground line-through decoration-destructive/50">
                {problem}
              </span>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-2xl md:text-3xl text-foreground mb-2">
              👉 Il problema è che stai vendendo
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gold">
              SENZA UN SISTEMA.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEProblemSection;
