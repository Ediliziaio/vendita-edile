

## Piano: Team più grande con foto AI e descrizioni

**File:** `src/components/vendita-edile/VEDifferentiatorSection.tsx`

### Cosa fare

1. **Rimuovere** la riga "Questo messaggio potrebbe valere €100.000/€500.000+" (riga 127-129)
2. **Ingrandire** le card del team e aggiungere descrizioni per ogni membro
3. **Generare foto AI** per i 5 membri usando il modello di generazione immagini integrato, salvandole in `src/assets/`

### Nuovo layout team

- Titolo: "Il nostro team sul campo" (manteniamo)
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` con card più grandi
- Ogni card:
  - Foto AI circolare più grande (`w-28 h-28` invece di `w-20 h-20`)
  - Nome e ruolo
  - **Breve descrizione** (1-2 righe) del contributo di ogni membro
- Descrizioni esempio:
  - Fondatore → "Ha costruito 3 aziende edili da zero. Ora guida il metodo."
  - Sales Manager → "Oltre 2.000 trattative chiuse nel settore serramenti."
  - Consulente Operativo → "Specializzato in ottimizzazione processi di vendita."
  - Account Manager → "Segue ogni cliente dal primo contatto alla chiusura."
  - Strategist → "Analizza i numeri e costruisce strategie su misura."

### Generazione immagini AI
- Creare un edge function che genera 5 ritratti professionali maschili usando il modello `google/gemini-2.5-flash-image`
- Prompt: ritratti professionali di imprenditori edili italiani, sfondo scuro, stile corporate
- Salvare le immagini come asset statici nel progetto

### File modificati
- `src/components/vendita-edile/VEDifferentiatorSection.tsx` — rimuovere headline valore, ingrandire team, aggiungere descrizioni e foto AI

