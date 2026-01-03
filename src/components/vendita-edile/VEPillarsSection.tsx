import { motion } from "framer-motion";
import { Target, MessageSquare, FileText, PhoneCall, BarChart3, Check, Shield, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VEPillarsSection = () => {
  const pillars = [
    {
      icon: Target,
      number: "01",
      title: "STRUTTURA DI VENDITA",
      subtitle: "Stop improvvisazione. Creiamo un processo.",
      description: "Costruiamo:",
      points: [
        "fasi chiare (lead → appuntamento → preventivo → firma)",
        "regole di trattativa",
        "criteri di qualificazione",
        "ruoli e responsabilità",
      ],
      result: "Da caos totale → a sistema replicabile",
      resultDetail: "Ogni vendita segue un percorso. Ogni trattativa è sotto controllo.",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "SCRIPT DI TRATTATIVA",
      subtitle: "Sai sempre cosa dire, quando dirlo, come rispondere.",
      description: "Ti diamo:",
      points: [
        "aperture che catturano l'attenzione",
        "risposte alle obiezioni più comuni",
        "tecniche di chiusura testate",
        "frasi che eliminano il 'ci penso'",
      ],
      result: "Da obiezioni infinite → a risposte pronte",
      resultDetail: "Il cliente sente sicurezza. E smette di trattare.",
    },
    {
      icon: FileText,
      number: "03",
      title: "PREVENTIVO CHE VENDE",
      subtitle: "Non è un PDF. È uno strumento di persuasione.",
      description: "Lavoriamo su:",
      points: [
        "struttura e ancoraggi psicologici",
        "comparazioni che guidano la scelta",
        "leva psicologica e urgenza",
        "presentazione del valore percepito",
      ],
      result: "Da -20% margine → a +15% valore percepito",
      resultDetail: "Meno sconti. Più firme. Margini più alti.",
    },
    {
      icon: PhoneCall,
      number: "04",
      title: "FOLLOW-UP STRATEGICO",
      subtitle: "Il 70% delle vendite si perde qui. Noi lo recuperiamo.",
      description: "Costruiamo:",
      points: [
        "sequenze precise e temporizzate",
        "controllo totale delle trattative aperte",
        'script anti-"le faccio sapere"',
        "automazioni dove possibile",
      ],
      result: "Da trattative perse → a conversioni recuperate",
      resultDetail: "Chi guida il follow-up, guida la vendita.",
    },
    {
      icon: BarChart3,
      number: "05",
      title: "NUMERI E CONTROLLO",
      subtitle: "Finalmente sai esattamente dove stai guadagnando e perdendo.",
      description: "Monitoriamo:",
      points: [
        "quante trattative hai aperte",
        "tasso di chiusura reale",
        "valore medio ordine",
        "tempi di incasso",
        "colli di bottiglia nel processo",
      ],
      result: "Da 'sensazioni' → a decisioni sui dati",
      resultDetail: "Niente più intuito. Solo numeri che parlano.",
    },
  ];

  const finalDeliverables = [
    "Sistema di vendita documentato",
    "Script testati sulla TUA clientela",
    "Preventivi che convertono di più",
    "Follow-up che non perde trattative",
    "Dashboard con i tuoi numeri VERI",
  ];

  return (
    <section id="metodo" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Pre-header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Il metodo testato su 47+ aziende edili
            </span>
            <h2 className="heading-section text-foreground mb-4">
              ECCO COSA COSTRUIAMO IN{" "}
              <span className="text-gold">90 GIORNI</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              (E perché funziona anche per te)
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Non uno schema standard. Non un metodo copiato.
            </p>
            <p className="text-xl text-gold font-bold">
              IL TUO SISTEMA. Sulla TUA azienda.
            </p>
          </div>
        </AnimatedSection>

        {/* Guarantee badge */}
        <AnimatedSection delay={0.1}>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 p-4 bg-gold/10 border-2 border-gold rounded-xl">
              <Shield className="w-8 h-8 text-gold flex-shrink-0" />
              <p className="text-lg font-bold text-foreground">
                Garanzia 100%: Se dopo 90 giorni non vedi risultati,{" "}
                <span className="text-gold">ti rimborsiamo.</span>
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Pillars accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={`pillar-${index}`}
                className="bg-card border-2 border-border hover:border-gold/50 transition-colors rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4 md:gap-6 w-full">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-gold font-bold text-sm">
                          PILASTRO {pillar.number}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                    {/* Result badge visible on desktop */}
                    <div className="hidden md:block flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium">
                        {pillar.result}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6">
                  <div className="pl-0 md:pl-20 pt-4 border-t border-border">
                    <p className="text-lg text-foreground font-medium mb-4">{pillar.subtitle}</p>
                    {pillar.description && (
                      <p className="text-muted-foreground mb-3">{pillar.description}</p>
                    )}
                    <ul className="space-y-2 mb-6">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/30 rounded-xl">
                      <p className="text-gold font-bold text-lg mb-1">
                        👉 {pillar.result}
                      </p>
                      <p className="text-foreground">
                        {pillar.resultDetail}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Final deliverables box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-8 bg-card border-2 border-gold rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Dopo 90 giorni avrai:
            </h3>
            <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.1}>
              {finalDeliverables.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-lg text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="pt-6 border-t border-border text-center">
              <p className="text-xl text-muted-foreground mb-2">E soprattutto:</p>
              <p className="text-2xl font-bold text-gold">
                Un metodo che funziona anche SENZA di noi.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Internal CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="#candidatura"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-bold text-lg rounded-xl hover:bg-gold/90 transition-colors"
            >
              Vuoi vedere se il programma fa per te?
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="text-muted-foreground mt-3 text-sm">
              Rispondi in 2 minuti
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEPillarsSection;
