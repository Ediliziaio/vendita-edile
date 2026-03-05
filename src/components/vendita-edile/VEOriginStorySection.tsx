import { motion } from "framer-motion";
import { BookOpen, Shield, Check, X, Calendar, TrendingUp, Users, DollarSign, Building2, Filter } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import floProfili from "@/assets/flo-profili.jpg";

const credentials = [
  { icon: Calendar, value: "8", suffix: " anni", label: "nel settore edile", proof: "Marketing, vendita e gestione cantieri" },
  { icon: DollarSign, value: "60", suffix: "M+", label: "fatturato generato", proof: "Per i partner di Marketing Edile", prefix: "€" },
  { icon: TrendingUp, value: "2", suffix: "MLN+", label: "venduto dalla nostra azienda", proof: "I-Profili — senza sconto in fattura", prefix: "+" },
  { icon: Users, value: "47", suffix: "+", label: "aziende edili seguite", proof: "In tutta Italia con risultati documentati" },
  { icon: Building2, value: "2", suffix: "", label: "showroom attivi", proof: "Aziende operative oggi sul campo" },
  { icon: Filter, value: "20", suffix: "%", label: "candidature accettate", proof: "Selezioniamo solo chi può ottenere risultati", prefix: "<" },
];

const comparison = [
  { them: "Videocorsi da guardare da solo", us: "Affiancamento 1:1 operativo in 90 giorni" },
  { them: "Consulenti che non hanno mai venduto un infisso", us: "Imprenditori edili con cantieri aperti e agenzia attiva oggi" },
  { them: "Script motivazionali sul mindset", us: "Chiamate reali con I TUOI clienti" },
  { them: "Teoria da applicare «prima o poi»", us: "Implementazione nel TUO sistema, non in uno standard" },
  { them: "Ti lasciano soli dopo il pagamento", us: "90 giorni di supporto continuo — WhatsApp diretto incluso" },
  { them: "Guadagnano anche se tu non chiudi niente", us: "Noi guadagniamo solo quando i nostri clienti guadagnano" },
];

const VEOriginStorySection = () => {
  const counters = [
    useCountUp({ end: 8, duration: 2000 }),
    useCountUp({ end: 60, duration: 2000 }),
    useCountUp({ end: 2, duration: 2000 }),
    useCountUp({ end: 47, duration: 2000 }),
    useCountUp({ end: 2, duration: 2000 }),
    useCountUp({ end: 20, duration: 2000 }),
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              La nostra storia
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card/60 backdrop-blur-sm border border-secondary/15 rounded-2xl p-6 md:p-10">
            {/* 2-column layout: photo + text */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Photo column */}
              <div className="flex flex-col items-center md:items-start shrink-0 md:w-[35%]">
                <div className="w-48 h-60 md:w-full md:h-auto md:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-lg shadow-secondary/10">
                  <img
                    src={floProfili}
                    alt="Flo — Fondatore di Vendita Edile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <p className="text-lg font-black text-secondary">Flo</p>
                  <p className="text-sm text-muted-foreground">Fondatore, Vendita Edile®</p>
                </div>
              </div>

              {/* Text column */}
              <div className="md:w-[65%]">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-6">
                  Perché ho creato <span className="text-secondary">Vendita Edile®</span> — e cosa mi ha insegnato partire da zero
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>Mi chiamo <strong className="text-secondary">Flo</strong>. Non sono nato serramentista.</p>
                  <p>
                    Sono cresciuto nel marketing e nella vendita. Da <strong className="text-secondary">8 anni</strong> gestisco Marketing Edile — portiamo clienti qualificati alle aziende edili, <strong className="text-secondary">solo a provvigione</strong>. Guadagniamo solo quando i nostri clienti guadagnano.
                  </p>
                  <p>
                    Questo modello mi ha insegnato una cosa brutale: <strong className="text-foreground">non basta portare i lead. Se l'azienda non sa venderli, non prendi un euro.</strong>
                  </p>
                  <p>
                    Dopo anni a guardare aziende edili perdere in trattativa i contatti che gli portavamo, ho capito che il problema non era il marketing. Era la vendita.
                  </p>
                  <p>
                    Quindi a fine 2023 ho aperto una mia azienda di serramenti — da zero, senza esperienza tecnica. Per testare sul campo quello che avevo visto funzionare in 8 anni con i nostri partner.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight box */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <p className="text-3xl md:text-4xl font-black text-secondary">€400.000</p>
                <p className="text-foreground font-semibold">nei primi 3 mesi</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <p className="text-3xl md:text-4xl font-black text-secondary">€2M+</p>
                <p className="text-foreground font-semibold">in meno di 2 anni</p>
              </div>
              <p className="text-secondary font-bold text-sm mt-4 italic">
                Senza sconto in fattura. Solo con un sistema di vendita costruito sul cliente.
              </p>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base mt-8">
              <p>
                Poi è arrivata l'altra faccia della medaglia — magazzino, errori, margini che sparivano tra un cantiere e l'altro. Fatturavamo. Ma quello che rimaneva non era proporzionale.
              </p>
              <p>
                Abbiamo capito che <strong className="text-foreground">puoi essere bravo a vendere e comunque perdere soldi</strong>, se non controlli il margine su ogni singola commessa.
              </p>
              <p>
                Da lì abbiamo costruito il metodo: vendita ad alto margine, qualificazione del cliente, trattativa strutturata. Testato prima sulla nostra azienda, poi con i partner di Marketing Edile — aziende reali, mercati diversi, risultati documentati.
              </p>
            </div>

            {/* Closing with gold accent */}
            <div className="mt-8 pt-6 border-t border-secondary/30">
              <p className="text-xl font-black text-secondary mb-3">
                Il risultato è Vendita Edile®.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                Non un corso. Un sistema costruito sul campo.
              </p>
              <p className="text-secondary font-bold text-lg">
                Oggi non portiamo solo clienti. <strong>Portiamo clienti e il sistema per chiuderli.</strong>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* === CREDIBILITÀ === */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
                <Shield className="w-4 h-4" />
                Non siamo formatori. Siamo imprenditori edili attivi.
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-center mb-4 text-foreground">
              Perché <span className="text-secondary">NOI</span> possiamo insegnartelo
              <span className="block text-secondary text-xl md:text-2xl mt-2">— e gli altri no</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              La differenza tra chi <strong className="text-foreground">PARLA</strong> di vendita e chi la <strong className="text-secondary">FA</strong> ogni giorno.
            </p>
          </AnimatedSection>

          {/* 6 Stat Cards */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-16">
            {credentials.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 md:p-5 text-center h-full hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p
                    className="text-2xl md:text-3xl font-black text-secondary mb-1"
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
              className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-3xl p-8 md:p-12 mb-16 shadow-xl shadow-secondary/10"
            >
              <h3 className="text-xl md:text-2xl font-black text-center text-foreground mb-6">
                Il modello a provvigione non è un dettaglio.
                <span className="block text-secondary mt-1">È la prova.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                Quando lavori solo a provvigione per 8 anni, impari una cosa che i formatori non imparano mai: <span className="text-foreground font-semibold">se il cliente non chiude, non mangi.</span> Ogni lead generato, ogni funnel costruito, ogni campagna ottimizzata — tutto misurato sull'unico numero che conta: le commesse firmate.
              </p>
              <p className="text-secondary font-bold text-center mt-6 text-lg">
                Questo è il DNA di Vendita Edile®.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Comparison Table */}
          <AnimatedSection delay={0.4}>
            <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
              <span className="text-destructive">Gli altri ti vendono</span> vs. <span className="text-secondary">Noi facciamo</span>
            </h3>

            <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-2 bg-muted/50">
                <div className="p-4 text-center font-bold text-destructive border-r border-border">
                  ✗ Gli altri ti vendono
                </div>
                <div className="p-4 text-center font-bold text-secondary">
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
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-xs md:text-sm font-medium">{item.us}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VEOriginStorySection;
