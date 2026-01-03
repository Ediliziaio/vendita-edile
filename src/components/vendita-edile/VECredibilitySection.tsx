import { motion } from "framer-motion";
import { Check, Building2, Wallet, Phone, Wrench, FileText, X } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

const VECredibilitySection = () => {
  const credentials = [
    { icon: Building2, label: "Showroom attivo", value: "350", suffix: "mq", detail: "operativi" },
    { icon: Wallet, label: "Fatturato annuo", value: "1.2", suffix: "M€+", detail: "di infissi venduti" },
    { icon: Phone, label: "Trattative/mese", value: "150", suffix: "+", detail: "gestite" },
    { icon: Wrench, label: "Pose/anno", value: "200", suffix: "+", detail: "completate" },
    { icon: FileText, label: "Preventivi", value: "40", suffix: "+/mese", detail: "35% chiusura" },
  ];

  const processPoints = [
    "Testato PRIMA su di noi (e ci ha fatto perdere soldi all'inizio)",
    "Ha prodotto INCASSI REALI nel nostro conto corrente",
    "Corretto dopo DECINE di errori già pagati",
  ];

  const comparison = [
    { them: 'Ti mostrano screenshot', us: 'Ti mostriamo bilanci' },
    { them: 'Parlano di "mindset"', us: 'Parliamo di margini' },
    { them: 'Vendono corsi a €997', us: 'Vendiamo infissi a €15.000' },
    { them: 'Foto con Lamborghini noleggiate', us: 'Foto con i nostri furgoni' },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pattern Interrupt Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium uppercase tracking-wider">
              La differenza tra chi PARLA di vendita e chi la FA
            </span>
          </div>
        </AnimatedSection>

        {/* Main Headline */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
              NON SIAMO FORMATORI DA PALCO.
              <br />
              <span className="text-gold">SIAMO IMPRENDITORI EDILI.</span>
              <br />
              CON UN'AZIENDA VERA.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mentre altri ti insegnano la teoria, noi ogni mattina{" "}
              <span className="text-gold font-semibold">apriamo il nostro showroom</span> e vendiamo infissi.
            </p>
          </div>
        </AnimatedSection>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-6 bg-card border border-border rounded-xl text-center hover:border-gold/50 transition-colors group"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-black text-foreground">
                  <AnimatedNumber value={cred.value} />{cred.suffix}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{cred.detail}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Promise Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gold/10 blur-xl rounded-3xl" />
          <div className="relative p-6 md:p-8 bg-card border-2 border-gold/50 rounded-2xl">
            <h3 className="text-xl font-bold text-gold mb-6 text-center">
              Ogni processo che ti insegniamo:
            </h3>
            <StaggerContainer className="space-y-4 max-w-2xl mx-auto" staggerDelay={0.1}>
              {processPoints.map((point, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-3 bg-gold/5 rounded-lg">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{point}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="mt-8 text-center">
              <p className="text-xl text-foreground font-medium">
                Non ti vendiamo teoria.
                <br />
                <span className="text-gold font-bold text-2xl">Ti vendiamo 7 anni di errori già pagati.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              La differenza è <span className="text-gold">evidente</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Them Column */}
              <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-xl">
                <h4 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> I "GURU"
                </h4>
                <div className="space-y-3">
                  {comparison.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                      <span>{item.them}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Us Column */}
              <div className="p-6 bg-gold/5 border border-gold/30 rounded-xl">
                <h4 className="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> NOI
                </h4>
                <div className="space-y-3">
                  {comparison.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-foreground font-medium">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item.us}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Closing Statement */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center gap-3 text-xl md:text-2xl">
              <span className="text-foreground">👉 Prima funziona per noi.</span>
              <span className="text-foreground">👉 Lo testiamo 100 volte.</span>
              <span className="text-gold font-bold text-2xl md:text-3xl">👉 Solo DOPO lo applichiamo a te.</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 bg-gold/10 border border-gold/40 rounded-full">
            <span className="text-gold font-semibold">
              Chiedici i bilanci. Chiedici i preventivi. Vieni a trovarci in showroom.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Number Component
const AnimatedNumber = ({ value }: { value: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isDecimal = value.includes('.');
  const { ref, count } = useCountUp({ 
    end: numericValue, 
    duration: 2000,
    decimals: isDecimal ? 1 : 0
  });
  
  return <span ref={ref}>{isDecimal ? count.toFixed(1) : Math.round(count)}</span>;
};

export default VECredibilitySection;
