

## Piano: Aggiungere logo e dati aziendali

### 1. Copiare il logo nel progetto
- Copiare `user-uploads://Imprenditore_Edile_9.png` in `src/assets/vendita-edile-logo.png`

### 2. Navbar (`src/components/Navbar.tsx`)
- Importare il logo e sostituire il testo "VENDITA EDILE®" con un tag `<img>` del logo (altezza ~32-40px, con `alt` appropriato)
- Stesso logo anche nel menu mobile

### 3. Footer (`src/components/Footer.tsx`)
- Sostituire il testo del brand con il logo (img)
- Cambiare la griglia da 3 a 4 colonne: Logo+descrizione | Link Rapidi | Contatti | Dati Aziendali
- Aggiungere colonna **Dati Aziendali** con:
  - Domus Group S.r.l.
  - Sede Legale: Via Aurelio Saffi 29, CAP 20123
  - P.IVA: 13132010961
  - Capitale Sociale: 20.000,00€
  - PEC: domusgroupsrl@legalmail.it
  - SDI: USAL8PV
- Aggiornare contatto email a `Amministrazione@domusgroupitalia.it`
- Aggiornare il copyright con "Domus Group S.r.l. - VENDITA EDILE®"
- Su mobile resta `grid-cols-1`, su desktop `md:grid-cols-2 lg:grid-cols-4`

### File modificati
- `src/assets/vendita-edile-logo.png` (nuovo)
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`

