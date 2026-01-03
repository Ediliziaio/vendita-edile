import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const VEUncomfortableQuestionSection = () => {
  const whereAre = [
    "i loro preventivi chiusi?",
    "i loro bilanci?",
    "i loro showroom?",
    "i loro incassi?",
  ];

  const whatDoTheyKnow = [
    "dei margini reali?",
    "dei costi di posa?",
    'delle obiezioni "ci penso"?',
    "del follow-up vero?",
  ];

  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">
              FACCIAMOCI UNA DOMANDA{" "}
              <span className="text-gold">SCOMODA</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Where are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Dove sono:</h3>
            <ul className="space-y-3">
              {whereAre.map((item, index) => (
                <li key={index} className="text-lg text-muted-foreground pl-4 border-l-2 border-gold">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What do they know */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-card border border-border rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Cosa ne sanno:</h3>
            <ul className="space-y-3">
              {whatDoTheyKnow.map((item, index) => (
                <li key={index} className="text-lg text-muted-foreground pl-4 border-l-2 border-gold">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground mb-4">
              La risposta è semplice:
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gold">
              non lo vivono.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEUncomfortableQuestionSection;
