

## Piano: Aggiornare sezione credibilità con nuovi dati e testo

### Modifiche in `src/components/vendita-edile/VEOriginStorySection.tsx`

**1. Aggiornare i dati delle stat card (riga 7-14):**
- Screenshot reference: 4 card stile Marketing Edile (8 anni, €60M+, +2MLN, 47+)
- Adattare per Vendita Edile con i dati richiesti:
  - `8 anni` → nel settore edile
  - `€60M+` → Fatturato generato per i partner
  - `+2MLN` → Venduto dalla nostra azienda
  - `47+` → Aziende edili seguite in Italia
  - `2` → Showroom attivi (nuovo dato richiesto)
  - `<20%` → Candidature accettate (aggiornato da <14%)

**2. Aggiornare headline e sottotitolo (righe 145-152):**
- Titolo: "Perché **NOI** possiamo insegnartelo — e gli altri no"
- Sottotitolo: "La differenza tra chi PARLA di vendita e chi la FA ogni giorno."

**3. Aggiornare i counter `useCountUp` (righe 26-33) per allinearli ai nuovi valori.**

