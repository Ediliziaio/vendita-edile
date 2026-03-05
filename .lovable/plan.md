

## Piano: Aggiornare dati reali nella sezione "Perché Noi"

### Modifiche in `src/components/vendita-edile/VEWhyWeCanSection.tsx`

**1. Aggiornare le credenziali (linee 7-14)**
- Cambiare la prima credenziale da "Showroom attivo 350mq" a qualcosa che rifletta la realtà: capannone 400mq + 2 negozi
- Sostituire con due credenziali separate o una combinata, ad esempio:
  - `{ icon: Building2, label: "Capannone operativo", value: "400", suffix: "mq", proof: "Il nostro centro logistico" }`
  - Aggiungere `{ icon: Store, label: "Negozi attivi", value: "2", suffix: "", proof: "Punti vendita sul territorio" }` (usando icona `Store` da lucide)
- Questo porta le credenziali da 6 a 7, oppure possiamo riorganizzare rimuovendo/accorpando un'altra voce

**2. Aggiornare il testo sull'immagine (linee 91-94)**
- Da "Il nostro showroom operativo" e "350mq dove vendiamo..." 
- A "La nostra sede operativa" e "400mq di capannone + 2 negozi. Non teoria. Pratica."

**3. Aggiornare il countUp (linea 40)**
- Da `end: 350` a `end: 400`

**4. Aggiornare il badge invito (linea 241)**
- Da "Vieni a trovarci in showroom" a "Vieni a trovarci nei nostri negozi"

**5. Import icona Store** (linea 2)
- Aggiungere `Store` alle icone importate da lucide-react

### Struttura credenziali proposta (7 items, grid 2x3 + 1 o mantenere 6 riarrangiando)

Opzione consigliata -- mantenere 6 credenziali per layout pulito:
1. Capannone operativo — 400mq
2. Negozi attivi — 2
3. Fatturato vendite — 1.2M+
4. Trattative/anno — 1800+
5. Aziende affiancate — 47+
6. Tasso di successo — 94%

Rimuoviamo "Pose completate 200+" per far spazio ai 2 negozi, mantenendo il grid 2x3.

