import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Euro,
  Clock,
  BookOpen,
  Building2,
  Shield,
  User,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const EXTERNAL_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdqP0IjmBgMpFPblV2dMO72YOSxvlEvKezLyBQ-EXayIAkuCQ/viewform";

const faqs = [
  {
    icon: Euro,
    question: "\"€9.000 sono troppi\"",
    answer: {
      lines: [
        "Troppi rispetto a cosa? A €30.000-50.000 che perdi OGNI MESE?",
        "Il programma si ripaga con UN solo contratto chiuso meglio.",
        "La vera domanda: quanto ti costa NON investire?",
      ],
      highlight: "€9.000 investiti → €45.000+ ritorno in 90 giorni = ROI 5x",
    },
  },
  {
    icon: Clock,
    question: "\"Non ho tempo per un altro corso\"",
    answer: {
      lines: [
        "Non è un corso. È un affiancamento che RISPARMIA tempo.",
        "Oggi perdi 40+ ore/mese in trattative che non chiudono.",
        "Il programma ti restituisce quelle ore.",
      ],
      highlight: "I nostri clienti recuperano 15-20 ore/mese già dal primo mese.",
    },
  },
  {
    icon: BookOpen,
    question: "\"Ho già fatto altri corsi senza risultati\"",
    answer: {
      lines: [
        "Esatto. Perché erano CORSI. Teoria senza applicazione.",
        "Noi non ti lasciamo con un PDF. Ti affianchiamo per 90 giorni.",
        "Ogni settimana: revisione trattative, feedback, correzioni.",
      ],
      highlight: "I corsi ti danno informazioni. Noi ti diamo TRASFORMAZIONE.",
    },
  },
  {
    icon: Building2,
    question: "\"Il mio settore è diverso\"",
    answer: {
      lines: [
        "Infissi, serramenti, fotovoltaico, ristrutturazioni, impianti...",
        "Abbiamo lavorato con 47+ aziende in OGNI settore edile.",
        "I principi sono gli stessi. L'applicazione è personalizzata.",
      ],
      highlight: "Chiedici le referenze del TUO settore.",
    },
  },
  {
    icon: Shield,
    question: "\"E se non funziona?\"",
    answer: {
      lines: [
        "Garanzia 100%. Se non vedi risultati, rimborso TOTALE.",
        "Non 'parte del rimborso'. Non 'credito formativo'. TUTTO.",
        "Lo mettiamo per iscritto PRIMA di iniziare.",
      ],
      highlight: "Il rischio è tutto nostro. Tu non perdi nulla.",
    },
  },
  {
    icon: User,
    question: "\"Non sono bravo a vendere\"",
    answer: {
      lines: [
        "Perfetto. Non devi essere 'bravo'. Devi avere un SISTEMA.",
        "I venditori 'naturali' improvvisano. Tu avrai uno script.",
        "Non servono doti innate. Serve un metodo testato.",
      ],
      highlight: "Il 70% dei nostri clienti non aveva esperienza di vendita.",
    },
  },
  {
    icon: Calendar,
    question: "\"Preferisco aspettare un momento migliore\"",
    answer: {
      lines: [
        "Il momento migliore era ieri. Il secondo momento migliore è OGGI.",
        "Ogni mese che aspetti = €30.000-50.000 persi.",
        "I tuoi concorrenti non stanno aspettando.",
      ],
      highlight: "Tra 6 mesi sarai nella stessa situazione o peggio?",
    },
  },
  {
    icon: Users,
    question: "\"Come faccio a fidarmi di voi?\"",
    answer: {
      lines: [
        "Non devi fidarti delle parole. Fidati dei NUMERI.",
        "47+ aziende affiancate con tasso successo 94%.",
        "Ti mettiamo in contatto con chi ha già fatto il percorso.",
      ],
      highlight: "Vieni in showroom. Guarda i nostri bilanci. Parla con i nostri clienti.",
    },
  },
];

const summaryPoints = [
  { label: "Investimento", value: "€9.000 → ROI 5x in 90 giorni" },
  { label: "Tempo", value: "2-3 ore/settimana → risparmi 15+ ore/mese" },
  { label: "Rischio", value: "ZERO (garanzia 100%)" },
  { label: "Esperienza", value: "Non serve (ti diamo il sistema)" },
  { label: "Settore", value: "Copriamo tutta l'edilizia" },
];

const VEFAQSection = () => {
  const handleCtaClick = () => {
    window.open(EXTERNAL_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 md:py-32 bg-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-gold/80 uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Lo sappiamo. Stai pensando una di queste cose...
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            LE OBIEZIONI CHE TI STAI FACENDO
            <span className="block text-gold mt-2">(E perché sono sbagliate)</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ogni imprenditore che oggi ha risultati si è fatto le stesse domande.
            <span className="text-white font-medium"> Ecco le risposte.</span>
          </p>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-navy-light/50 border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <faq.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-white group-hover:text-gold transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-16 space-y-4">
                      {/* Answer Lines */}
                      <ul className="space-y-3">
                        {faq.answer.lines.map((line, lineIndex) => (
                          <motion.li
                            key={lineIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: lineIndex * 0.1 }}
                            className="flex items-start gap-3 text-white/80"
                          >
                            <span className="text-gold mt-1">→</span>
                            <span>{line}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Highlight Box */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 p-4 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                          <p className="text-gold font-semibold">{faq.answer.highlight}</p>
                        </div>
                      </motion.div>

                      {/* Badge */}
                      <div className="flex justify-end mt-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          Obiezione smontata
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Transition - collegamento alla sezione finale */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white mb-4">
              L'unica domanda rimasta:
            </p>
            <p className="text-gold text-lg md:text-xl font-semibold">
              Sei pronto a smettere di trovare scuse e iniziare a vendere?
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default VEFAQSection;
