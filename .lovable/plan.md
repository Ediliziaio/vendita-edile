

## Piano: Snellire VETrueCostSection — stile Belfort/Kennedy

### Problema
La sezione ha troppo testo, troppe sotto-sezioni, troppe animazioni. Chi scrolla veloce non afferra il messaggio. Bisogna colpire in 3 secondi.

### Principio guida
Dan Kennedy: "Tell them what they're losing, show them the math, shut up." Belfort: pugno nello stomaco, poi la via d'uscita.

### Cosa TAGLIARE

1. **"I Costi Che Non Vedi" (5 card grid)** — troppo dispersivo, 5 micro-card che nessuno legge. Ridurre a 3 costi killer in una riga compatta (Tempo, Margini, Opportunita) con una sola riga ciascuno.

2. **Box "Parametri di partenza"** — i 5 parametri tecnici sono rumore. Li togliamo dalla vista principale. Il calcolatore ROI nel dialog li ha gia.

3. **Sezione "E se aggiungi 1 commerciale?"** — distrae dal messaggio core. Via.

4. **Sottotitolo duplicato** — "Facciamo i conti. Ti faranno male, ma devi vederli" appare sia nel badge che nel sottotitolo. Tenere solo il badge.

5. **Transizione finale** ("Ma chi sta VINCENDO...") — gia presente in altre sezioni, ridondante. Via o ridotta a una riga.

### Cosa TENERE e RAFFORZARE

1. **Loss Timeline (3 card)** — il pugno. Resta uguale, sono i numeri che fanno male.

2. **Confronto PRIMA vs DOPO** — il cuore della sezione. Semplificato: solo vendite e margine, senza il fatturato intermedio che e rumore.

3. **Risultato "+€19.000/mese EXTRA"** — resta, e il payoff.

4. **Timeline ROI (4 card)** — resta, mostra la crescita nel tempo. E il "proof of concept" numerico.

5. **Call-out gold finale** ("L'investimento si ripaga in 15 giorni") — resta, e il closer.

6. **Calcolatore ROI** — resta come CTA interattivo nel dialog.

7. **Domanda finale** ("Quanti mesi puoi permetterti...") — resta, e la chiusura emotiva.

### Struttura risultante (dall'alto al basso)

```text
Badge: "Facciamo due conti. Ti faranno male."
H2: IL VERO COSTO DI CONTINUARE COSI

[3 Loss Cards: €50k/mese — €360-600k/anno — €1M+ in 3 anni]

[3 Hidden Costs inline: TEMPO | MARGINI | OPPORTUNITA — una riga ciascuno]

[PRIMA vs DOPO — semplificato]
[+€19.000/mese EXTRA badge]

[ROI Timeline 4 card]

[Gold box: "Si ripaga in 15 giorni"]
[CTA: Calcola il TUO ROI]

[Domanda finale: "Quanti mesi puoi permetterti..."]
```

### File modificato
`src/components/vendita-edile/VETrueCostSection.tsx` — riscrittura parziale: rimozione sezioni superflue, semplificazione confronto, hidden costs da 5 a 3 inline. Il calcolatore ROI dialog resta invariato.

