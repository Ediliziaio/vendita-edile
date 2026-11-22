import { AnimatedSection } from "@/components/AnimatedSection";
import TabletVendita from "@/components/vivo/TabletVendita";

/** La trattativa vista dal tablet del commerciale, tappa per tappa. */
export default function VEEsplosoSection({
  variante = "metodo",
  titolo = "Cosa costruiamo nella tua azienda, tappa per tappa.",
}: {
  variante?: "metodo" | "serramenti";
  titolo?: string;
}) {
  return (
    <section className="section-padding bg-navy-light/40 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Il metodo, dal tablet del commerciale</span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-4xl">{titolo}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Una vendita non si chiude con una frase magica. Si chiude perché ogni passaggio è al suo posto: cosa sai del cliente, cosa
              hai scritto al sopralluogo, come presenti il preventivo, come difendi il prezzo e cosa misuri ogni settimana.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="mx-auto mt-10 max-w-5xl">
            <TabletVendita variante={variante} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
