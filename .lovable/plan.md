

## Piano: Integrare la sezione Credibilità dentro la Origin Story

L'utente vuole che tutto il contenuto attualmente in `VEWhyWeCanSection` (badge, headline, 6 stat card, blocco provvigione, tabella confronto) venga spostato **dentro** `VEOriginStorySection`, subito dopo la chiusura "Non un corso. Un sistema costruito sul campo."

### 1. Modifica: `src/components/vendita-edile/VEOriginStorySection.tsx`

Dopo il blocco di chiusura (riga 82), aggiungere tutto il contenuto di credibilità:
- Badge "Non siamo formatori. Siamo imprenditori edili attivi."
- Headline "PERCHÉ NOI POSSIAMO INSEGNARTELO — e gli altri no"
- Sottotitolo descrittivo
- Griglia 2x3 con le 6 stat card (con `useCountUp` e icone)
- Blocco provvigione ("Il modello a provvigione non è un dettaglio. È la prova.")
- Tabella confronto "Gli altri ti vendono vs. Noi facciamo" (6 righe)

Importare le dipendenze necessarie: `motion`, `Shield`, `Check`, `X`, `Calendar`, `TrendingUp`, `Users`, `DollarSign`, `Building2`, `Filter`, `StaggerContainer`, `StaggerItem`, `useCountUp`.

### 2. Modifica: `src/pages/Index.tsx`

- Rimuovere l'import e l'uso di `VEWhyWeCanSection` (il suo contenuto è ora dentro Origin Story)
- Aggiornare i commenti dell'ordine sezioni

### 3. Opzionale: eliminare `src/components/vendita-edile/VEWhyWeCanSection.tsx`

Il file non sarà più utilizzato.

