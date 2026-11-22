import { CalendarDays, FileText, Handshake, MessageCircle, Phone } from "lucide-react";
import InkOrbitFeatures from "@/components/ui/ink-orbit-features";

/** Navy e oro del sito, per la sezione a riquadri. */
const PALETTE_NAVY_ORO: Record<string, string> = {
  "--ib-page": "hsl(213 65% 5%)",
  "--ib-hatch": "rgba(255,255,255,.035)",
  "--ib-paper": "hsl(213 60% 8%)",
  "--ib-card": "hsl(213 50% 10%)",
  "--ib-raise": "hsl(213 45% 13%)",
  "--ib-ink": "#f1f5f9",
  "--ib-accent": "hsl(45 93% 51%)",
  "--ib-soft": "#cbd5e1",
  "--ib-muted": "#94a3b8",
  "--ib-faint": "#64748b",
  "--ib-line": "rgba(255,255,255,.08)",
  "--ib-line-strong": "rgba(255,255,255,.16)",
  "--ib-bracket": "rgba(245,190,15,.35)",
  "--ib-inv": "hsl(45 93% 51%)",
  "--ib-inv-ink": "#0b1220",
  "--ib-radius": "28px",
  "--ib-card-radius": "18px",
};

/** Il metodo di vendita, in tre schemi vivi. Cifre d'esempio. */
export default function FunzioniVive() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <InkOrbitFeatures
          theme="dark"
          chip="Vendita"
          mark={Handshake}
          tag="Il metodo, ogni giorno"
          title={"Ogni trattativa,\n*sotto controllo*"}
          team={[
            { name: "Davide · preventivo Bianchi" },
            { name: "Elena · al sopralluogo" },
            { name: "Paolo · richiama Rossi" },
            { name: "Tu · riunione del lunedì" },
            { name: "Marco · in ferie", idle: true },
          ]}
          collaboration={{
            title: "Tu e i tuoi commerciali, sulla stessa trattativa",
            description: "Note del sopralluogo, preventivo e prossimo passo in un posto solo: se un commerciale manca, la trattativa non si ferma.",
          }}
          reports={{
            title: "La scheda di ogni trattativa, sempre aggiornata",
            description: "Chi decide, cosa gli serve, quando decide e cosa manca per firmare: la scrive il metodo, non la memoria.",
          }}
          labels={{ report: "TRATTATIVA N.", forecast: "PREVISIONE", syncing: "aggiorno", connected: "strumenti collegati", pred: "prev.", period: "sett.", formatValue: (v) => `${v}% chiusi` }}
          reportStart={212}
          integrations={{
            title: "Telefono, agenda, preventivi",
            description: "Le chiamate, gli appuntamenti, i preventivi e i messaggi finiscono nella stessa scheda del cliente.",
            tools: [
              { name: "Telefono", icon: Phone },
              { name: "Agenda", icon: CalendarDays },
              { name: "Preventivi", icon: FileText },
              { name: "WhatsApp", icon: MessageCircle },
            ],
          }}
          insights={{
            title: "Quante trattative chiudi",
            description: "Su cento preventivi presentati, quanti diventano contratti, settimana dopo settimana. Cifre d'esempio: passa il dito sul grafico.",
            values: [18, 19, 21, 20, 23, 25, 24, 27, 28, 30, 31, 33],
            forecastFrom: 8,
          }}
          palette={PALETTE_NAVY_ORO}
          style={{ padding: 0, background: "transparent" }}
        />
      </div>
    </section>
  );
}
