

## Piano: Aggiungere parametri dell'esempio in piccolo sotto il badge

### Modifica

Nel badge "ESEMPIO CONCRETO — Serramentista con 20 Trattative/Mese" (righe 185-190), aggiungere subito sotto una riga compatta in testo piccolo (`text-xs`) con i parametri chiave dell'esempio: 20 trattative/mese, chiusura attuale 15%, commessa media €9.500, margine 40%, investimento €9.000.

Stile: una riga orizzontale con separatori `|`, colore `text-muted-foreground`, centrata. Nessuna card, nessun box — solo testo inline discreto che contestualizza i numeri senza occupare spazio.

### File modificato
`src/components/vendita-edile/VETrueCostSection.tsx` — aggiunta di un `<p>` dopo il badge (riga 189), prima del grid PRIMA/DOPO.

