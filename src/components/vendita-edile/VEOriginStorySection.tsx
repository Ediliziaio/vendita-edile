import { AnimatedSection } from "@/components/AnimatedSection";
import { BookOpen } from "lucide-react";

const VEOriginStorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              La nostra storia
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card/60 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 md:p-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-8">
              Perché ho creato Vendita Edile® — e cosa mi ha insegnato partire da zero
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>Mi chiamo Flo. Non sono nato serramentista.</p>

              <p>
                Sono cresciuto nel marketing e nella vendita. Da 8 anni gestisco Marketing Edile — portiamo clienti qualificati alle aziende edili, solo a provvigione. Guadagniamo solo quando i nostri clienti guadagnano.
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

            {/* Highlight box */}
            <div className="mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <p className="text-3xl md:text-4xl font-black text-primary">€400.000</p>
                <p className="text-foreground font-semibold">nei primi 3 mesi</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <p className="text-3xl md:text-4xl font-black text-primary">€2M+</p>
                <p className="text-foreground font-semibold">in meno di 2 anni</p>
              </div>
              <p className="text-primary font-bold text-sm mt-4 italic">
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

            {/* Closing */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <p className="text-xl font-black text-primary mb-3">
                Il risultato è Vendita Edile®.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Non un corso. Un sistema costruito sul campo.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VEOriginStorySection;
