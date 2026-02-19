import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, Calendar, Building2, Users, Euro, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const timelineData = [
  {
    year: "2016-2019",
    title: "MERCATO STABILE",
    description: "Crescita organica +2-3% anno. Margini sani. Concorrenza gestibile.",
    impact: "+2-3%/anno",
    source: "ISTAT",
    phase: "stable",
    icon: Building2
  },
  {
    year: "Maggio 2020",
    title: "NASCE IL SUPERBONUS 110%",
    description: "Decreto Rilancio 34/2020. Inizia il boom della domanda.",
    impact: "Decreto Rilancio",
    source: "Governo",
    phase: "boom",
    icon: FileText
  },
  {
    year: "2021",
    title: "PICCO DOMANDA",
    description: "+25% investimenti costruzioni. Guerra materiali. Prezzi alle stelle.",
    impact: "+25%",
    source: "ANCE",
    phase: "boom",
    icon: TrendingUp
  },
  {
    year: "2022",
    title: "ESPLOSIONE COMPETITOR",
    description: "+15.000 nuove imprese edili registrate. Concorrenza triplicata.",
    impact: "+15.000 imprese",
    source: "Registro Imprese",
    phase: "peak",
    icon: Users
  },
  {
    year: "Febbraio 2023",
    title: "STOP CESSIONE CREDITI",
    description: "DL 11/2023 - Fine sconto in fattura per nuovi lavori.",
    impact: "DL 11/2023",
    source: "Governo",
    phase: "decline",
    icon: AlertTriangle
  },
  {
    year: "2024",
    title: "FINE ERA BONUS",
    description: "-22% investimenti recupero. -5,3% settore costruzioni.",
    impact: "-22%",
    source: "ANCE/ISTAT",
    phase: "crisis",
    icon: TrendingDown
  },
  {
    year: "2025",
    title: "MERCATO NUOVO",
    description: "Bonus ridotti al 50%/36%. Clienti devono pagare.",
    impact: "Bonus ridotti",
    source: "ANCE",
    phase: "crisis",
    icon: TrendingDown
  },
  {
    year: "2026",
    title: "CONTRAZIONE CONTINUA",
    description: "Previsione: -30% manutenzione. Solo chi ha sistemi sopravvive.",
    impact: "-30% previsto",
    source: "ANCE",
    phase: "crisis",
    icon: TrendingDown
  }
];

const statsBoxes = [
  {
    title: "SUPERBONUS TOTALE",
    subtitle: "Dati ENEA Agosto 2024",
    stats: [
      { value: "496.315", label: "edifici interessati" },
      { value: "€119,5 MLD", label: "investimenti totali" },
      { value: "€123 MLD", label: "oneri per lo Stato" },
      { value: "133.902", label: "condomini (27%)" }
    ]
  },
  {
    title: "IL CROLLO 2024",
    subtitle: "Dati ANCE/ISTAT",
    stats: [
      { value: "-22%", label: "investimenti recupero" },
      { value: "-10,8%", label: "produzione edile vs 2023" },
      { value: "-5,2%", label: "permessi di costruire" },
      { value: "69,9%", label: "assunzioni difficili" }
    ]
  },
  {
    title: "PREVISIONI 2025-2026",
    subtitle: "Dati ANCE Gennaio 2025",
    stats: [
      { value: "-30%", label: "manutenzione 2026" },
      { value: "-2,6%", label: "finanziamenti bancari" },
      { value: "50%", label: "bonus prima casa" },
      { value: "36%", label: "bonus seconda casa" }
    ]
  }
];

const phaseColors = {
  stable: "border-green-500/50 bg-green-500/10",
  boom: "border-gold/50 bg-gold/10",
  peak: "border-orange-500/50 bg-orange-500/10",
  decline: "border-orange-600/50 bg-orange-600/10",
  crisis: "border-destructive/50 bg-destructive/10"
};

const phaseTextColors = {
  stable: "text-green-500",
  boom: "text-gold",
  peak: "text-orange-500",
  decline: "text-orange-600",
  crisis: "text-destructive"
};

const VEMarketTimelineSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.08)_0%,transparent_50%)]" />
      
      <div className="container-narrow relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                I numeri non mentono. Il mercato sì.
              </span>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-3">
            DAL BOOM AL CROLLO:
            <span className="text-gold"> 10 ANNI DI EDILIZIA ITALIANA</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Dati ufficiali <span className="text-foreground font-semibold">ISTAT, ANCE, ENEA</span> — Aggiornati 2024
          </p>
        </AnimatedSection>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {statsBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-navy-dark/80 border-2 rounded-2xl p-4 md:p-6 ${
                index === 0 ? "border-gold/50" : index === 1 ? "border-destructive/50" : "border-orange-500/50"
              }`}
            >
              <div className="text-center mb-4">
                <h3 className={`text-lg font-bold ${
                  index === 0 ? "text-gold" : index === 1 ? "text-destructive" : "text-orange-500"
                }`}>
                  {box.title}
                </h3>
                <p className="text-xs text-muted-foreground">{box.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {box.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <p className="text-lg md:text-xl lg:text-2xl font-black text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative py-24">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-gold via-50% to-destructive rounded-full transform -translate-y-1/2 z-0" />
            
            {/* Timeline points */}
            <div className="flex justify-between relative">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col items-center w-28 relative z-10 ${index % 2 === 0 ? 'flex-col-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`text-center mb-6 bg-background/80 backdrop-blur-sm rounded-lg p-2 ${index % 2 === 0 ? 'mt-6 mb-0' : ''}`}>
                    <p className={`text-xs font-bold ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`}>
                      {item.year}
                    </p>
                    <p className="text-sm font-bold text-foreground mt-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 text-xs font-semibold rounded ${phaseColors[item.phase as keyof typeof phaseColors]} ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`}>
                      {item.impact}
                    </span>
                  </div>
                  
                  {/* Point */}
                  <div className="relative">
                    {item.phase === "crisis" && (
                      <div className="absolute inset-0 w-10 h-10 rounded-full bg-destructive/40 animate-ping" />
                    )}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`relative w-10 h-10 rounded-full border-4 flex items-center justify-center bg-background z-20 ${phaseColors[item.phase as keyof typeof phaseColors]}`}
                    >
                      <item.icon className={`w-4 h-4 ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden mb-16">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-gold to-destructive rounded-full" />
            
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Point */}
                  <div className="absolute -left-5">
                    {item.phase === "crisis" && (
                      <div className="absolute inset-0 w-8 h-8 rounded-full bg-destructive/40 animate-ping" />
                    )}
                    <div className={`relative w-8 h-8 rounded-full border-4 flex items-center justify-center bg-background z-10 ${phaseColors[item.phase as keyof typeof phaseColors]}`}>
                      <item.icon className={`w-3 h-3 ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-4 p-4 rounded-xl border ${phaseColors[item.phase as keyof typeof phaseColors]}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <p className={`text-xs font-bold ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`}>
                        {item.year}
                      </p>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded ${phaseColors[item.phase as keyof typeof phaseColors]} ${phaseTextColors[item.phase as keyof typeof phaseTextColors]}`}>
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    <p className="text-xs text-muted-foreground/70 mt-2">Fonte: {item.source}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition - collegamento alla sezione successiva */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-2">
              E tu? Quanti di questi problemi stai vivendo OGGI?
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-gold">Fai questo test...</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Sources */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground/70">
              <span className="font-semibold">Fonti:</span> ISTAT (Produzione Costruzioni 2024), ANCE (Osservatorio Congiunturale Gennaio 2025), 
              ENEA (Report Superbonus 110% Agosto 2024), Camera di Commercio (Registro Imprese)
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEMarketTimelineSection;
