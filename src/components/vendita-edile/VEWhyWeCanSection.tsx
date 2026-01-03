import { motion } from "framer-motion";
import { Building2, Wallet, Phone, Users, Award, Check, X, Shield, MapPin } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const credentials = [
  { icon: Building2, label: "Showroom attivo", value: "350", suffix: "mq", proof: "Apriamo ogni mattina" },
  { icon: Wallet, label: "Fatturato vendite", value: "1.2", suffix: "M+", proof: "Dal nostro conto corrente" },
  { icon: Phone, label: "Trattative/anno", value: "1800", suffix: "+", proof: "Gestite personalmente" },
  { icon: Building2, label: "Pose completate", value: "200", suffix: "+/anno", proof: "Con il nostro team" },
  { icon: Users, label: "Aziende affiancate", value: "47", suffix: "+", proof: "Con risultati documentati" },
  { icon: Award, label: "Tasso di successo", value: "94", suffix: "%", proof: "Clienti soddisfatti" }
];

const promises = [
  {
    title: "L'abbiamo PRIMA testata su di noi",
    subtitle: "(e ci ha fatto perdere soldi all'inizio)"
  },
  {
    title: "Ha prodotto INCASSI REALI",
    subtitle: "(nel nostro conto corrente)"
  },
  {
    title: "È stata CORRETTA dopo decine di errori",
    subtitle: "(che tu non dovrai fare)"
  }
];

const comparison = [
  { guru: "Ti mostrano screenshot", us: "Ti mostriamo bilanci" },
  { guru: "Parlano di mindset", us: "Parliamo di margini" },
  { guru: "Vendono corsi a €997", us: "Vendiamo infissi a €15.000" },
  { guru: "Fanno foto con Lamborghini", us: "Facciamo foto con i nostri furgoni" },
  { guru: "Ti lasciano dopo il corso", us: "Ti affianchiamo per 90 giorni" }
];

const VEWhyWeCanSection = () => {
  const { ref: showroomRef, count: showroomCount } = useCountUp({ end: 350, duration: 2000 });
  const { ref: revenueRef, count: revenueCount } = useCountUp({ end: 1.2, duration: 2000, decimals: 1 });
  const { ref: dealsRef, count: dealsCount } = useCountUp({ end: 1800, duration: 2000 });
  const { ref: installsRef, count: installsCount } = useCountUp({ end: 200, duration: 2000 });
  const { ref: clientsRef, count: clientsCount } = useCountUp({ end: 47, duration: 2000 });
  const { ref: successRef, count: successCount } = useCountUp({ end: 94, duration: 2000 });

  const countRefs = [showroomRef, revenueRef, dealsRef, installsRef, clientsRef, successRef];
  const countValues = [showroomCount, revenueCount, dealsCount, installsCount, clientsCount, successCount];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/10 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Non siamo guru. Siamo imprenditori edili. Come te.
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
            PERCHÉ NOI POSSIAMO INSEGNARTELO
            <span className="block text-primary text-2xl md:text-3xl mt-2">(E gli altri no)</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            La differenza tra chi <span className="text-muted-foreground/70">PARLA</span> di vendita e chi la <span className="text-primary font-semibold">FA</span> ogni giorno.
          </p>
        </AnimatedSection>

        {/* Credentials Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {credentials.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 text-center h-full"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p 
                  className="text-2xl font-black text-primary mb-1"
                  ref={countRefs[index]}
                >
                  {typeof countValues[index] === 'number' && countValues[index] % 1 !== 0 
                    ? countValues[index].toFixed(1) 
                    : Math.floor(countValues[index])}{item.suffix}
                </p>
                <p className="text-xs text-muted-foreground">{item.proof}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Promise Box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-3xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              <Shield className="w-8 h-8 text-primary inline mr-2" />
              La Nostra Promessa
            </h3>
            
            <p className="text-lg text-center text-muted-foreground mb-8">
              Ogni tecnica che ti insegniamo:
            </p>
            
            <div className="space-y-6">
              {promises.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20 text-center">
              <p className="text-lg font-bold text-foreground">
                Non ti vendiamo teoria.
              </p>
              <p className="text-xl font-black text-primary mt-2">
                Ti vendiamo 7 ANNI di errori già pagati.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            <span className="text-destructive">I "GURU"</span> vs. <span className="text-primary">NOI</span>
          </h3>
          
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl overflow-hidden mb-12">
            {/* Header */}
            <div className="grid grid-cols-2 bg-muted/50">
              <div className="p-4 text-center font-bold text-destructive border-r border-border">
                I "GURU"
              </div>
              <div className="p-4 text-center font-bold text-primary">
                NOI
              </div>
            </div>
            
            {/* Rows */}
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                <div className="p-4 flex items-center gap-2 border-r border-border">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item.guru}</span>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item.us}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Authority Box */}
        <AnimatedSection delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl mx-auto bg-card border-2 border-primary/50 rounded-3xl p-8 text-center mb-8"
          >
            <p className="text-lg text-foreground italic mb-4">
              "PRIMA funziona per noi.
              <br />
              POI lo testiamo 100 volte.
              <br />
              <span className="font-bold text-primary">SOLO DOPO</span> lo applichiamo a te."
            </p>
            <p className="text-muted-foreground">— Il nostro metodo</p>
          </motion.div>
        </AnimatedSection>

        {/* Invitation Badge */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium"
            >
              <MapPin className="w-5 h-5" />
              Chiedici i bilanci. Chiedici i preventivi. Vieni a trovarci in showroom.
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection delay={0.7}>
          <div className="text-center">
            <p className="text-xl font-bold text-foreground">
              Ora che sai <span className="text-primary">CHI</span> siamo, ecco <span className="text-primary">COSA</span> ottieni.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEWhyWeCanSection;
