

## Piano: Origin Story + Credibilità rinnovata

L'utente chiede di aggiungere dopo la sezione Pain Points due nuove sezioni: una **Origin Story** (storia di Flo) e una **sezione Credibilità** rinnovata che sostituisce l'attuale `VEWhyWeCanSection`.

### 1. Nuovo file: `src/components/vendita-edile/VEOriginStorySection.tsx`

Sezione narrativa lunga con la storia di Flo, divisa in blocchi sequenziali con AnimatedSection:
- **Intro**: "Perché ho creato Vendita Edile®..." + presentazione di Flo e Marketing Edile (modello a provvigione)
- **Il problema scoperto**: lead generati ma persi in trattativa → il vero problema è nella vendita
- **Capitolo 1**: Apertura I-Profili fine 2023, €400K in 3 mesi senza sconto in fattura
- **Capitolo 2**: La realtà operativa — errori, margini che spariscono
- **Capitolo 3**: Ossessione sul margine per commessa, sistema integrato vendita + controllo operativo
- **Capitolo 4**: Da due laboratori (Marketing Edile + I-Profili) nasce Vendita Edile®

Layout: blocchi di testo full-width su card con bordo gold sottile, titoli dei capitoli in gold, testo in foreground/muted-foreground. Stile narrativo, non grid.

### 2. Riscrittura: `src/components/vendita-edile/VEWhyWeCanSection.tsx`

Sostituzione completa del contenuto con la nuova versione "Credibilità":
- **Header**: "Perché NOI possiamo insegnartelo — e gli altri no"
- **Sottotitolo**: "Non siamo formatori. Siamo imprenditori edili attivi..."
- **6 stat card** aggiornate con i nuovi dati:
  - 8 anni con Marketing Edile (solo a provvigione)
  - €400K venduti primi 3 mesi I-Profili
  - 47+ aziende affiancate
  - €0,8M+ fatturato generato per i clienti
  - 2 aziende attive (Marketing Edile + I-Profili)
  - <14% candidature accettate
- **Blocco provvigione**: "Il modello a provvigione non è un dettaglio. È la prova." con spiegazione del DNA
- **Tabella confronto** aggiornata con le nuove righe (6 righe invece di 5, include la riga provvigione)

### 3. Modifica: `src/pages/Index.tsx`

- Importare `VEOriginStorySection`
- Inserirlo dopo `<VEPainPointsSection />` e prima di `<VETrueCostSection />`
- `VEWhyWeCanSection` resta nella stessa posizione ma con contenuto aggiornato

Ordine risultante delle sezioni:
1. Hero → 2. Market Changed → 3. Timeline → 4. Pain Points → **5. Origin Story (NUOVA)** → 6. True Cost → 7. Who Wins → **8. Credibilità (AGGIORNATA)** → 9. Results → ...

