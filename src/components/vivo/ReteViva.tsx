/**
 * ReteViva — rete di palline che ondeggiano e si collegano quando sono vicine.
 * Sfondo leggero per aperture e chiusure scure: dà l'idea di contatti che si
 * cercano e si trovano.
 *
 * Canvas, non SVG. Si ferma fuori schermo, a scheda nascosta e con
 * prefers-reduced-motion (disegna una volta, ferma). Su telefono meno palline
 * e un frame sì e uno no. Non intercetta il mouse: lo legge dalla finestra,
 * così pulsanti e link restano cliccabili.
 */
import { useEffect, useRef } from "react";

type Pallina = { x: number; y: number; vx: number; vy: number; r: number; accento: boolean; ox: number; oy: number };

type Props = {
  className?: string;
  /** Colore delle palline in evidenza, "r,g,b". */
  accento?: string;
  /** Colore delle altre palline e dei fili, "r,g,b". */
  base?: string;
  /** Opacità dei fili (0-1). */
  fili?: number;
};

export default function ReteViva({ className = "", accento = "247,190,14", base = "255,255,255", fili = 0.2 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leggero = window.matchMedia("(pointer: coarse)").matches;
    const passo = leggero ? 2 : 1;

    let w = 0;
    let h = 0;
    let palline: Pallina[] = [];
    const mouse = { x: -9999, y: -9999, attivo: false };

    const crea = () => {
      const max = leggero ? 42 : 80;
      const n = Math.round(Math.min(max, Math.max(22, (w * h) / (leggero ? 20000 : 16000))));
      let seed = 11;
      const rand = () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
      palline = Array.from({ length: n }, () => ({
        x: rand() * w,
        y: rand() * h,
        vx: (rand() - 0.5) * 0.25,
        vy: (rand() - 0.5) * 0.25,
        r: 1.2 + rand() * 2.2,
        accento: rand() < 0.42,
        ox: 0,
        oy: 0,
      }));
    };

    const misura = () => {
      const box = canvas.getBoundingClientRect();
      const dpr = Math.min(leggero ? 1.5 : 2, window.devicePixelRatio || 1);
      w = box.width;
      h = box.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      crea();
    };

    const DIST = leggero ? 115 : 130;
    const disegna = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of palline) {
        if (!ridotto) {
          p.x += p.vx * passo;
          p.y += p.vy * passo;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }
        let tx = 0;
        let ty = 0;
        if (mouse.attivo) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 170 && d > 0.1) {
            const f = Math.pow(1 - d / 170, 1.5) * 40;
            tx = (dx / d) * f;
            ty = (dy / d) * f;
          }
        }
        p.ox += (tx - p.ox) * 0.12;
        p.oy += (ty - p.oy) * 0.12;
      }
      for (let i = 0; i < palline.length; i++) {
        const a = palline[i];
        const ax = a.x + a.ox;
        const ay = a.y + a.oy;
        for (let j = i + 1; j < palline.length; j++) {
          const b = palline[j];
          const bx = b.x + b.ox;
          const by = b.y + b.oy;
          const d = Math.hypot(ax - bx, ay - by);
          if (d > DIST) continue;
          const vicino = mouse.attivo && Math.hypot((ax + bx) / 2 - mouse.x, (ay + by) / 2 - mouse.y) < 160;
          const alpha = (1 - d / DIST) * (vicino ? 0.7 : fili);
          ctx.strokeStyle = vicino ? `rgba(${accento},${alpha})` : `rgba(${base},${alpha})`;
          ctx.lineWidth = vicino ? 1.2 : 0.8;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
        if (mouse.attivo) {
          const d = Math.hypot(ax - mouse.x, ay - mouse.y);
          if (d < 190) {
            ctx.strokeStyle = `rgba(${accento},${(1 - d / 190) * 0.55})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      for (const p of palline) {
        const x = p.x + p.ox;
        const y = p.y + p.oy;
        const vicino = mouse.attivo ? Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 170) : 0;
        ctx.fillStyle = p.accento ? `rgba(${accento},${0.55 + vicino * 0.45})` : `rgba(${base},${0.32 + vicino * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, p.r * (1 + vicino * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let attiva = false;
    let salta = false;
    const giro = () => {
      salta = leggero && !salta;
      if (!salta) disegna();
      raf = requestAnimationFrame(giro);
    };
    const avvia = () => {
      if (attiva || ridotto) return;
      attiva = true;
      raf = requestAnimationFrame(giro);
    };
    const ferma = () => {
      attiva = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const box = canvas.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      mouse.attivo = x >= 0 && y >= 0 && x <= box.width && y <= box.height;
      mouse.x = x;
      mouse.y = y;
    };

    let visibile = false;
    let ro: ResizeObserver | undefined;
    let io: IntersectionObserver | undefined;
    const onVis = () => (document.hidden || !visibile ? ferma() : avvia());

    // Parte quando il browser ha finito il lavoro dell'avvio: la rete è uno
    // sfondo, non deve rubare tempo al primo disegno della pagina.
    const parti = () => {
      misura();
      disegna();
      ro = new ResizeObserver(() => {
        misura();
        disegna();
      });
      ro.observe(canvas);
      io = new IntersectionObserver(([e]) => {
        visibile = e.isIntersecting;
        if (visibile && !document.hidden) avvia();
        else ferma();
      });
      io.observe(canvas);
      document.addEventListener("visibilitychange", onVis);
      if (!leggero) window.addEventListener("pointermove", onMove, { passive: true });
    };
    type W = Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const win = window as W;
    let idle = 0;
    let tmo = 0;
    if (win.requestIdleCallback) idle = win.requestIdleCallback(parti, { timeout: 900 });
    else tmo = window.setTimeout(parti, 150);

    return () => {
      if (idle && win.cancelIdleCallback) win.cancelIdleCallback(idle);
      window.clearTimeout(tmo);
      ferma();
      ro?.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
    };
  }, [accento, base, fili]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
