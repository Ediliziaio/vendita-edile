

## Piano: Snellire la sezione "Chi Vince Oggi in Edilizia"

Rimuovere elementi ridondanti e compattare la sezione mantenendo l'impatto. Modifiche nel file `src/components/vendita-edile/VEWhoWinsSection.tsx`:

### Cosa eliminare
1. **Truth Block** ("La vendita edile NON è marketing...") — ridondante, rallenta il flusso
2. **Tabella "5 Principi"** — troppo lunga, i concetti sono già espressi nella comparazione Chi Perde/Chi Vince
3. **Box "Il Profilo del Vincitore"** — lista di 6 punti che ripete concetti già presenti
4. **Testo di transizione finale** ("Cosa sanno loro...") — superfluo

### Cosa mantenere (compattato)
1. **Badge + Headline** — snelliti
2. **Comparazione Chi Perde vs Chi Vince** — il cuore della sezione, resta intatto
3. **CTA "Diventa Un Vincitore"** — resta

### Risultato
Da ~5 sotto-sezioni a 3 blocchi essenziali: headline → comparazione → CTA. Sezione molto più rapida da leggere.

