import { AnimatedSection } from "@/components/AnimatedSection";
import TrattativaInDiretta from "@/components/vivo/TrattativaInDiretta";

const VETrattativaSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[130px]" />
    </div>
    <div className="container-narrow relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <AnimatedSection>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Il metodo in una trattativa</span>
        <h2 className="heading-section mt-4 text-foreground">
          Dalla telefonata alla firma.
          <br />
          <span className="text-gold">Senza sconti e senza «ci penso».</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Il cliente non sparisce dopo il preventivo per caso. Sparisce perché in qualche passaggio nessuno ha fatto la domanda
          giusta.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Il metodo dice cosa fare a ogni tappa: cosa chiedere al telefono, cosa scrivere al sopralluogo, come presentare il
          preventivo e come rispondere quando il cliente frena. Lo stesso per te e per chi vende al posto tuo.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <TrattativaInDiretta />
      </AnimatedSection>
    </div>
  </section>
);

export default VETrattativaSection;
