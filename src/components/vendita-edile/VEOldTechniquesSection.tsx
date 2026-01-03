import { motion } from "framer-motion";
import { X, AlertTriangle, TrendingDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const obsoleteTechniques = [
  {
    technique: "Fai più preventivi, chiudi di più",
    whyFails: "Il cliente oggi è informato. Vuole VALORE, non quantità."
  },
  {
    technique: "Abbassa il prezzo per vincere",
    whyFails: "Corsa al ribasso = margini zero = chiusura azienda"
  },
  {
    technique: "Sii aggressivo nella chiusura",
    whyFails: "Il cliente 2024 fugge dalla pressione. Compra da chi lo GUIDA."
  },
  {
    technique: "Il prodotto si vende da solo",
    whyFails: "15 concorrenti vendono lo stesso prodotto. Vince chi vende MEGLIO."
  },
  {
    technique: "Aspetta che il cliente richiami",
    whyFails: "Chi aspetta, perde. Il 70% delle vendite va a chi fa follow-up GIUSTO."
  },
  {
    technique: "I social portano clienti",
    whyFails: "I social portano CURIOSI. Servono venditori che chiudono CONTRATTI."
  }
];

const falsePromises = [
  {
    promise: '"Avrai un consulente dedicato"',
    reality: "Poi scopri che non ha mai chiuso una trattativa edile",
  },
  {
    promise: '"Ti seguiremo passo dopo passo"',
    reality: "Poi risponde quando può e sparisce quando serve",
  },
  {
    promise: '"Costruiremo una strategia su misura"',
    reality: "Poi scopri che non conosce obiezioni, posa, margini",
  },
  {
    promise: '"Aumenteremo il fatturato"',
    reality: "Poi nessuno misura nulla",
  },
];

const VEOldTechniquesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-destructive/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-destructive/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              Il mercato è cambiato. Tu stai ancora usando armi spuntate.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            PERCHÉ LE VECCHIE TECNICHE DI VENDITA
            <span className="block text-destructive">NON FUNZIONANO PIÙ IN EDILIZIA</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Quello che funzionava 10 anni fa oggi ti fa <span className="text-destructive font-semibold">PERDERE clienti</span>.
          </p>
        </AnimatedSection>

        {/* Obsolete Techniques Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {obsoleteTechniques.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-2xl p-6 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 line-through opacity-70">
                      "{item.technique}"
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.whyFails}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* False Promises Section - Merged */}
        <AnimatedSection delay={0.25}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              E PER ANNI TI HANNO RACCONTATO{" "}
              <span className="text-destructive">QUESTE FRASI</span>
            </h3>
            <div className="space-y-4">
              {falsePromises.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="p-5 md:p-6 bg-card/80 border border-destructive/20 rounded-xl"
                >
                  <p className="text-lg md:text-xl font-semibold text-foreground mb-2 line-through decoration-destructive/50 decoration-2">
                    {item.promise}
                  </p>
                  <p className="text-muted-foreground">
                    {item.reality}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Central Shock Box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border-2 border-destructive/30 rounded-3xl p-8 md:p-12 mb-12"
          >
            <div className="text-center">
              <TrendingDown className="w-12 h-12 text-destructive mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground mb-4">
                Se stai ancora usando queste tecniche, <span className="font-bold">non è colpa tua</span>.
              </p>
              <p className="text-muted-foreground mb-6">
                È colpa di chi te le ha insegnate senza dirti che il mondo è cambiato.
              </p>
              <p className="text-xl md:text-2xl font-bold text-destructive">
                👉 Chi non ha mai chiuso una commessa edile NON può insegnarti a vendere.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Shock Statistics */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Il <span className="text-destructive">78%</span> degli imprenditori edili usa ancora tecniche degli anni '90.
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Il <span className="text-destructive">78%</span> degli imprenditori edili ha margini sotto il 15%.
              </p>
              <p className="text-2xl font-black text-primary">
                Coincidenza? No.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Ma il problema vero non sono le tecniche sbagliate...
            </p>
            <p className="text-xl font-bold text-foreground mt-2">
              È il <span className="text-destructive">COSTO</span> di continuare così.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEOldTechniquesSection;
