

## Piano: Creare sezione Casi Studio e Recensioni dopo "Il Programma Completo"

### 1. Nuovo componente: `src/components/vendita-edile/VECaseStudiesSection.tsx`

Sezione divisa in due blocchi:

**Blocco A — Casi Studio (3 card)**
Ogni card contiene:
- Settore (es. "Serramentista", "Impresa Edile", "Showroom Fotovoltaico")
- Problema iniziale (1 riga)
- Risultato ottenuto con numeri evidenziati in oro
- Timeline (es. "In 90 giorni")
- Logo cliente (usando i loghi già presenti in assets)

Layout: griglia 1 colonna mobile, 3 colonne desktop.

**Blocco B — Recensioni/Testimonianze (slider o griglia)**
- 3-4 citazioni con nome, ruolo, azienda
- Stelle o virgolette decorative
- Stile card con bordo gold/30

**Header sezione:**
- Badge: "Casi Studio Reali"
- Titolo: "Cosa Dicono Chi Ha Già Fatto Il Percorso"
- Sottotitolo: "Risultati concreti da imprenditori edili come te."

**CTA finale** con bottone "Candidati Ora" che scrolla a #candidati.

Stile visivo coerente con il resto (bg-navy, bordi gold, AnimatedSection, motion animations).

### 2. Aggiornamento `src/pages/Index.tsx`

- Import del nuovo `VECaseStudiesSection`
- Posizionamento subito dopo `<VEPillarsSection />` (riga 83) e prima di `<VETrueCostSection />`

