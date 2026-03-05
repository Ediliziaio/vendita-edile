

## Piano: Nuova sezione "Il mercato è cambiato. Le tue tecniche di vendita no."

### Nuovo file: `src/components/vendita-edile/VEMarketChangedSection.tsx`

Sezione con:
- **Titolo**: "Il mercato è cambiato. Le tue tecniche di vendita no."
- **Sottotitolo**: "Tre numeri che spiegano perché stai lavorando di più e guadagnando di meno:"
- **3 stat card** in griglia (1 col mobile, 3 col desktop), ciascuna con:
  - Stat grande con `useCountUp` (−22%, +15.000, 0%)
  - Descrizione
  - Fonte in badge piccolo
- **Blocco "Il problema vero non è il mercato"** con testo esplicativo e conclusione "È il sistema con cui vendi"
- **Bottone** variante `goldOutline`: "Guarda cosa fanno le aziende che crescono oggi" → scroll a sezione `#chi-vince`
- Stile coerente con le altre sezioni (bg-card, bordi gold/30, AnimatedSection)

### Modifica: `src/pages/Index.tsx`
- Importare `VEMarketChangedSection`
- Inserirlo tra `<VEHeroSection />` e `<VEMarketTimelineSection />`

