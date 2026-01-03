import { motion } from "framer-motion";
import { X } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const VEUncomfortableQuestionSection = () => {
  const whereAre = [
    "I loro preventivi chiusi?",
    "I loro bilanci?",
    "I loro showroom?",
    "I loro incassi VERI?",
  ];

  const whatDoTheyKnow = [
    "Dei margini REALI?",
    "Dei costi di posa?",
    'Delle obiezioni "ci penso"?',
    "Del follow-up che converte?",
  ];

  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-destructive text-sm font-medium mb-6 uppercase tracking-wider">
              Prima di affidarti a qualcuno, fatti questa domanda...
            </span>
            <h2 className="heading-section text-foreground mb-4">
              FACCIAMOCI UNA DOMANDA{" "}
              <span className="text-gold">SCOMODA</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Chi ti sta insegnando a vendere...{" "}
              <span className="text-gold">vende davvero?</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Intro context */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground italic">
              Pensa al tuo ultimo corso. Al tuo ultimo consulente. Al tuo ultimo "guru"...
            </p>
          </div>
        </AnimatedSection>

        {/* Two columns comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Where are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-card border-2 border-destructive/30 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="text-destructive">DOVE SONO:</span>
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {whereAre.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* What do they know */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-card border-2 border-destructive/30 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="text-destructive">COSA NE SANNO:</span>
            </h3>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {whatDoTheyKnow.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>

        {/* Revelation box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/40 rounded-2xl text-center mb-8"
          >
            <p className="text-xl text-muted-foreground mb-4">
              La risposta è una sola:
            </p>
            <p className="text-3xl md:text-4xl font-black text-destructive">
              NON LO VIVONO.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Punch finale */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground mb-2">
              Ti insegnano teoria.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gold">
              Noi ti insegniamo quello che FACCIAMO ogni giorno.
            </p>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground italic">
              Ed è per questo che vendere in edilizia richiede qualcosa di{" "}
              <span className="text-gold font-medium">diverso</span>...
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEUncomfortableQuestionSection;
