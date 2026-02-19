

## Piano: Ottimizzazione Mobile Completa

### Panoramica
Ottimizzazione globale dell'esperienza mobile su tutte le sezioni del sito, con focus su spaziature, dimensioni font, leggibilita e usabilita su schermi piccoli (320px-414px).

---

### 1. CSS Globale - `src/index.css`

**Ridurre padding delle sezioni su mobile:**
- `section-padding`: cambiare da `px-6 py-24` a `px-4 py-16 md:px-6 md:py-24 lg:px-24 lg:py-32 xl:py-40`
- `container-narrow`: invariato (gia responsive)
- `heading-section`: ridurre da `text-3xl` a `text-2xl` su mobile: `text-2xl md:text-3xl lg:text-5xl xl:text-6xl`

---

### 2. Hero Section - `VEHeroSection.tsx`

- **Badge FERMATI**: ridurre padding e font su mobile: `px-3 py-2 md:px-5 md:py-2.5`, testo `text-xs md:text-sm`
- **Titolo h1**: ridurre da `text-3xl` a `text-2xl`: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- **Box "Verita Scomoda"**: padding `p-4 md:p-6 lg:p-8`, importo `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
- **Pain points grid**: mantieni `grid-cols-1` su mobile, ridurre padding card `p-3 md:p-4`
- **Social proof bar**: stack verticale su mobile con `flex-col sm:flex-row flex-wrap`, ridurre gap `gap-3 md:gap-6 lg:gap-10`
- **CTA button**: ridurre padding `px-6 py-5 md:px-10 md:py-7`, font `text-base md:text-lg lg:text-xl`
- **Testo sotto CTA "Solo 3 posti"**: `text-xs md:text-sm`

---

### 3. Problem Section - `VEProblemSection.tsx`

- Titolo: `text-2xl md:text-3xl lg:text-4xl xl:text-5xl`
- Card market changes: ridurre padding `p-4 md:p-5`
- Box "NON E COLPA TUA": padding `p-4 md:p-6 lg:p-8`
- Tecniche obsolete grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

---

### 4. Market Timeline - `VEMarketTimelineSection.tsx`

- Titolo: `text-2xl md:text-3xl lg:text-4xl xl:text-5xl`
- Stats boxes grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`, padding `p-4 md:p-6`
- Stats interni: `text-lg md:text-xl lg:text-2xl`

---

### 5. True Cost Section - `VETrueCostSection.tsx`

- Titolo: `text-2xl md:text-3xl lg:text-5xl`
- Loss timeline: `grid-cols-1 sm:grid-cols-3`
- Hidden costs grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`
- Parametri di partenza: `grid-cols-2 sm:grid-cols-3 md:grid-cols-5`
- Confronto PRIMA/DOPO: numeri `text-2xl md:text-3xl lg:text-4xl`
- Freccia risultato: `flex-col sm:flex-row` nel contenitore, numeri `text-2xl md:text-3xl lg:text-4xl`
- Calcolatore ROI dialog: rendere i campi input a 2 colonne su mobile

---

### 6. Who Wins Section - `VEWhoWinsSection.tsx`

- Usa `px-4 md:px-6` nel container
- Comparison grid: `grid-cols-1 md:grid-cols-2`
- Paradigm items: layout mobile stacked (old/new in colonna)
- Winner profile box: padding `p-6 md:p-8 lg:p-12`

---

### 7. Why We Can Section - `VEWhyWeCanSection.tsx`

- Credentials grid: `grid-cols-2 sm:grid-cols-3`, padding `p-3 md:p-4`
- Comparison table: font `text-xs md:text-sm`, padding celle `p-3 md:p-4`

---

### 8. Results Section - `VEResultsSection.tsx`

- Stats grid: numeri `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- Client logos: `h-10 md:h-12 lg:h-16`, gap `gap-6 md:gap-8 lg:gap-12`

---

### 9. Differentiator Section - `VEDifferentiatorSection.tsx`

- Tags flex: `gap-2 md:gap-3`, font `text-xs md:text-sm`
- Team image: `h-48 md:h-64 lg:h-80`
- Impact box: padding `p-5 md:p-8 lg:p-10`

---

### 10. Pillars Section - `VEPillarsSection.tsx`

- Accordion trigger: padding `px-4 py-4 md:px-6 lg:px-8 md:py-6`
- Icon container: `w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14`
- Accordion content: `px-4 md:px-6 lg:px-8`, `pl-0` su mobile
- Final deliverables: padding `p-5 md:p-8`, item font `text-base md:text-lg`

---

### 11. Pricing Section - `VEPricingSection.tsx`

- Pricing card: padding `p-6 md:p-8 lg:p-12`
- Prezzo principale: `text-4xl md:text-5xl lg:text-7xl`
- Savings badge: `top-2 right-2 md:top-4 md:right-4`, font `text-xs md:text-sm`

---

### 12. Guarantee Section - `VEGuaranteeSection.tsx`

- Sigillo: `w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24`, posizione `-top-2 -right-2 md:-top-4 md:-right-4`
- Rimborso box: padding `p-4 md:p-6 lg:p-8`

---

### 13. Selection Process - `VESelectionProcessSection.tsx`

- Grid accettiamo/rifiutiamo: `grid-cols-1 md:grid-cols-2`, padding card `p-4 md:p-6`
- Steps: `grid-cols-1 sm:grid-cols-3`
- Acceptance rate numero: `text-4xl md:text-5xl lg:text-6xl`

---

### 14. FAQ Section - `VEFAQSection.tsx`

- Accordion trigger: padding `px-4 py-4 md:px-6 md:py-5`
- Icon circle: `w-10 h-10 md:w-12 md:h-12`
- Question text: `text-base md:text-lg lg:text-xl`
- Answer content: `pl-0 md:pl-16`

---

### 15. Final CTA - `VEFinalCTASection.tsx`

- Titolo: `text-2xl md:text-3xl lg:text-4xl xl:text-5xl`
- Button: `text-base px-8 py-6 md:text-xl md:px-12 md:py-8`
- Trust badges: `gap-3 md:gap-6`

---

### 16. Footer - `Footer.tsx`

- Container padding: gia responsive, ridurre `py-12 md:py-16`
- Grid: mantieni `grid-cols-1 md:grid-cols-3`

---

### 17. Navbar - `Navbar.tsx`

- Gia ben strutturato con menu mobile fullscreen
- Ridurre altezza header: `h-16 md:h-20`

---

### Riepilogo file modificati

| File | Tipo modifica |
|------|--------------|
| `src/index.css` | section-padding, heading-section responsive |
| `VEHeroSection.tsx` | Font, padding, layout social proof |
| `VEProblemSection.tsx` | Font, padding, grid breakpoints |
| `VEMarketTimelineSection.tsx` | Font, stats padding |
| `VETrueCostSection.tsx` | Font, grid, layout confronto |
| `VEWhoWinsSection.tsx` | Paradigm mobile layout |
| `VEWhyWeCanSection.tsx` | Credentials, table padding |
| `VEResultsSection.tsx` | Stats font size |
| `VEDifferentiatorSection.tsx` | Tags, image, padding |
| `VEPillarsSection.tsx` | Accordion padding |
| `VEPricingSection.tsx` | Card padding, savings badge |
| `VEGuaranteeSection.tsx` | Sigillo size/position |
| `VESelectionProcessSection.tsx` | Grid, steps |
| `VEFAQSection.tsx` | Accordion mobile padding |
| `VEFinalCTASection.tsx` | Button, font |
| `Footer.tsx` | Padding |
| `Navbar.tsx` | Header height |

