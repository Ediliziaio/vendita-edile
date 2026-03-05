

## Piano: Aggiornare e spostare la sezione Pricing prima di "Il Vero Costo"

### 1. Spostare la sezione in Index.tsx
Muovere `<VEPricingSection />` dalla posizione attuale (dopo VEDifferentiatorSection, riga 103) a **prima** di `<VETrueCostSection />` (prima della riga 90), aggiornando i commenti numerici.

### 2. Aggiornare il contenuto di VEPricingSection.tsx
Riscrivere la sezione con il nuovo value stack completo (8 elementi invece di 6) e le descrizioni dettagliate fornite dall'utente:

**Nuovo value stack:**
| Elemento | Valore |
|----------|--------|
| Affiancamento 1:1 per 90 giorni | €12.000 |
| Script di Vendita Personalizzati | €4.500 |
| Revisione Trattative Settimanale | €6.000 |
| Supporto WhatsApp Diretto | €3.000 |
| Sistema di Follow-Up Automatizzato | €2.500 |
| Template Preventivi che Convertono | €2.000 |
| Dashboard KPI Vendite | €1.800 |
| Accesso alla Community Vendita Edile® | €1.200 |

**Totale:** €33.000 → Investimento: €9.000 → Risparmio: €24.000

**Nuovi elementi di design:**
- Aggiungere 2 nuove icone (BarChart3 per Dashboard KPI, Users2 per Community)
- Descrizioni più dettagliate e specifiche per ogni voce (come da testo utente)
- Aggiungere sezione "calcolo rapido ROI" in fondo: se chiudi 1 trattativa extra → payback in 3 mesi; se 2 extra → profitto dal mese 2
- Subtitle aggiornato: "Ogni elemento ha un prezzo reale, calcolato sui prezzi di mercato per servizi equivalenti. Non numeri inventati."

### File modificati
- `src/pages/Index.tsx` — spostamento ordine sezione
- `src/components/vendita-edile/VEPricingSection.tsx` — aggiornamento contenuto, value stack, descrizioni e sezione ROI finale

