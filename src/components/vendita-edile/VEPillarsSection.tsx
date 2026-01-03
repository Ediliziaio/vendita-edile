import { motion } from "framer-motion";
import { Target, MessageSquare, FileText, PhoneCall, BarChart3 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
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
      subtitle: "Stop improvvisazione.",
      description: "Costruiamo:",
      points: [
        "fasi chiare (lead → appuntamento → preventivo → firma)",
        "regole di trattativa",
        "criteri di qualificazione",
        "ruoli e responsabilità",
      ],
      result: "Ogni vendita segue un percorso. Ogni trattativa è sotto controllo.",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "SCRIPT DI TRATTATIVA",
      subtitle: "Sai sempre:",
      description: "",
      points: [
        "cosa dire",
        "quando dirlo",
        "come rispondere a prezzo, confronti, obiezioni",
      ],
      result: "Il cliente sente sicurezza. E smette di trattare.",
    },
    {
      icon: FileText,
      number: "03",
      title: "PREVENTIVO CHE VENDE",
      subtitle: "Il preventivo non è un PDF. È uno strumento di persuasione.",
      description: "Lavoriamo su:",
      points: [
        "struttura e ancoraggi",
        "comparazioni",
        "leva psicologica e urgenza",
        "valore percepito",
      ],
      result: "Meno sconti. Più firme. Margini più alti.",
    },
    {
      icon: PhoneCall,
      number: "04",
      title: "FOLLOW-UP STRATEGICO",
      subtitle: "Il 70% delle vendite si perde qui.",
      description: "Costruiamo:",
      points: [
        "sequenze precise",
        "controllo totale delle trattative aperte",
        'niente più "le faccio sapere"',
      ],
      result: "Chi guida il follow-up, guida la vendita.",
    },
    {
      icon: BarChart3,
      number: "05",
      title: "NUMERI E CONTROLLO",
      subtitle: "Finalmente sai:",
      description: "",
      points: [
        "quante trattative hai",
        "quante chiudi",
        "valore medio",
        "tempi di incasso",
        "colli di bottiglia",
      ],
      result: "Niente più sensazioni. Solo decisioni sui numeri.",
    },
  ];

  return (
    <section id="metodo" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Il Programma
            </span>
            <h2 className="heading-section text-foreground mb-4">
              COSA FACCIAMO IN{" "}
              <span className="text-gold">90 GIORNI</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Costruiamo il TUO SISTEMA DI VENDITA EDILE
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Non uno schema standard. Non un metodo copiato.{" "}
              <span className="text-gold font-medium">Il tuo sistema. Sulla tua azienda.</span>
            </p>
          </div>
        </AnimatedSection>

        <Accordion type="single" collapsible className="space-y-4">
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
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-3">
                        <span className="text-gold font-bold text-sm">
                          PILASTRO {pillar.number}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6">
                  <div className="pl-0 md:pl-20 pt-4 border-t border-border">
                    <p className="text-lg text-foreground mb-4">{pillar.subtitle}</p>
                    {pillar.description && (
                      <p className="text-muted-foreground mb-3">{pillar.description}</p>
                    )}
                    <ul className="space-y-2 mb-6">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-gold mt-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-gold/10 rounded-xl">
                      <p className="text-gold font-medium">👉 {pillar.result}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default VEPillarsSection;
