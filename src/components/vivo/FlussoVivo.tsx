/**
 * FlussoVivo — passaggi che si accendono uno alla volta, da soli.
 *
 * Il passo acceso si alza e ha una barra che avanza; quelli già fatti prendono
 * la spunta. Passando col mouse (o toccando) se ne sceglie uno e il giro si
 * ferma qualche secondo. Parte solo quando è sullo schermo.
 *
 * Su telefono (.scorri-mobile) le schede stanno in una fila da scorrere che
 * segue da sola il passo acceso: si muove la fila, mai la pagina.
 * Rispetta prefers-reduced-motion (tutto fermo, nessun passo acceso).
 */
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export type PassoVivo = { title: string; text?: string; icon?: LucideIcon; etichetta?: string };

const CSS = `
@keyframes fv-bar { from { width: 0 } to { width: 100% } }
.fv-bar { animation: fv-bar var(--fv-dur, 3s) linear forwards; }
@keyframes fv-in { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
.fv-in { animation: fv-in 450ms cubic-bezier(0.22,1,0.36,1) backwards; }
@media (prefers-reduced-motion: reduce) { .fv-bar, .fv-in { animation: none !important; } }
`;

function useVisibile<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisto(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visto] as const;
}

const adesso = () => Date.now();

export default function FlussoVivo({
  steps,
  ms = 3200,
  colonne,
  className = "",
}: {
  steps: PassoVivo[];
  ms?: number;
  /** Classi delle colonne da 640px in su; di default si regola sul numero di passi. */
  colonne?: string;
  className?: string;
}) {
  const n = steps.length;
  const [fila, visto] = useVisibile<HTMLOListElement>();
  const [attivo, setAttivo] = useState(-1);
  const pausaFino = useRef(0);
  const ridotto = useRef(false);

  useEffect(() => {
    ridotto.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!visto || ridotto.current) return;
    setAttivo((v) => (v < 0 ? 0 : v));
    const id = window.setInterval(() => {
      if (adesso() < pausaFino.current) return;
      setAttivo((v) => (v + 1) % n);
    }, ms);
    return () => window.clearInterval(id);
  }, [visto, n, ms]);

  // La fila su telefono segue il passo acceso.
  useEffect(() => {
    const el = fila.current;
    if (!el || attivo < 0 || el.scrollWidth <= el.clientWidth + 4) return;
    const figlio = el.querySelectorAll<HTMLElement>(":scope > li")[attivo];
    if (!figlio) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const left = figlio.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft - pad;
    el.scrollTo({ left, behavior: "smooth" });
  }, [attivo, fila]);

  const scegli = (k: number) => {
    pausaFino.current = adesso() + 9000;
    setAttivo(k);
  };

  const col =
    colonne ??
    (n <= 2 ? "sm:grid-cols-2" : n === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3");

  return (
    <ol ref={fila} onTouchStart={() => (pausaFino.current = adesso() + 9000)} className={`scorri-mobile grid gap-4 ${col} ${className}`}>
      <style>{CSS}</style>
      {steps.map((s, i) => {
        const on = i === attivo;
        const fatto = attivo >= 0 && i < attivo;
        const Icon = s.icon;
        return (
          <li
            key={s.title}
            onPointerEnter={(e) => e.pointerType === "mouse" && scegli(i)}
            onClick={() => scegli(i)}
            className={`relative flex cursor-default flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-500 ${
              on
                ? "-translate-y-1 border-gold/60 bg-gold/[0.09] shadow-[0_14px_40px_-18px_hsl(var(--gold)/0.7)]"
                : "border-border/60 bg-background/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-xs font-black uppercase tracking-[0.16em] ${on ? "text-gold" : "text-muted-foreground"}`}>
                {s.etichetta ?? `Passo ${i + 1}`}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
                  on ? "bg-gold text-background" : fatto ? "bg-gold/20 text-gold" : "bg-foreground/5 text-gold/80"
                }`}
              >
                {fatto ? <Check className="h-4 w-4" strokeWidth={3} /> : Icon ? <Icon className="h-[18px] w-[18px]" /> : <span className="text-sm font-black">{i + 1}</span>}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-black leading-snug text-foreground">{s.title}</h3>
            {s.text && <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{s.text}</p>}
            <span className="absolute inset-x-0 bottom-0 h-[3px] bg-foreground/5">
              {on && <span key={`b${attivo}`} className="fv-bar block h-full bg-gold" style={{ ["--fv-dur" as string]: `${ms}ms` }} />}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
