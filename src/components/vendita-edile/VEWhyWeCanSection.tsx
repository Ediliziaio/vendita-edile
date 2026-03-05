import { motion } from "framer-motion";
import { Shield, Check, X, Calendar, TrendingUp, Users, DollarSign, Building2, Filter } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const credentials = [
  { icon: Calendar, value: "8", suffix: " anni", label: "con Marketing Edile", proof: "Acquisizione clienti solo a provvigione" },
  { icon: TrendingUp, value: "400", suffix: "K", label: "venduti primi 3 mesi", proof: "I-Profili — senza sconto in fattura" },
  { icon: Users, value: "47", suffix: "+", label: "aziende affiancate", proof: "Con risultati documentati" },
  { icon: DollarSign, value: "0.8", suffix: "M+", label: "fatturato generato", proof: "Per i clienti del programma" },
  { icon: Building2, value: "2", suffix: "", label: "aziende attive", proof: "Marketing Edile + I-Profili" },
  { icon: Filter, value: "14", suffix: "%", label: "candidature accettate", proof: "Selezioniamo solo chi può ottenere risultati", prefix: "<" },
];

const comparison = [
  { them: "Videocorsi da guardare da solo", us: "Affiancamento 1:1 operativo in 90 giorni" },
  { them: "Consulenti che non hanno mai venduto un infisso", us: "Imprenditori edili con cantieri aperti e agenzia attiva oggi" },
  { them: "Script motivazionali sul mindset", us: "Chiamate reali con I TUOI clienti" },
  { them: "Teoria da applicare «prima o poi»", us: "Implementazione nel TUO sistema, non in uno standard" },
  { them: "Ti lasciano soli dopo il pagamento", us: "90 giorni di supporto continuo — WhatsApp diretto incluso" },
  { them: "Guadagnano anche se tu non chiudi niente", us: "Noi guadagniamo solo quando i nostri clienti guadagnano" },
];

const VEWhyWeCanSection = () => {
  const counters = [
    useCountUp({ end: 8, duration: 2000 }),
    useCountUp({ end: 400, duration: 2000 }),
    useCountUp({ end: 47, duration: 2000 }),
    useCountUp({ end: 0.8, duration: 2000, decimals: 1 }),
    useCountUp({ end: 2, duration: 2000 }),
    useCountUp({ end: 14, duration: 2000 }),
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Non siamo formatori. Siamo imprenditori edili attivi.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-center mb-4 text-foreground">
            PERCHÉ <span className="text-primary">NOI</span> POSSIAMO INSEGNARTELO
            <span className="block text-primary text-xl md:text-2xl mt-2">— e gli altri no</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Non siamo formatori. Siamo imprenditori edili attivi — con un'agenzia, un'azienda di serramenti, e 8 anni di dati sul campo.
          </p>
        </AnimatedSection>

        {/* 6 Stat Cards */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-16">
          {credentials.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 md:p-5 text-center h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p
                  className="text-2xl md:text-3xl font-black text-primary mb-1"
                  ref={counters[index].ref}
                >
                  {item.prefix || ""}
                  {typeof counters[index].count === "number" && counters[index].count % 1 !== 0
                    ? counters[index].count.toFixed(1)
                    : Math.floor(counters[index].count)}
                  {item.suffix}
                </p>
                <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.proof}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Provvigione Block */}
        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-3xl p-8 md:p-12 mb-16 shadow-xl shadow-primary/10"
          >
            <h3 className="text-xl md:text-2xl font-black text-center text-foreground mb-6">
              Il modello a provvigione non è un dettaglio.
              <span className="block text-primary mt-1">È la prova.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Quando lavori solo a provvigione per 8 anni, impari una cosa che i formatori non imparano mai: <span className="text-foreground font-semibold">se il cliente non chiude, non mangi.</span> Ogni lead generato, ogni funnel costruito, ogni campagna ottimizzata — tutto misurato sull'unico numero che conta: le commesse firmate.
            </p>
            <p className="text-primary font-bold text-center mt-6 text-lg">
              Questo è il DNA di Vendita Edile®.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
            <span className="text-destructive">Gli altri ti vendono</span> vs. <span className="text-primary">Noi facciamo</span>
          </h3>

          <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 bg-muted/50">
              <div className="p-4 text-center font-bold text-destructive border-r border-border">
                ✗ Gli altri ti vendono
              </div>
              <div className="p-4 text-center font-bold text-primary">
                ✓ Noi facciamo
              </div>
            </div>

            {comparison.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 border-t border-border hover:bg-muted/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-3 md:p-4 flex items-center gap-3 border-r border-border">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground text-xs md:text-sm">{item.them}</span>
                </div>
                <div className="p-3 md:p-4 flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-xs md:text-sm font-medium">{item.us}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEWhyWeCanSection;
