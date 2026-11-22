/**
 * TrattativaInDiretta — una trattativa condotta col metodo, dalla prima
 * telefonata alla firma. Sopra le cinque tappe si accendono una dopo l'altra;
 * sotto, il registro scrive cosa ha fatto il commerciale a ogni tappa.
 * A fine giro riparte.
 *
 * È un esempio (lo dice l'etichetta): nomi e orari sono di fantasia, niente
 * cifre. Parte solo quando è sullo schermo; con prefers-reduced-motion mostra
 * il giro completo, fermo.
 */
import { useEffect, useRef, useState } from "react";
import { FileSignature, FileText, MessageCircleQuestion, PhoneCall, Ruler } from "lucide-react";
import ReteViva from "./ReteViva";

const TAPPE = [
  { nome: "Telefonata", icon: PhoneCall, quando: "lun 09:15", testo: "Prima chiamata: domande sul problema e sulla casa, non sul listino. Sopralluogo fissato con tutti e due i coniugi." },
  { nome: "Sopralluogo", icon: Ruler, quando: "mer 17:30", testo: "Misure prese e bisogni scritti nero su bianco: rumore della strada, spifferi, bollette alte." },
  { nome: "Preventivo", icon: FileText, quando: "ven 18:00", testo: "Preventivo presentato di persona, voce per voce, legato ai bisogni del sopralluogo. Non mandato per email." },
  { nome: "Obiezione", icon: MessageCircleQuestion, quando: "ven 18:40", testo: "«Ci dobbiamo pensare.» Domanda giusta, dubbio vero trovato e risolto. Data della decisione fissata." },
  { nome: "Firma", icon: FileSignature, quando: "sab 10:30", testo: "Contratto firmato al tavolo, senza sconto. Acconto incassato e data di posa in agenda." },
];

const PASSO_MS = 2300;

export default function TrattativaInDiretta() {
  const box = useRef<HTMLDivElement>(null);
  const [visto, setVisto] = useState(false);
  const [tappa, setTappa] = useState(-1);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTappa(TAPPE.length - 1);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisto(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visto) return;
    // A fine giro resta un attimo sul contratto firmato, poi riparte.
    const id = window.setInterval(() => setTappa((t) => (t >= TAPPE.length + 1 ? 0 : t + 1)), PASSO_MS);
    return () => window.clearInterval(id);
  }, [visto]);

  const accese = Math.min(tappa, TAPPE.length - 1);
  const progresso = tappa < 0 ? 0 : (accese / (TAPPE.length - 1)) * 100;

  return (
    <div ref={box} className="relative isolate overflow-hidden rounded-3xl border border-gold/25 bg-navy-dark p-4 shadow-[0_30px_80px_-40px_hsl(var(--gold)/0.45)] sm:p-7">
      <ReteViva className="-z-10 opacity-60" fili={0.12} />
      <style>{`
        @keyframes sd-ping { 0% { transform: scale(1); opacity: .7 } 100% { transform: scale(2.2); opacity: 0 } }
        .sd-ping { animation: sd-ping 1.4s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .sd-ping { animation: none !important; } }
      `}</style>

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
          <span className="relative flex h-2 w-2">
            <span className="sd-ping absolute inline-flex h-full w-full rounded-full bg-gold" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Una trattativa col metodo
        </span>
        <span className="rounded-full border border-border/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Esempio
        </span>
      </div>

      {/* Le cinque tappe */}
      <div className="relative mt-6">
        <div className="absolute left-[10%] right-[10%] top-5 h-[2px] bg-foreground/10" />
        <div
          className="absolute left-[10%] top-5 h-[2px] bg-gold transition-[width] duration-700 ease-out"
          style={{ width: `${progresso * 0.8}%` }}
        />
        <ol className="relative grid grid-cols-5">
          {TAPPE.map((t, i) => {
            const on = i <= accese;
            const ora = i === accese;
            return (
              <li key={t.nome} className="flex flex-col items-center text-center">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    ora
                      ? "scale-110 border-gold bg-gold text-background shadow-[0_0_24px_hsl(var(--gold)/0.7)]"
                      : on
                        ? "border-gold bg-gold/20 text-gold"
                        : "border-foreground/15 bg-navy-dark text-foreground/40"
                  }`}
                >
                  <t.icon className="h-[18px] w-[18px]" />
                </span>
                <span className={`mt-2 text-[10.5px] font-bold leading-tight sm:text-xs ${on ? "text-foreground" : "text-muted-foreground"}`}>{t.nome}</span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Il registro */}
      <ul className="mt-6 space-y-2.5">
        {TAPPE.map((t, i) => {
          // Tutte le righe ci sono sempre (lo spazio è riservato e la pagina non
          // salta); quelle future restano invisibili finché non tocca a loro.
          const futura = i > accese;
          const ora = i === accese;
          return (
            <li
              key={t.nome}
              aria-hidden={futura}
              className={`flex gap-3 rounded-xl border p-3 transition-all duration-500 sm:p-3.5 ${
                futura
                  ? "translate-y-2 border-transparent opacity-0"
                  : ora
                    ? "border-gold/50 bg-gold/10"
                    : "border-border/40 bg-background/30"
              }`}
            >
              <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${ora ? "bg-gold text-background" : "bg-gold/15 text-gold"}`}>
                <t.icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-baseline gap-2">
                  <span className="text-sm font-black text-foreground">{t.nome}</span>
                  <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">{t.quando}</span>
                </span>
                <span className={`mt-0.5 block text-[13px] leading-relaxed sm:text-sm ${ora ? "text-foreground/90" : "text-muted-foreground"}`}>{t.testo}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
