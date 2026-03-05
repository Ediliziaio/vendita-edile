

## Piano: Data dinamica e posti disponibili automatici

### Logica
- Mostrare il mese corrente in italiano (es. "marzo") invece di "gennaio"
- Calcolare i posti disponibili in base al giorno del mese: da 5 (giorno 1) a 1 (giorno 28-31), con decremento lineare

### Utility da creare
Creare un piccolo helper riutilizzabile (inline o in un file utils) con:
```typescript
const getMonthName = () => {
  const months = ["gennaio","febbraio","marzo","aprile","maggio","giugno",
    "luglio","agosto","settembre","ottobre","novembre","dicembre"];
  return months[new Date().getMonth()];
};

const getAvailableSpots = () => {
  const day = new Date().getDate();
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const spots = Math.max(1, Math.ceil(5 - (day / daysInMonth) * 4));
  return spots;
};
```

### File da modificare

**1. `src/components/vendita-edile/VEHeroSection.tsx` (linea 239)**
- Da: `Solo 3 posti per gennaio`
- A: `Solo {spots} posti per {monthName}`

**2. `src/components/vendita-edile/VEFinalCTASection.tsx` (linea 110)**
- Da: `Solo 3 posti disponibili per gennaio 2026`
- A: `Solo {spots} posti disponibili per {monthName} {year}`

### File NON toccati
- `VEMarketTimelineSection.tsx`: "Gennaio 2025" è un riferimento a una fonte/dato specifico, va lasciato com'è.

