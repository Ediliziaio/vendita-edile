import { motion } from "framer-motion";
import { Swords, ShieldCheck, BarChart3, UsersRound, Check, Clock, MessageCircle, Phone, Package } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cantiereImage from "@/assets/cantiere-installazione.jpg";

const pillars = [
  {
    icon: Swords,
    number: "01",
    label: "LA MACCHINA DA GUERRA",
    title: "Struttura di Vendita",
    intro: "Prima di tutto sistemiamo il fondamento. Come qualifichi un lead, come strutturi la prima chiamata, come arrivi al preventivo con il cliente già orientato a comprare — non a trattare.",
    context: "La maggior parte delle aziende edili perde la trattativa prima ancora di presentare il prezzo. Non per colpa del prezzo — per come hanno gestito i 20 minuti precedenti.",
    points: [
      "Script di qualificazione — filtri i clienti perdi-tempo prima che ti rubino ore",
      "Struttura della prima visita — ogni appuntamento segue un flusso preciso, non va a sensazione",
      "Gestione delle obiezioni — le 7 obiezioni standard del cliente edile e come smontarle senza abbassare il prezzo",
      "Tecnica di chiusura — guidi il cliente alla decisione, non aspetti che la prenda da solo",
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    label: "IL PREZZO CHE DIFENDI",
    title: "Sistema di Preventivazione ad Alto Margine",
    intro: "Un preventivo non è un documento. È l'ultimo atto di vendita prima della firma. La maggior parte delle aziende lo tratta come una fattura pro-forma — e poi si stupisce se il cliente risponde \"ci penso\" o \"l'altro mi fa meno.\"",
    context: "",
    points: [
      "Template preventivo che vende — struttura, layout, linguaggio orientato al valore",
      "Pricing difendibile — come presenti il prezzo in modo che lo sconto non sia nemmeno la conversazione",
      "Follow-up automatizzato — sequenza testata per recuperare i \"ci penso\" senza sembrare disperato",
      "Margine minimo per commessa — ogni preventivo esce con un floor di margine sotto cui non scendi, mai",
    ],
  },
  {
    icon: BarChart3,
    number: "03",
    label: "I NUMERI CHE COMANDANO",
    title: "KPI e Controllo",
    intro: "Non puoi migliorare quello che non misuri. E la maggior parte delle aziende edili misura una sola cosa: il fatturato. Che è il numero più inutile che esista se non sai cosa ti rimane.",
    context: "",
    points: [
      "Dashboard KPI settimanale — tasso di chiusura, margine medio per commessa, costo per lead, tempo medio trattativa",
      "Report trattative — ogni commerciale documenta ogni contatto, ogni obiezione, ogni esito",
      "Soglie di allerta — sai in tempo reale quando qualcosa non funziona, senza aspettare la fine del mese",
      "Riunione commerciale settimanale — struttura, agenda, come si conduce per produrre decisioni, non chiacchiere",
    ],
  },
  {
    icon: UsersRound,
    number: "04",
    label: "IL TEAM CHE VENDE SENZA DI TE",
    title: "Struttura Commerciale",
    intro: "L'obiettivo finale non è che tu venda meglio. È che la tua azienda venda bene anche quando non ci sei tu.",
    context: "Finché ogni trattativa dipende dalla tua presenza, dalla tua energia, dalla tua disponibilità — non hai un sistema. Hai un lavoro.",
    points: [
      "Profilo del commerciale edile — come selezionare, onboardare e formare chi vende per te",
      "Manuale di vendita dell'azienda — il tuo metodo scritto nero su bianco, replicabile da chiunque",
      "Sistema di incentivazione — struttura provvigionale che allinea gli interessi del commerciale ai tuoi",
      "Affiancamento diretto — ascoltiamo le chiamate reali dei tuoi commerciali e diamo feedback specifico entro 24h",
    ],
  },
];

const timelineItems = [
  { icon: Clock, title: "Sessione settimanale 1:1", description: "Lavoriamo direttamente sul tuo sistema — ogni settimana un avanzamento concreto" },
  { icon: MessageCircle, title: "Supporto WhatsApp diretto", description: "Risposta entro 4h su qualsiasi trattativa in corso — 6 giorni su 7" },
  { icon: Phone, title: "Revisione trattative", description: "Ascoltiamo le tue chiamate e ti diamo feedback specifico, non generico" },
  { icon: Package, title: "Consegne in itinere", description: "Script, template, dashboard — ricevi ogni elemento nel momento in cui è pronto e testato" },
];

const finalDeliverables = [
  "Un sistema di vendita documentato e replicabile — non dipendente da te",
  "Script testati sulla tua clientela reale",
  "Preventivi che convertono senza fare sconti",
  "Dashboard KPI che ti dice ogni lunedì mattina esattamente dove sei",
  "Un team che vende seguendo un metodo — non andando a sensazione",
];

const VEPillarsSection = () => {
  return (
    <section id="metodo" className="section-padding bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 uppercase tracking-wider">
              Il programma completo
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Il Programma — Cosa Costruiamo Insieme in{" "}
              <span className="text-gold drop-shadow-[0_0_20px_hsl(var(--gold)/0.4)]">90 Giorni</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Non ti diamo un manuale. Entriamo nella tua azienda e costruiamo il sistema mentre lavori.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Ogni elemento viene consegnato in itinere — non alla fine.{" "}
              <span className="text-gold font-semibold">Dal giorno 1 inizi già a vedere i risultati.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Pillars + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
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
                    className="bg-card border-2 border-border hover:border-gold/50 transition-colors rounded-2xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-4 md:px-6 lg:px-8 md:py-6 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 md:gap-6 w-full">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                          <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                        </div>
                        <div className="text-left flex-1">
                          <span className="text-gold font-bold text-sm block mb-1">
                            PILASTRO {pillar.number} — {pillar.label}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-foreground">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 lg:px-8 pb-6">
                      <div className="pl-0 md:pl-20 pt-4 border-t border-border">
                        <p className="text-foreground mb-3">{pillar.intro}</p>
                        {pillar.context && (
                          <p className="text-muted-foreground italic mb-4">{pillar.context}</p>
                        )}
                        <p className="text-gold font-bold mb-3">Quello che costruiamo insieme:</p>
                        <ul className="space-y-3">
                          {pillar.points.map((point, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-3">
                              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Sidebar Image */}
          <div className="hidden lg:block">
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="sticky top-24 rounded-2xl overflow-hidden shadow-2xl shadow-gold/20 border-2 border-gold/30"
              >
                <img
                  src={cantiereImage}
                  alt="Installazione infissi in cantiere - il nostro metodo applicato sul campo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold font-bold text-lg mb-1">Il contesto reale</p>
                  <p className="text-foreground text-sm">Dove le nostre tecniche vengono testate ogni giorno.</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Timeline — Come funziona in pratica */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
              Come funziona in pratica
            </h3>
            <p className="text-muted-foreground text-center mb-10">
              I 4 pilastri si costruiscono in parallelo nei 90 giorni — non in sequenza. Dal giorno 1 lavori già su tutti e 4 i fronti.
            </p>

            <div className="relative pl-8 md:pl-12">
              {/* Vertical gold line */}
              <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold/20" />

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Gold dot */}
                    <div className="absolute -left-8 md:-left-12 top-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                      <item.icon className="w-3 h-3 md:w-4 md:h-4 text-gold" />
                    </div>
                    {/* Card */}
                    <div className="p-5 bg-card border border-border rounded-xl hover:border-gold/40 transition-colors">
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final deliverables box */}
        <AnimatedSection delay={0.3}>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-5 md:p-8 bg-card border-2 border-gold rounded-2xl shadow-xl shadow-gold/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Dopo 90 giorni hai in mano:
            </h3>
            <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.1}>
              {finalDeliverables.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-3 bg-gold/10 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-base md:text-lg text-foreground">{item}</span>
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

        {/* Transition */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-2">
              Tutto questo... quanto costa?
            </p>
            <p className="text-xl font-bold text-foreground">
              <span className="text-gold">Ecco l'investimento...</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEPillarsSection;
