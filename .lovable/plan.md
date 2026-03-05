

## Piano: Redesign Origin Story con layout foto + testo e accenti oro

Ispirandosi al layout di Marketing Edile (screenshot di riferimento), la sezione Origin Story viene ridisegnata con:

### 1. Aggiungere la foto di Flo al progetto
- Copiare `user-uploads://a6eb39d7-c720-4519-a6f5-488e33ddf583_2.JPG` in `src/assets/flo-profili.jpg`

### 2. Ridisegnare il blocco narrativo in `VEOriginStorySection.tsx`

**Layout a 2 colonne (desktop):**
- Colonna sinistra (~35%): foto di Flo con bordo arrotondato, sotto la foto: "**Flo**" + "Fondatore, Vendita Edile®" come didascalia
- Colonna destra (~65%): titolo + testo narrativo
- Su mobile: foto sopra, testo sotto (stack verticale)

**Titolo aggiornato:** "Perché ho creato Marketing Edile — e perché lavoriamo solo a provvigione" → adattato per Vendita Edile: "Perché ho creato Vendita Edile® — e cosa mi ha insegnato partire da zero"

**Testo con accenti oro (secondary/gold):**
- Parole chiave evidenziate in oro invece che in bianco: "Flo", "8 anni", "lavoriamo solo a provvigione", "€400.000 di vendite", "2 milioni di vendite", "Vendita Edile®"
- Il testo segue lo stesso stile del reference: paragrafi puliti, font regolare, highlights in oro

**Chiusura con linea separatrice + frase finale in oro:**
- Separatore orizzontale
- "Oggi non portiamo solo clienti. **Portiamo clienti e il sistema per chiuderli.**" in oro

### 3. Stat cards, provvigione block, comparison table
- Restano sotto il blocco narrativo come già implementati
- Aggiornare i colori dei numeri nelle stat card da `text-primary` (bianco) a `text-secondary` (oro) per coerenza con il nuovo stile
- Aggiornare anche il blocco provvigione e la tabella confronto con accenti oro dove appropriato

