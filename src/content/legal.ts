export interface LegalDoc {
  slug: string;          // "privacy" | "cookie" | "termini"
  title: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;     // "2026-01-17"
  content: string;       // Markdown (GFM). H2 = ##, H3 = ###.
}

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Informativa sulla Privacy",
    metaTitle: "Informativa Privacy | VENDITA EDILE",
    metaDescription:
      "Informativa sul trattamento dei dati personali raccolti tramite il sito VENDITA EDILE, ai sensi del Regolamento UE 2016/679 (GDPR) e della normativa italiana.",
    updatedAt: "2026-01-17",
    content: `> Nota: il presente documento è un modello informativo redatto a scopo organizzativo. Prima della pubblicazione definitiva è necessaria la validazione da parte di un professionista legale qualificato in materia di protezione dei dati personali.

## 1. Titolare del trattamento

Il Titolare del trattamento dei dati personali raccolti attraverso il sito venditaedile.it (di seguito il "Sito") è:

**Domus Group S.r.l.**
Via Aurelio Saffi 29, 20123 Milano (MI), Italia
P.IVA 13132010961
Email: amministrazione@domusgroupitalia.it
PEC: domusgroupsrl@legalmail.it

Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile contattare il Titolare agli indirizzi sopra indicati.

## 2. Tipologie di dati raccolti

Il Sito raccoglie le seguenti categorie di dati:

### 2.1 Dati di navigazione
Dati tecnici raccolti automaticamente durante la navigazione (indirizzo IP, tipo di browser, sistema operativo, pagine visitate, data e ora di accesso), utilizzati in forma aggregata e anonimizzata dove possibile per finalità statistiche e di sicurezza.

### 2.2 Dati forniti volontariamente
Il Sito indirizza gli utenti interessati al programma VENDITA EDILE® verso un modulo di candidatura ospitato su Google Form (Google LLC). Tramite tale modulo l'utente fornisce volontariamente: nome e cognome, indirizzo email, numero di telefono, ragione sociale e dati relativi alla propria impresa edile, ed eventuali informazioni aggiuntive utili alla valutazione della candidatura.

## 3. Finalità del trattamento

I dati raccolti sono trattati per le seguenti finalità:

- Rispondere alla candidatura presentata tramite il modulo di contatto/Google Form;
- Valutare l'idoneità del candidato al programma di affiancamento vendite VENDITA EDILE®;
- Contattare l'interessato per finalità commerciali e informative relative al programma, anche telefonicamente o via email/WhatsApp;
- Adempiere a eventuali obblighi di legge;
- Garantire la sicurezza e il corretto funzionamento del Sito.

## 4. Base giuridica del trattamento

Il trattamento si fonda su:

- **Consenso** dell'interessato, espresso mediante la compilazione e l'invio del modulo di candidatura;
- **Misure precontrattuali** richieste dall'interessato stesso, ai sensi dell'art. 6, par. 1, lett. b) GDPR, finalizzate alla valutazione dell'ammissione al programma;
- **Legittimo interesse** del Titolare a dare seguito a richieste di contatto ricevute spontaneamente.

## 5. Destinatari e responsabili esterni

I dati possono essere comunicati a soggetti terzi che agiscono in qualità di responsabili del trattamento o titolari autonomi, tra cui:

- **Google LLC**, per la gestione del modulo di candidatura (Google Form) e dei relativi servizi Google Fonts;
- **Fornitori di servizi di hosting e infrastruttura cloud** (incluso Supabase Inc. e i provider di hosting del Sito), per l'erogazione tecnica del servizio;
- Collaboratori, dipendenti e consulenti di Domus Group S.r.l. autorizzati al trattamento nell'ambito delle rispettive mansioni;
- Autorità pubbliche, ove richiesto dalla legge.

## 6. Trasferimento dei dati extra-UE

Alcuni dei fornitori sopra indicati (es. Google LLC) possono trattare i dati anche al di fuori dello Spazio Economico Europeo. In tali casi il trasferimento avviene sulla base di garanzie adeguate, quali le Clausole Contrattuali Standard approvate dalla Commissione Europea, o altre misure equivalenti previste dal GDPR.

## 7. Periodo di conservazione

I dati sono conservati per il tempo necessario al conseguimento delle finalità sopra descritte e, in ogni caso, non oltre 24 mesi dall'ultimo contatto, salvo diverso obbligo di legge o diversa richiesta dell'interessato.

## 8. Diritti dell'interessato

In qualità di interessato, hai diritto di richiedere in qualsiasi momento:

- **Accesso** ai tuoi dati personali;
- **Rettifica** di dati inesatti o incompleti;
- **Cancellazione** dei dati (diritto all'oblio), nei casi previsti dalla legge;
- **Limitazione** del trattamento;
- **Portabilità** dei dati;
- **Opposizione** al trattamento, in particolare per finalità di marketing diretto;
- **Reclamo** al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it), qualora ritenga che il trattamento violi la normativa vigente.

## 9. Come esercitare i diritti

Per esercitare i diritti sopra descritti è possibile scrivere all'indirizzo email amministrazione@domusgroupitalia.it o alla PEC domusgroupsrl@legalmail.it, specificando l'oggetto della richiesta.

## 10. Modifiche alla presente informativa

Il Titolare si riserva il diritto di modificare o aggiornare la presente informativa in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.`,
  },
  {
    slug: "cookie",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy | VENDITA EDILE",
    metaDescription:
      "Informazioni sui cookie utilizzati dal sito VENDITA EDILE e su come gestirli o disattivarli dal proprio browser.",
    updatedAt: "2026-01-17",
    content: `> Nota: il presente documento è un modello informativo redatto a scopo organizzativo. Prima della pubblicazione definitiva è necessaria la validazione da parte di un professionista legale qualificato in materia di protezione dei dati personali.

## 1. Cosa sono i cookie

I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie possono essere di natura tecnica, funzionale, statistica o di profilazione.

## 2. Natura informativa del Sito

Il sito venditaedile.it è un sito informativo e promozionale, dedicato alla presentazione del programma di affiancamento vendite VENDITA EDILE® rivolto alle imprese edili. Oltre ai cookie tecnici necessari, il Sito utilizza il **Meta Pixel (Facebook Pixel)** per finalità di misurazione e marketing delle proprie campagne pubblicitarie: si tratta di uno strumento di profilazione di terza parte, per il quale è richiesto il consenso dell'utente (vedi paragrafo 4).

## 3. Tipologie di cookie utilizzati

### 3.1 Cookie tecnici e necessari
Sono cookie indispensabili per il corretto funzionamento del Sito (ad esempio per garantire la navigazione in sicurezza, la corretta visualizzazione delle pagine e il funzionamento dell'infrastruttura di hosting). Questi cookie non richiedono il consenso preventivo dell'utente ai sensi della normativa vigente.

### 3.2 Servizi di terze parti integrati nel Sito
Il Sito si appoggia ad alcuni servizi esterni che possono impostare propri cookie o effettuare connessioni tecniche indipendenti dalla volontà del Titolare:

- **Google Fonts**: utilizzato per il caricamento dei caratteri tipografici del Sito. Il caricamento dei font può comportare una connessione ai server di Google LLC.
- **Modulo di richiesta contatto (EdiliziaInCloud)**: il form di candidatura è embeddato tramite iframe dal servizio EdiliziaInCloud, che può impostare propri cookie tecnici necessari al funzionamento del modulo.
- **Meta Pixel (Facebook Pixel)**: strumento fornito da Meta Platforms Ireland Ltd. che, tramite cookie e identificatori, consente di misurare l'efficacia delle campagne pubblicitarie, creare pubblici personalizzati e mostrare annunci mirati sulle piattaforme Meta (Facebook, Instagram). Maggiori informazioni su www.facebook.com/policy.php.

Il Titolare non ha accesso né controllo diretto sui cookie eventualmente impostati da questi servizi terzi, la cui gestione è disciplinata dalle rispettive informative privacy e cookie policy.

## 4. Cookie di profilazione e marketing

Il Sito utilizza il **Meta Pixel (Facebook Pixel)** per finalità di marketing, misurazione delle conversioni e remarketing sulle piattaforme Meta. Questo strumento raccoglie dati relativi alla navigazione (pagine viste, interazioni con il modulo di contatto, visualizzazione degli articoli) e li associa, ove possibile, all'account Meta dell'utente, al fine di ottimizzare le campagne pubblicitarie e mostrare annunci pertinenti.

Il trattamento tramite Meta Pixel avviene sulla base del **consenso** dell'utente. L'utente può gestire le proprie preferenze pubblicitarie direttamente dalle impostazioni del proprio account Meta e disattivare i cookie di terze parti dal proprio browser (vedi paragrafo 5). Per il Titolare è consigliata l'adozione di un banner di consenso preventivo (cookie banner) che consenta all'utente di accettare o rifiutare i cookie di marketing prima della loro attivazione.

## 5. Come gestire e disattivare i cookie

È possibile gestire, bloccare o eliminare i cookie tramite le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:

- **Google Chrome**: support.google.com/chrome/answer/95647
- **Mozilla Firefox**: support.mozilla.org/kb/protezione-antitracciamento-avanzata-firefox-desktop
- **Safari**: support.apple.com/it-it/guide/safari/sfri11471/mac
- **Microsoft Edge**: support.microsoft.com/it-it/microsoft-edge

Si segnala che la disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune parti del Sito.

## 6. Ulteriori informazioni

Per informazioni più dettagliate sul trattamento dei dati personali si rimanda alla nostra Informativa sulla Privacy. Per qualsiasi domanda relativa alla presente Cookie Policy è possibile contattare il Titolare del trattamento, Domus Group S.r.l., all'indirizzo amministrazione@domusgroupitalia.it.`,
  },
  {
    slug: "termini",
    title: "Termini e Condizioni d'Uso",
    metaTitle: "Termini e Condizioni | VENDITA EDILE",
    metaDescription:
      "Termini e condizioni d'uso del sito VENDITA EDILE, il programma di affiancamento vendite per imprese edili di Domus Group S.r.l.",
    updatedAt: "2026-01-17",
    content: `> Nota: il presente documento è un modello informativo redatto a scopo organizzativo. Prima della pubblicazione definitiva è necessaria la validazione da parte di un professionista legale qualificato.

## 1. Oggetto e accettazione

I presenti Termini e Condizioni disciplinano l'utilizzo del sito venditaedile.it (di seguito il "Sito"), gestito da Domus Group S.r.l., con sede in Via Aurelio Saffi 29, 20123 Milano, P.IVA 13132010961. Accedendo e navigando sul Sito, l'utente dichiara di aver letto, compreso e accettato integralmente i presenti Termini. Qualora non si condividano tali condizioni, si invita l'utente a non utilizzare il Sito.

## 2. Natura del Sito

Il Sito ha natura **informativa e promozionale**. Ha lo scopo di presentare il programma VENDITA EDILE®, un percorso di affiancamento commerciale rivolto a imprese edili, e di raccogliere candidature di soggetti interessati tramite un modulo esterno (Google Form). Il Sito non consente l'acquisto diretto di beni o servizi né la conclusione online di alcun contratto.

## 3. Natura del programma VENDITA EDILE® e assenza di offerta al pubblico

La partecipazione al programma VENDITA EDILE® è soggetta a un processo di selezione e valutazione da parte di Domus Group S.r.l., ed è in ogni caso subordinata alla sottoscrizione di un separato accordo contrattuale tra le parti, contenente termini, condizioni economiche e obblighi specifici.

Nessun contenuto pubblicato sul Sito costituisce un'offerta al pubblico ai sensi dell'art. 1336 del Codice Civile, né un impegno vincolante all'ammissione al programma. La compilazione del modulo di candidatura non genera alcun diritto automatico di partecipazione, che resta a insindacabile valutazione del Titolare.

## 4. Proprietà intellettuale

Il marchio "VENDITA EDILE®", il logo, i testi, le immagini, i contenuti del blog, i materiali grafici e ogni altro elemento pubblicato sul Sito sono di proprietà di Domus Group S.r.l. o concessi in licenza alla stessa, e sono protetti dalla normativa vigente in materia di proprietà intellettuale e diritto d'autore.

È vietata la riproduzione, distribuzione, modifica o utilizzo, totale o parziale, dei contenuti del Sito senza previa autorizzazione scritta del Titolare, fatti salvi gli usi consentiti dalla legge (es. citazione a fini di critica o discussione).

## 5. Limitazione di responsabilità

### 5.1 Risultati e case study
Eventuali risultati, percentuali di crescita del fatturato (a titolo esemplificativo, incrementi indicativi del 30-50%) o testimonianze di clienti citati sul Sito hanno **valore puramente esemplificativo e illustrativo**. Non costituiscono in alcun modo una garanzia di risultato per i futuri partecipanti al programma, i cui esiti dipendono da molteplici fattori (mercato, esecuzione, condizioni aziendali specifiche, contesto competitivo) che esulano dal controllo del Titolare.

### 5.2 Assenza di consulenza professionale
I contenuti del Sito hanno finalità informativa e divulgativa generale e non costituiscono consulenza professionale, legale, fiscale o finanziaria di alcun tipo. Per decisioni relative alla propria attività d'impresa si raccomanda di rivolgersi a professionisti qualificati.

### 5.3 Disponibilità del Sito
Il Titolare non garantisce la continuità, la disponibilità ininterrotta o l'assenza di errori nel funzionamento del Sito e non risponde per eventuali danni derivanti da interruzioni, malfunzionamenti o indisponibilità temporanea dello stesso.

## 6. Link a siti esterni

Il Sito può contenere collegamenti a siti web di terze parti (incluso il modulo Google Form). Il Titolare non ha alcun controllo su tali siti esterni e non si assume responsabilità circa i loro contenuti, le loro policy sulla privacy o le pratiche ivi adottate. L'accesso a siti esterni avviene a rischio esclusivo dell'utente.

## 7. Legge applicabile e foro competente

I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia relativa all'interpretazione, validità, esecuzione o risoluzione dei presenti Termini sarà competente in via esclusiva il Foro di Milano, salvo diversa ed inderogabile disposizione di legge applicabile ai consumatori.

## 8. Contatti

Per qualsiasi informazione relativa ai presenti Termini e Condizioni è possibile contattare:

**Domus Group S.r.l.**
Via Aurelio Saffi 29, 20123 Milano (MI)
Email: amministrazione@domusgroupitalia.it
PEC: domusgroupsrl@legalmail.it`,
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
