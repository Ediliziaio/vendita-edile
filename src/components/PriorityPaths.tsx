import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import data from "./priority-paths.json";

/**
 * Le guide da leggere prima di parlarci: quattro collegamenti agli articoli
 * principali (servono anche a Google per capire come sono legate le pagine).
 * Nello stile del sito: fondo scuro, oro, schede che si accendono al passaggio.
 */
export function PriorityPaths() {
  return (
    <section id="percorsi-prioritari" aria-labelledby="percorsi-prioritari-titolo" className="relative px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-gold">
            <BookOpen className="h-3.5 w-3.5" />
            Le guide da leggere
          </span>
          <h2 id="percorsi-prioritari-titolo" className="mt-4 text-2xl font-black leading-tight text-foreground sm:text-3xl">
            {data.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{data.intro}</p>
        </div>
        <ul className="scorri-mobile mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.links.map((link, i) => (
            <li key={link.href} className="min-w-0">
              <Link
                to={link.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/[0.06] hover:shadow-[0_18px_40px_-20px_hsl(var(--gold)/0.6)]"
              >
                <span className="text-xs font-black tabular-nums text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-2 text-base font-black leading-snug text-foreground">{link.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{link.description}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold">
                  Leggi la guida
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
