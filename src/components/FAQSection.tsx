import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Come funziona esattamente il modello a percentuale?",
    answer: "Molto semplice: noi generiamo lead qualificati e li trasformiamo in clienti per te. Quando chiudi una vendita grazie al nostro lavoro, ci riconosci una percentuale concordata. Se non generiamo vendite, non paghi nulla. Niente canoni fissi, niente costi anticipati."
  },
  {
    question: "Quanto costa lavorare con voi?",
    answer: "Siamo l'unica agenzia nel settore edilizio che lavora a percentuale sulle vendite che generiamo per te. Non paghi un canone fisso mensile: paghi solo quando ottieni risultati concreti. La percentuale esatta viene definita in fase di consulenza in base al tuo settore, ai margini e agli obiettivi."
  },
  {
    question: "Come calcolate le vendite generate da voi?",
    answer: "Utilizziamo un sistema di tracciamento preciso: ogni lead che arriva dal nostro sistema viene registrato con data, fonte e percorso. Quando quel lead diventa cliente, la vendita è attribuita al nostro lavoro. Tutto è trasparente e verificabile insieme."
  },
  {
    question: "Quando pago la percentuale?",
    answer: "Paghi solo dopo aver incassato dal cliente. Non prima. Questo significa che non anticipi nulla e non ti esponi a rischi. Il pagamento avviene mensilmente sui lavori chiusi e incassati nel mese precedente."
  },
  {
    question: "Perché nessun altro lavora così?",
    answer: "Perché serve essere sicuri del proprio metodo. Molte agenzie preferiscono il canone fisso perché garantisce loro entrate indipendentemente dai risultati. Noi abbiamo scelto l'approccio opposto: se non funziona, non guadagniamo. Questo ci obbliga a portarti risultati veri."
  },
  {
    question: "Chi paga la pubblicità?",
    answer: "Il budget pubblicitario è a tuo carico. Questo perché le campagne fanno crescere il TUO brand: aumentano la visibilità della TUA azienda, costruiscono la TUA reputazione online e restano patrimonio tuo. Tu decidi quanto investire in base ai tuoi obiettivi, noi ci occupiamo di gestire le campagne per massimizzare i risultati."
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati?",
    answer: "Dipende dalla strategia. Per campagne pubblicitarie i primi lead arrivano in 2-4 settimane. Per il posizionamento organico (SEO) servono 3-6 mesi. Durante l'onboarding definiamo insieme tempistiche realistiche basate sui tuoi obiettivi."
  },
  {
    question: "Lavorate solo con aziende del settore edile?",
    answer: "Sì, lavoriamo esclusivamente con imprese edili, serramentisti, posatori e showroom di materiali. Questa specializzazione ci permette di conoscere profondamente il vostro mercato, i vostri clienti e le dinamiche del settore."
  },
  {
    question: "Cosa vi differenzia dalle altre agenzie?",
    answer: "Quattro cose: 1) Lavoriamo SOLO con l'edilizia, quindi conosciamo il settore. 2) Non vendiamo 'pacchetti', ma costruiamo strategie su misura. 3) Misuriamo tutto: se non porta risultati, cambiamo approccio. 4) Lavoriamo a percentuale sulle vendite: se non vendi, non guadagniamo. I nostri interessi sono allineati ai tuoi."
  },
  {
    question: "Devo già avere un sito web per lavorare con voi?",
    answer: "No, non è necessario. Possiamo partire da zero creando il tuo sito, oppure ottimizzare quello esistente. L'importante è che il sito diventi uno strumento di vendita, non una semplice vetrina."
  },
  {
    question: "Come funziona il processo di candidatura?",
    answer: "Compili il form di candidatura, analizziamo la tua situazione e ti ricontattiamo entro 48 ore. Se riteniamo di poterti aiutare, fissiamo una call strategica gratuita. Se c'è fit reciproco, iniziamo a lavorare insieme."
  },
  {
    question: "Posso disdire in qualsiasi momento?",
    answer: "Sì. Non ci sono vincoli. Se non generiamo vendite, non ci devi nulla. Puoi interrompere la collaborazione quando vuoi. Il nostro modello a percentuale significa che il rischio è tutto nostro."
  },
  {
    question: "Gestite anche i social media?",
    answer: "Sì, ma con un approccio strategico. Non pubblichiamo 'tanto per pubblicare'. Creiamo contenuti che educano, posizionano e generano richieste. La vanity metrics (like, follower) non ci interessano: ci interessano i clienti."
  }
];

// Generate JSON-LD schema for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">
                Domande Frequenti
              </p>
              <h2 className="heading-section text-foreground mb-4">
                Hai dubbi? Ecco le risposte
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le domande che ci fanno più spesso i potenziali clienti prima di iniziare a lavorare con noi.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
