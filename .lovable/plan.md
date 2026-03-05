

## Piano: Ottimizzare Footer + Versione Mobile Completa

### 1. Footer — Compattare e migliorare

**File:** `src/components/Footer.tsx`

- Ridurre da 4 colonne a layout 2+2 su tablet, tutto stacked su mobile
- Unire "Contatti" e "Dati Aziendali" in un unico blocco su mobile per risparmiare spazio
- Ridurre gap e padding su mobile (`gap-8` invece di `gap-12`, `py-8` invece di `py-12`)
- Rimuovere animazioni `motion` dal footer (non servono, rallentano su mobile)
- Email troppo lunga su mobile: renderla cliccabile con `mailto:` e troncarla visivamente
- Bottom bar: centrare tutto su mobile, ridurre font size

### 2. Ottimizzazione Mobile Globale

**File:** `src/index.css` — `.section-padding`
- Ridurre padding verticale mobile: da `py-16` a `py-12` per sezioni meno distanziate

**File:** `src/components/vendita-edile/VEHeroSection.tsx`
- Hero heading troppo grande su schermi piccoli: aggiungere `text-xl` come base (attualmente parte da `text-2xl`)
- Box "€30.000-50.000": ridurre padding mobile, font sizes
- Pain points grid: assicurare `gap-2` su mobile
- Social proof bar: ridurre font delle cifre su mobile

**File:** `src/components/vendita-edile/VEPricingSection.tsx`
- Value stack cards: ridurre padding su mobile (`p-3` invece di `p-4`)
- Prezzo grande `€9.000`: ridurre da `text-5xl` a `text-4xl` su mobile
- Savings badge: assicurare non esca fuori dal card su schermi piccoli

**File:** `src/components/vendita-edile/VETrueCostSection.tsx`
- ROI timeline grid `grid-cols-2`: va bene, ma ridurre padding e font su mobile
- Calcolatore dialog: assicurare `max-h-[85vh]` e scroll fluido su mobile

**File:** `src/components/vendita-edile/VEWhoWinsSection.tsx`
- Comparison cards: ridurre padding interni su mobile
- Trait items: `text-base` invece di `text-lg` su mobile

**File:** `src/components/vendita-edile/VEDifferentiatorSection.tsx`
- Tags "Non e un corso": ridurre a `text-xs` su mobile, gap piu stretto
- Team image: `h-40` su mobile invece di `h-48`

**File:** `src/components/vendita-edile/VEGuaranteeSection.tsx`
- Sigillo 100%: ridurre dimensioni su mobile per non sovrapporsi al testo

**File:** `src/components/vendita-edile/VESelectionProcessSection.tsx`
- Steps grid: gia `sm:grid-cols-3`, ok
- Acceptance rate box: ridurre font counter su mobile

**File:** `src/components/vendita-edile/VEFAQSection.tsx`
- Accordion trigger: ridurre icon size e padding su mobile
- Answer content: rimuovere `pl-16` su mobile (gia fatto con `pl-0 md:pl-16`)

**File:** `src/components/vendita-edile/VEFinalCTASection.tsx`
- CTA button: assicurare `px-6 py-5` su mobile, non troppo grande
- Trust badges: `gap-2` su mobile

### File modificati (11 file totali)
1. `src/components/Footer.tsx`
2. `src/index.css`
3. `src/components/vendita-edile/VEHeroSection.tsx`
4. `src/components/vendita-edile/VEPricingSection.tsx`
5. `src/components/vendita-edile/VETrueCostSection.tsx`
6. `src/components/vendita-edile/VEWhoWinsSection.tsx`
7. `src/components/vendita-edile/VEDifferentiatorSection.tsx`
8. `src/components/vendita-edile/VEGuaranteeSection.tsx`
9. `src/components/vendita-edile/VESelectionProcessSection.tsx`
10. `src/components/vendita-edile/VEFAQSection.tsx`
11. `src/components/vendita-edile/VEFinalCTASection.tsx`

