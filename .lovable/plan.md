

## Piano: Cambiare l'esempio da 20 a 30 trattative/mese

Aggiornare tutti i riferimenti all'esempio concreto portando le trattative da 20 a 30/mese. Questo cambia i numeri derivati (vendite prima/dopo, margini, differenza, ROI).

### Modifiche in `src/components/vendita-edile/VETrueCostSection.tsx`

1. **Riga 26**: `trattativeMese: 20` → `trattativeMese: 30`
2. **Riga 53**: stato iniziale calcolatore `trattative: 20` → `trattative: 30`
3. **Riga 188**: testo badge `"Serramentista con 20 Trattative/Mese"` → `"Serramentista con 30 Trattative/Mese"`
4. **Riga 191**: parametri piccoli `"20 trattative/mese"` → `"30 trattative/mese"`

### Numeri risultanti (calcolati automaticamente dal codice)
- **PRIMA** (15% di 30): 4-5 vendite/mese → margine ~€17.100/mese
- **DOPO** (40% di 30): 12 vendite/mese → margine ~€45.600/mese
- **DIFFERENZA**: ~€28.500/mese extra (invece di €19.000)
- **ROI**: ancora piu impressionante, payback in ~9 giorni

