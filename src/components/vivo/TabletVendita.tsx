/**
 * TabletVendita — la trattativa vista dal tablet del commerciale.
 * Un tablet vero mostra, una schermata dopo l'altra, come si porta un cliente
 * alla firma col metodo: cosa sai di lui, cosa hai scritto al sopralluogo,
 * il preventivo legato ai suoi bisogni, l'obiezione gestita senza sconto,
 * i numeri della settimana (o l'ordine firmato). Accanto, le tappe si accendono.
 *
 * Esempio di fantasia (lo dice l'etichetta). Parte solo quando è sullo schermo;
 * toccando una tappa si salta lì. Con prefers-reduced-motion resta fermo.
 */
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Check, Mic, ShieldCheck } from "lucide-react";
import { pezziVendita, pezziVenditaSerramenti, type PezzoEsploso } from "./pezziVendita";

const PASSO_MS = 4000;
const LARGO = 560; // tela del tablet, poi scalata alla larghezza disponibile
const STRETTO = 400; // sul telefono la tela è più stretta, così il testo resta leggibile
const LH = 380;

const CSS = `
@keyframes tv-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
@keyframes tv-grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes tv-growy { from { transform: scaleY(0) } to { transform: scaleY(1) } }
@keyframes tv-draw { from { stroke-dashoffset: 1 } to { stroke-dashoffset: 0 } }
@keyframes tv-strike { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes tv-wave { 0%,100% { transform: scaleY(.3) } 50% { transform: scaleY(1) } }
.tv-in { opacity: 0; animation: tv-in .5s cubic-bezier(.2,.8,.2,1) forwards; }
.tv-grow { transform: scaleX(0); transform-origin: left; animation: tv-grow .9s cubic-bezier(.2,.8,.2,1) forwards; }
.tv-growy { transform: scaleY(0); transform-origin: bottom; animation: tv-growy .9s cubic-bezier(.2,.8,.2,1) forwards; }
.tv-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: tv-draw 1.4s ease-out forwards; }
.tv-strike { transform: scaleX(0); transform-origin: left; animation: tv-strike .4s ease-out forwards; }
.tv-wave { animation: tv-wave .8s ease-in-out infinite; transform-origin: center; }
.tv-bar { transform-origin: left; animation: tv-grow linear forwards; }
.tv-stretto .grid-cols-\\[1fr_150px\\], .tv-stretto .grid-cols-\\[1fr_170px\\] { grid-template-columns: 1fr 110px; }
.tv-stretto .grid-cols-2 { gap: .75rem; }
@media (prefers-reduced-motion: reduce) {
  .tv-in, .tv-grow, .tv-growy, .tv-draw, .tv-strike, .tv-wave, .tv-bar { animation: none !important; opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; }
}
`;
const d = (s: number) => ({ animationDelay: `${s}s` });

// ───────────── pezzi comuni delle schermate ─────────────
const Testata = ({ titolo, sotto, destra }: { titolo: string; sotto: string; destra?: ReactNode }) => (
  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{sotto}</p>
      <p className="text-[17px] font-black text-slate-900">{titolo}</p>
    </div>
    {destra}
  </div>
);
const Bollino = ({ children, tono = "oro" }: { children: ReactNode; tono?: "oro" | "verde" | "rosso" }) => (
  <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${tono === "verde" ? "bg-emerald-100 text-emerald-700" : tono === "rosso" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-700"}`}>{children}</span>
);

// ───────────── le schermate ─────────────
function Cartella() {
  const campi: [string, string][] = [
    ["Chi decide", "Tutti e due i coniugi"],
    ["Il problema", "Casa fredda, bollette alte"],
    ["Cosa li frena", "Paura dei lavori lunghi"],
    ["Budget", "Già pensato, non detto"],
    ["Quando decidono", "Entro marzo"],
  ];
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <Testata sotto="Cartella del cliente" titolo="Famiglia Bianchi · Monza" destra={<Bollino tono="verde">Cliente caldo</Bollino>} />
      <div className="grid flex-1 grid-cols-[1fr_150px] gap-4 p-5">
        <div className="space-y-2">
          {campi.map(([k, v], i) => (
            <div key={k} className="tv-in flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2" style={d(0.2 + i * 0.35)}>
              <span className="text-[11px] font-semibold text-slate-400">{k}</span>
              <span className="flex items-center gap-1.5 text-[12px] font-bold text-slate-800">{v}<Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={3} /></span>
            </div>
          ))}
        </div>
        <div className="tv-in rounded-xl bg-slate-900 p-3 text-white" style={d(2)}>
          <p className="text-[9px] font-bold uppercase tracking-widest text-amber-300">Prossimo passo</p>
          <p className="mt-1.5 text-[12px] font-bold leading-snug">Sopralluogo con tutti e due, mercoledì 17:30</p>
          <p className="mt-3 text-[9px] text-white/50">Senza chi decide non si presenta nessun preventivo.</p>
        </div>
      </div>
    </div>
  );
}

function Telefonata() {
  const righe: [string, string][] = [
    ["Cosa non le piace delle finestre di oggi?", "Spifferi e rumore della strada"],
    ["In casa chi decide insieme a lei?", "Mio marito"],
    ["Quando vorreste averle montate?", "Prima dell'inverno"],
  ];
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <Testata sotto="Prima telefonata · 6 min" titolo="Sig.ra Bianchi" destra={
        <span className="flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-black text-white">
          <Mic className="h-3.5 w-3.5" />
          <span className="flex h-3 items-center gap-[2px]">{[0, 1, 2, 3].map((k) => <span key={k} className="tv-wave block h-full w-[2px] rounded bg-white" style={d(k * 0.15)} />)}</span>
          In linea
        </span>
      } />
      <div className="flex-1 space-y-2.5 p-5">
        {righe.map(([q, a], i) => (
          <div key={q} className="tv-in" style={d(0.2 + i * 0.6)}>
            <p className="text-[11px] font-semibold text-slate-500">Tu: {q}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[12px] font-bold text-slate-800 shadow-sm">«{a}» <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={3} /></p>
          </div>
        ))}
        <p className="tv-in text-[11px] font-bold text-slate-400" style={d(2.2)}>Il listino non l'hai nemmeno nominato.</p>
      </div>
      <div className="tv-in mx-5 mb-4 rounded-lg bg-amber-100 px-3 py-2 text-[11px] font-black text-amber-800" style={d(2.6)}>
        Sopralluogo fissato: mercoledì 17:30, con tutti e due
      </div>
    </div>
  );
}

function Sopralluogo() {
  const note = ["Camera: rumore dalla strada, dorme male", "Soggiorno: spifferi dalla portafinestra", "Bolletta gas: 220 € al mese d'inverno", "6 finestre + 1 portafinestra, misure prese"];
  return (
    <div className="flex h-full flex-col bg-[#fffdf5]">
      <Testata sotto="Note del sopralluogo" titolo="Via Manzoni 8 · mercoledì" destra={<Bollino>4 bisogni scritti</Bollino>} />
      <div className="grid flex-1 grid-cols-[1fr_170px] gap-4 p-5">
        <div className="space-y-2.5">
          {note.map((n, i) => (
            <p key={n} className="tv-in flex items-start gap-2 border-b border-dashed border-amber-200 pb-1.5 text-[12.5px] font-semibold text-slate-700" style={d(0.2 + i * 0.5)}>
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-amber-400 text-[9px] font-black text-white">{i + 1}</span>
              {n}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["bg-sky-200", "bg-stone-200", "bg-sky-100", "bg-amber-100"].map((c, i) => (
            <div key={c} className={`tv-in relative rounded-md ${c}`} style={d(0.6 + i * 0.3)}>
              <div className="absolute inset-3 rounded-sm border-[3px] border-white/90" />
              <div className="absolute inset-y-3 left-1/2 w-[3px] -translate-x-1/2 bg-white/90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Preventivo() {
  const voci: [string, string, string][] = [
    ["Vetro acustico in camera", "il rumore della strada", "1.380 €"],
    ["Triplo vetro basso emissivo", "la bolletta da 220 €", "3.940 €"],
    ["Posa con nastri sigillanti", "gli spifferi in soggiorno", "1.150 €"],
    ["Smontaggio e smaltimento", "lavori in un giorno solo", "480 €"],
  ];
  return (
    <div className="flex h-full flex-col bg-white">
      <Testata sotto="Preventivo presentato di persona" titolo="Famiglia Bianchi" destra={<Bollino tono="verde">Al tavolo, non per email</Bollino>} />
      <div className="flex-1 space-y-2 px-5 py-4">
        {voci.map(([v, perche, euro], i) => (
          <div key={v} className="tv-in grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-slate-200 px-3 py-2" style={d(0.2 + i * 0.45)}>
            <div>
              <p className="text-[12.5px] font-bold text-slate-800">{v}</p>
              <p className="text-[10.5px] font-semibold text-amber-600">→ risolve {perche}</p>
            </div>
            <span className="text-[12.5px] font-black tabular-nums text-slate-900">{euro}</span>
          </div>
        ))}
      </div>
      <div className="tv-in flex items-center justify-between bg-slate-900 px-5 py-3 text-white" style={d(2.2)}>
        <span className="text-[11px] font-semibold text-white/60">Ogni voce legata a un bisogno detto da loro</span>
        <span className="text-[18px] font-black tabular-nums">6.950 €</span>
      </div>
    </div>
  );
}

function Obiezione({ frase }: { frase: string }) {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <Testata sotto="Margine protetto" titolo="L'obiezione, gestita" destra={<Bollino tono="verde">Sconto: 0%</Bollino>} />
      <div className="flex-1 space-y-3 p-5">
        <div className="tv-in max-w-[75%] rounded-2xl rounded-tl-none bg-white px-4 py-2.5 text-[13px] font-bold text-slate-800 shadow-sm" style={d(0.2)}>«{frase}»</div>
        <div className="tv-in ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-slate-900 px-4 py-2.5 text-[12px] leading-snug text-white" style={d(0.9)}>
          Capisco. Mettiamo i due preventivi uno accanto all'altro, voce per voce: vetro, posa, garanzia. Poi decidete voi.
        </div>
        <div className="tv-in flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3" style={d(1.8)}>
          <ShieldCheck className="h-8 w-8 shrink-0 text-emerald-500" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-slate-500">Prezzo</span>
              <span className="tabular-nums text-slate-900">
                <span className="relative mr-2 text-slate-400">5.900 €<span className="tv-strike absolute inset-x-0 top-1/2 h-[2px] bg-red-500" style={d(2.3)} /></span>
                6.950 € confermato
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="tv-grow h-full w-[92%] rounded-full bg-emerald-500" style={d(2.1)} /></div>
            <p className="mt-1 text-[10px] font-semibold text-slate-400">Margine intatto: il cliente ha capito cosa compra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Numeri() {
  const righe: [string, number, string][] = [["Chiamate", 42, "bg-slate-400"], ["Appuntamenti", 18, "bg-slate-600"], ["Preventivi al tavolo", 12, "bg-amber-400"], ["Firme", 7, "bg-emerald-500"]];
  return (
    <div className="flex h-full flex-col bg-white">
      <Testata sotto="Numeri del commerciale" titolo="Settimana 46 · Davide" destra={<Bollino tono="verde">Chiude 7 su 12</Bollino>} />
      <div className="flex-1 space-y-4 px-5 py-5">
        {righe.map(([n, v, c], i) => (
          <div key={n} className="tv-in" style={d(0.15 + i * 0.3)}>
            <div className="flex justify-between text-[12px] font-bold"><span className="text-slate-600">{n}</span><span className="tabular-nums text-slate-900">{v}</span></div>
            <div className="mt-1.5 h-3 rounded-full bg-slate-100">
              <div className={`tv-grow h-full rounded-full ${c}`} style={{ width: `${(v / 42) * 100}%`, ...d(0.3 + i * 0.3) }} />
            </div>
          </div>
        ))}
        <p className="tv-in rounded-lg bg-amber-50 px-3 py-2 text-[11px] font-bold text-amber-800" style={d(1.8)}>
          Dove si perde: 6 preventivi su 12 senza data di decisione. Lunedì si parte da lì.
        </p>
      </div>
    </div>
  );
}

function Firma() {
  return (
    <div className="flex h-full flex-col bg-white">
      <Testata sotto="Ordine" titolo="Contratto n. 2026/118" destra={<Bollino tono="verde">Firmato senza sconto</Bollino>} />
      <div className="grid flex-1 grid-cols-2 gap-5 p-5">
        <div className="space-y-2">
          {[["Acconto incassato", "30%"], ["Data di posa", "lun 3 marzo"], ["Durata lavori", "1 giorno"]].map(([k, v], i) => (
            <div key={k} className="tv-in flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2" style={d(1.4 + i * 0.35)}>
              <span className="text-[11px] font-semibold text-slate-400">{k}</span>
              <span className="text-[12px] font-black text-slate-900">{v}</span>
            </div>
          ))}
          <p className="tv-in pt-1 text-[11px] font-bold text-emerald-600" style={d(2.6)}>E ti hanno già dato il numero del vicino.</p>
        </div>
        <div className="flex flex-col justify-end rounded-xl border border-slate-200 bg-slate-50 p-3">
          <svg viewBox="0 0 200 80" className="h-24 w-full">
            <path className="tv-draw" pathLength={1} d="M10 55c20-30 30-40 38-20s-6 30 4 18 18-38 28-30-4 30 8 24 14-26 26-22 2 22 14 18 20-14 30-18 14 6 30-4" fill="none" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="border-t border-slate-300 pt-1 text-[10px] font-semibold text-slate-400">Firma del cliente</div>
        </div>
      </div>
    </div>
  );
}

const VARIANTI = {
  metodo: { moduli: pezziVendita, schermate: [Cartella, Sopralluogo, Preventivo, () => <Obiezione frase="Un altro me lo fa a mille euro in meno" />, Numeri] },
  serramenti: { moduli: pezziVenditaSerramenti, schermate: [Telefonata, Sopralluogo, Preventivo, () => <Obiezione frase="Ci dobbiamo pensare, le facciamo sapere" />, Firma] },
};

export default function TabletVendita({ variante = "metodo", titolo = "Vendita Edile®" }: { variante?: keyof typeof VARIANTI; titolo?: string }) {
  const { moduli, schermate } = VARIANTI[variante];
  const box = useRef<HTMLDivElement>(null);
  const telo = useRef<HTMLDivElement>(null);
  const [scala, setScala] = useState(1);
  const [LW, setLW] = useState(LARGO);
  const [visto, setVisto] = useState(false);
  const [passo, setPasso] = useState(0);
  const [pausaFino, setPausaFino] = useState(0);
  const [fermo, setFermo] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFermo(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisto(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = telo.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width - 20;
      const tela = w < 460 ? STRETTO : LARGO;
      setLW(tela);
      setScala(Math.min(1, w / tela));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!visto || fermo) return;
    const attesa = Math.max(PASSO_MS, pausaFino - Date.now());
    const t = window.setTimeout(() => setPasso((p) => (p + 1) % schermate.length), attesa);
    return () => window.clearTimeout(t);
  }, [visto, fermo, passo, pausaFino, schermate.length]);

  const scegli = (i: number) => {
    setPasso(i);
    setPausaFino(Date.now() + 9000);
  };
  const Schermo = schermate[passo];
  const corrente: PezzoEsploso = moduli[passo];

  return (
    <div ref={box} className="relative isolate overflow-hidden rounded-[28px] border border-gold/25 bg-navy-dark p-4 shadow-[0_30px_80px_-40px_hsl(var(--gold)/0.45)] sm:p-7">
      <style>{CSS}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-gold sm:text-[10px]">{titolo}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-300 sm:text-[10px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">Dal tablet del commerciale · </span>Esempio
        </span>
      </div>

      <div className="mt-6 grid items-center gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-8">
        {/* il tablet */}
        <div ref={telo} className="min-w-0">
          <div className="mx-auto rounded-[22px] border border-white/15 bg-[#0b0f17] p-[10px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]" style={{ width: LW * scala + 20, maxWidth: "100%" }}>
            <div className="relative overflow-hidden rounded-[14px] bg-white" style={{ width: LW * scala, height: LH * scala }}>
              <div style={{ width: LW, height: LH, transform: `scale(${scala})`, transformOrigin: "top left" }}>
                <div key={passo} className={`tv-in h-full ${LW === STRETTO ? "tv-stretto" : ""}`} style={{ animationDuration: ".45s" }}>
                  <Schermo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* le tappe */}
        <div className="min-w-0">
          <div className="lg:hidden">
            <div className="flex items-center justify-between gap-1">
              {moduli.map((m, i) => {
                const Icon = m.icon;
                return (
                  <button key={m.name} type="button" onClick={() => scegli(i)} aria-label={m.name}
                    className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${i === passo ? "border-gold bg-gold text-navy-dark" : i < passo ? "border-gold/50 bg-gold/15 text-gold" : "border-white/15 bg-white/5 text-white/50"}`}>
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            <div key={`m${passo}`} className="tv-in mt-4 rounded-2xl border border-gold/25 bg-white/[0.04] p-4">
              <p className="text-[11px] font-black uppercase tracking-widest text-gold">Tappa {passo + 1} di {moduli.length}</p>
              <p className="mt-1 text-base font-black text-foreground">{corrente.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{corrente.desc}</p>
            </div>
          </div>

          <ol className="relative hidden space-y-1.5 lg:block">
            <span className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-white/10" aria-hidden />
            {moduli.map((m, i) => {
              const Icon = m.icon;
              const on = i === passo;
              const fatto = i < passo;
              return (
                <li key={m.name}>
                  <button type="button" onClick={() => scegli(i)} onMouseEnter={() => scegli(i)}
                    className={`relative flex w-full items-start gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${on ? "border-gold/60 bg-gold/[0.08] shadow-[0_10px_30px_-12px_hsl(var(--gold)/0.6)]" : "border-transparent hover:bg-white/[0.03]"}`}>
                    <span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${on ? "border-gold bg-gold text-navy-dark" : fatto ? "border-gold/50 bg-navy-dark text-gold" : "border-white/15 bg-navy-dark text-white/40"}`}>
                      {fatto ? <Check className="h-5 w-5" strokeWidth={3} /> : <Icon className="h-5 w-5" />}
                    </span>
                    <span className="min-w-0 pt-1">
                      <span className={`block text-base font-black transition-colors ${on ? "text-foreground" : fatto ? "text-foreground/80" : "text-foreground/50"}`}>{m.name}</span>
                      <span className={`grid transition-all duration-300 ${on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{m.desc}</span>
                      </span>
                      {on && visto && !fermo && (
                        <span className="mt-2 block h-[3px] overflow-hidden rounded-full bg-white/10">
                          <span key={`b${passo}-${pausaFino}`} className="tv-bar block h-full bg-gold" style={{ animationDuration: `${Math.max(PASSO_MS, pausaFino - Date.now())}ms` }} />
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
