

## Piano: Sostituire immagine team con 5 figure individuali

**File:** `src/components/vendita-edile/VEDifferentiatorSection.tsx`

### Cosa fare
Sostituire il blocco "Team Image Card" (righe 126-142) con una griglia di 5 membri del team, ciascuno con:
- Immagine placeholder (icona User con sfondo gradient) che l'utente potrà sostituire con foto reali
- Nome placeholder ("Membro 1", "Membro 2", ecc.)
- Ruolo placeholder ("Fondatore", "Sales Manager", ecc.)

### Layout
- 5 card in riga su desktop (`grid-cols-5`)
- 3+2 su tablet (`grid-cols-3`), 2+2+1 su mobile (`grid-cols-2`)
- Ogni card: avatar circolare con placeholder, nome e ruolo sotto
- Stile coerente: bordo `gold/20`, sfondo `gold/5`

### Preparazione immagini
- Creare 5 placeholder image files in `src/assets/` (team-1.png ... team-5.png) — oppure usare icone Lucide `User` come placeholder visivi finché l'utente non inserisce le foto reali
- Approccio consigliato: usare icone User come placeholder (nessun file da creare), con commento nel codice su dove inserire le immagini reali

### File modificato
- `src/components/vendita-edile/VEDifferentiatorSection.tsx` — solo il blocco team (righe 125-142)

