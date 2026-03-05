import { AnimatedSection } from "@/components/AnimatedSection";
import { BookOpen } from "lucide-react";

const chapters = [
  {
    label: null,
    title: "Perché ho creato Vendita Edile® — e cosa mi ha insegnato partire da zero in un settore che non conoscevo",
    paragraphs: [
      "Mi chiamo Flo. Non sono nato serramentista. Non sono nato muratore.",
      "Mio padre ha un'azienda edile — ma io sono cresciuto nel marketing e nella vendita. Da 8 anni gestisco Marketing Edile, un'agenzia che aiuta le aziende edili ad acquisire clienti tramite marketing digitale, funnel e sistemi di lead generation. Lavoriamo esclusivamente a provvigione — guadagniamo solo quando i nostri clienti guadagnano. Nessun fisso. Nessun anticipo. Nessuna scusa.",
      "Questo modello ci ha obbligato a capire una cosa che i formatori non capiscono mai: non basta portare i lead. Se l'azienda non sa venderli, non prendi un euro.",
      "Dopo anni passati a generare contatti qualificati per decine di aziende edili — e a guardare molte di queste perderli in trattativa — ho capito dove stava il vero problema. Non nel marketing. Nella vendita.",
    ],
  },
  {
    label: null,
    title: "Fine 2023: apro un'azienda di serramenti da zero.",
    paragraphs: [
      "Quando lo sconto del 75% sui serramenti è finito, ho fatto una cosa che molti mi hanno sconsigliato: ho aperto I-Profili, un'azienda di serramenti in Lombardia. Senza esperienza tecnica. Senza clienti. Da zero.",
      "L'idea era semplice: testare sul campo quello che avevo visto funzionare — e non funzionare — in 8 anni di lavoro con le aziende edili dei nostri partner.",
    ],
    highlight: {
      value: "€400.000",
      label: "venduti nei primi 3 mesi — senza sconto in fattura.",
      description: "Come? Non con la competenza tecnica — quella non l'avevamo. Con un sistema di vendita costruito sul cliente, non sul prodotto. Sapevamo come guidare una trattativa, come creare valore percepito, come chiudere senza abbassare il prezzo.",
      footer: "Mentre i nostri competitor piangevano la fine del Superbonus, noi vendevamo a prezzo pieno.",
    },
  },
  {
    label: null,
    title: "La realtà che nessuno ti racconta.",
    paragraphs: [
      "Poi è arrivata l'altra faccia della medaglia.",
      "Magazzino. Ordini sbagliati. Errori di misura. Fornitori che saltano le consegne. Margini che spariscono tra un errore e l'altro. Cantieri che si bloccano.",
      "Fatturavamo. Ma quello che rimaneva non era proporzionale a quello che stavamo costruendo.",
      "Abbiamo capito una cosa brutale: puoi essere bravo a vendere e comunque perdere soldi, se non hai il controllo di quello che succede dopo la firma.",
    ],
  },
  {
    label: null,
    title: "Il metodo.",
    paragraphs: [
      "Abbiamo smesso di rincorrere il fatturato e abbiamo iniziato a ossessionarci sul margine per commessa.",
      "Non \"quanto abbiamo fatturato questo mese\" — ma \"quanto abbiamo guadagnato su ogni singola trattativa chiusa.\"",
      "Abbiamo costruito un sistema che parte dalla vendita ad alto margine — qualificazione del cliente, struttura della trattativa, pricing difendibile — e che integra il controllo operativo necessario per proteggere quel margine fino al cantiere finito.",
    ],
  },
  {
    label: null,
    title: "Dalla prova sul campo al programma.",
    paragraphs: [
      "Avevo due laboratori paralleli: Marketing Edile, con anni di dati su cosa porta clienti qualificati alle aziende edili, e la mia azienda di serramenti, con la prova diretta di cosa converte quei clienti in commesse ad alto margine.",
      "Ho preso quello che funzionava in entrambi. Ho eliminato quello che non scalava. Ho testato il sistema con i partner di Marketing Edile — aziende reali, con trattative reali, in mercati diversi.",
    ],
    closing: {
      title: "Il risultato è diventato Vendita Edile®.",
      text: "Non un corso. Non teoria. Un sistema testato su due fronti — da chi lo usa ogni giorno nella propria azienda e da chi lo ha costruito guardando decine di aziende edili fallire e riuscire negli ultimi 8 anni.",
    },
  },
];

const VEOriginStorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Badge */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              La nostra storia
            </span>
          </div>
        </AnimatedSection>

        {/* Chapters */}
        <div className="space-y-4">
          {chapters.map((chapter, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 md:p-10">
                {chapter.label && (
                  <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
                    {chapter.label}
                  </span>
                )}

                <h3 className={`font-black text-foreground mb-6 ${i === 0 ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl lg:text-2xl"}`}>
                  {chapter.title}
                </h3>

                <div className="space-y-4">
                  {chapter.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Highlight block (Chapter 1) */}
                {"highlight" in chapter && chapter.highlight && (
                  <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <p className="text-3xl md:text-4xl font-black text-primary mb-1">
                      {chapter.highlight.value}
                    </p>
                    <p className="text-foreground font-semibold mb-4">
                      {chapter.highlight.label}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {chapter.highlight.description}
                    </p>
                    <p className="text-primary font-bold text-sm mt-4 italic">
                      {chapter.highlight.footer}
                    </p>
                  </div>
                )}

                {/* Closing block (Chapter 4) */}
                {"closing" in chapter && chapter.closing && (
                  <div className="mt-8 pt-6 border-t border-primary/20">
                    <p className="text-xl font-black text-primary mb-3">
                      {chapter.closing.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {chapter.closing.text}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VEOriginStorySection;
