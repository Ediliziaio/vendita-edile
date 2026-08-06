import { Quote, Star } from "lucide-react";

// Stesse testimonianze dei casi studio in home (VECaseStudiesSection):
// un'unica fonte di verità "umana" riusata sulle landing pubblicitarie.
const testimonials = [
  {
    quote:
      "Prima perdevo il 70% dei preventivi. Oggi chiudo 1 su 2. Il metodo funziona perché è pensato per chi lavora in cantiere, non per marketer.",
    name: "Marco R.",
    role: "Titolare",
    company: "Serramenti Milano",
  },
  {
    quote:
      "Ho smesso di fare sconti per vincere i lavori. Ora i clienti scelgono me per il valore, non per il prezzo più basso.",
    name: "Giuseppe T.",
    role: "Imprenditore Edile",
    company: "Edil Roma Costruzioni",
  },
  {
    quote:
      "In 3 mesi abbiamo strutturato un processo vendita che prima non esisteva. I numeri parlano da soli: +40% di fatturato.",
    name: "Andrea L.",
    role: "Direttore Commerciale",
    company: "Solar Toscana",
  },
];

/**
 * Striscia di prova sociale per le landing pubblicitarie:
 * 3 testimonianze reali con nome, ruolo e azienda.
 */
export function LandingTestimonials({ title }: { title?: string }) {
  return (
    <section className="border-t border-border px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">
          {title ?? (
            <>
              Cosa Dicono <span className="text-secondary">Gli Imprenditori</span>
            </>
          )}
        </h2>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 text-left"
            >
              <Quote className="h-6 w-6 text-secondary" aria-hidden />
              <div className="mt-3 flex gap-0.5" aria-label="5 stelle su 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-extrabold">{t.name}</span>{" "}
                <span className="text-muted-foreground">
                  — {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
