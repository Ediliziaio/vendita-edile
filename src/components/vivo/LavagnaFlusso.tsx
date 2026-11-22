import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from "react";
import type { WorkflowApp, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";

// L'editor pesa: si scarica solo quando la sezione sta per entrare nello schermo.
const WorkflowBlueprint = lazy(() => import("@/components/ui/interactive-workflow-blueprint"));

const nodo = (id: string, x: number, y: number, label: string, detail: string, kind: WorkflowGraph["nodes"][number]["data"]["kind"], tool: string, live: string) =>
  ({ id, type: "blueprint" as const, position: { x, y }, data: { label, detail, kind, tool, live } });

const GRAFO: WorkflowGraph = {
  nodes: [
    nodo("contatto", 0, 40, "Prima telefonata", "Domande sul problema e sulla casa, non sul listino. Si fissa il sopralluogo con chi decide.", "trigger", "Telefono", "Sig.ra Bianchi: spifferi e rumore, decidono in due"),
    nodo("sopralluogo", 290, 200, "Sopralluogo guidato", "Misure prese e bisogni scritti nero su bianco, davanti al cliente.", "review", "Scheda cliente", "4 bisogni scritti, misure di 7 finestre prese"),
    nodo("preventivo", 580, 40, "Preventivo al tavolo", "Presentato di persona, ogni voce legata a un bisogno detto dal cliente.", "integration", "Preventivo", "Ogni voce spiegata al tavolo, legata a un bisogno"),
    nodo("firma", 870, 200, "Firma senza sconto", "Obiezione gestita, acconto incassato, data di posa in agenda.", "delivery", "Contratto", "«Ci pensiamo» gestito: firmato senza sconto, acconto incassato"),
  ],
  edges: [
    { id: "c-s", source: "contatto", target: "sopralluogo" },
    { id: "s-p", source: "sopralluogo", target: "preventivo" },
    { id: "p-f", source: "preventivo", target: "firma" },
  ],
};

const AZIONI: WorkflowApp[] = [
  { id: "ai", name: "Assistente AI", actions: [
    { label: "Prepara le domande del sopralluogo", detail: "Le domande giuste per quel cliente, partendo dalla prima telefonata.", kind: "agent", tool: "Assistente AI" },
    { label: "Riassume le obiezioni", detail: "Cosa ha frenato il cliente, scritto prima della riunione del lunedì.", kind: "agent", tool: "Assistente AI" },
  ] },
  { id: "telefono", name: "Telefono e WhatsApp", actions: [
    { label: "Richiamo a 48 ore", detail: "Si torna dal cliente con la data della decisione, non con uno sconto.", kind: "review", tool: "Telefono" },
    { label: "Riepilogo dopo la visita", detail: "Il cliente riceve per iscritto cosa avete deciso insieme.", kind: "delivery", tool: "WhatsApp" },
  ] },
  { id: "preventivi", name: "Preventivi", actions: [
    { label: "Confronto voce per voce", detail: "«Un altro costa meno»: si mettono i due preventivi uno accanto all'altro.", kind: "review", tool: "Preventivo" },
    { label: "Varianti a tre livelli", detail: "Base, consigliata, completa: il cliente sceglie, non tratta.", kind: "integration", tool: "Preventivo" },
  ] },
  { id: "numeri", name: "Numeri del commerciale", actions: [
    { label: "Trattativa in pipeline", detail: "Ogni trattativa ha fase, valore e prossimo passo.", kind: "integration", tool: "CRM" },
    { label: "Riunione del lunedì", detail: "Chiamate, appuntamenti, preventivi e firme della settimana.", kind: "delivery", tool: "Report" },
  ] },
];

const COLORI = {
  "--color-background": "hsl(213 65% 5%)",
  "--color-foreground": "#f1f5f9",
  "--color-card": "hsl(213 50% 10%)",
  "--color-muted-foreground": "#94a3b8",
  "--color-border": "rgba(255,255,255,.14)",
  "--color-primary": "hsl(45 93% 51%)",
  "--color-primary-foreground": "#0b1220",
  "--color-chart-2": "#fde68a",
  "--color-chart-3": "#34d399",
  "--wb-radius": "24px",
} as CSSProperties;

export default function LavagnaFlusso() {
  const box = useRef<HTMLDivElement>(null);
  const [vicino, setVicino] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVicino(true);
        io.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Il metodo, mentre lavora</span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-4xl">Guarda una trattativa arrivare alla firma.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Telefonata, sopralluogo, preventivo, firma: i passaggi del metodo si accendono uno dopo l'altro. Puoi spostarli o
            aggiungerne altri dalla colonna a destra.
          </p>
        </div>
        <div ref={box} className="mt-10 min-h-[560px]">
          {vicino && (
            <Suspense fallback={<div className="h-[560px] rounded-3xl border border-white/10 bg-white/[0.03]" />}>
              <WorkflowBlueprint vetrina title="La trattativa, passo per passo" subtitle="Trattativa d'esempio" oraInizio="09:15" initialGraph={GRAFO} apps={AZIONI} style={COLORI} />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
