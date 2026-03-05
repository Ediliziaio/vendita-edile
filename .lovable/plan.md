

## Piano: Riscrivere la sezione Pain Points

### Modifica: `src/components/vendita-edile/VEPainPointsSection.tsx`

Riscrittura completa del contenuto. La struttura cambia da 6 card in griglia a **4 blocchi verticali** più narrativi, ciascuno con etichetta (es. "IL PROBLEMA VERO"), titolo, freccia con spiegazione, e costo reale.

**Header:**
- Titolo: "Quanti di questi ti **costano ogni mese**?"
- Sottotitolo: "Ogni punto che riconosci vale in media €8.000–€12.000/anno di margine perso. Conta."

**4 blocchi:**
1. **IL PROBLEMA VERO** — "20–30 preventivi al mese → 2–3 chiusure" / Costo: €28.000/mese
2. **IL SINTOMO CHE VEDI** — "Ti faccio lo sconto, così chiudiamo" / Costo: −15–20% margine
3. **LA BUGIA CHE TI HAI RACCONTATO** — "I miei commerciali sono bravi..." / Nessun badge costo
4. **LA TRAPPOLA NASCOSTA** — "Lavori 10–12 ore al giorno..." / Nessun badge costo

**Blocco conclusivo:**
- "Se hai riconosciuto almeno 2 punti: stai perdendo €30.000–€50.000 al mese."
- "Non perché sei incapace. Perché nessuno ti ha mai dato un sistema costruito per questo mercato, in questo momento."

**CTA:** "Calcola il tuo costo reale" → scroll a `#costo-reale`

Layout: card singole full-width impilate verticalmente, con etichetta gold in alto a sinistra e stile coerente con il resto del sito.

