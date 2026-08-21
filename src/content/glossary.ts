// Glossario della vendita in edilizia.
// Formato definizionale: ogni voce risponde a "cosa significa X" in modo
// autonomo e citabile. È il formato che i motori generativi riprendono più
// volentieri, e lega tra loro gli articoli del blog (hub di internal linking).

export interface GlossaryTerm {
  /** Termine, come lo cercherebbe un imprenditore edile. */
  term: string;
  /** Ancora URL, kebab-case. */
  id: string;
  /** Definizione secca: 1-3 frasi, autosufficiente. */
  definition: string;
  /** Perché conta nella pratica di un'impresa edile. */
  why?: string;
  /** Slug dell'articolo di approfondimento. */
  article?: string;
  /** Etichetta del link di approfondimento. */
  articleLabel?: string;
  group: GlossaryGroup;
}

export type GlossaryGroup =
  | "Trattativa"
  | "Preventivi e prezzo"
  | "Numeri e margine"
  | "Contatti e clienti"
  | "Organizzazione";

export const glossaryGroups: GlossaryGroup[] = [
  "Trattativa",
  "Preventivi e prezzo",
  "Numeri e margine",
  "Contatti e clienti",
  "Organizzazione",
];

export const glossary: GlossaryTerm[] = [
  // --- Trattativa ---
  {
    term: "Qualificazione",
    id: "qualificazione",
    group: "Trattativa",
    definition:
      "La qualificazione è la fase in cui verifichi, prima di investire tempo in un preventivo, se il cliente ha un'esigenza reale, un budget compatibile e un tempo di intervento definito.",
    why: "Un'impresa che non qualifica passa metà delle giornate a fare sopralluoghi per persone che stanno solo raccogliendo tre preventivi di confronto.",
    article: "domande-qualificazione-cliente-edilizia",
    articleLabel: "Le domande per qualificare il cliente",
  },
  {
    term: "Sopralluogo che vende",
    id: "sopralluogo-che-vende",
    group: "Trattativa",
    definition:
      "È il sopralluogo condotto come un momento di vendita e non come un semplice rilievo tecnico: si misura, ma soprattutto si fanno emergere il problema, le priorità e il budget del cliente.",
    why: "È il momento di massima attenzione del cliente. Chi lo usa solo per prendere le misure si gioca l'unica occasione di parlare a tu per tu prima del prezzo.",
    article: "sopralluogo-che-vende",
    articleLabel: "Il sopralluogo che vende",
  },
  {
    term: "Coppia decisionale",
    id: "coppia-decisionale",
    group: "Trattativa",
    definition:
      "Nel settore casa la decisione è quasi sempre di due persone: chi guarda i soldi e chi guarda il risultato estetico e pratico. La coppia decisionale è l'insieme di questi due interlocutori.",
    why: "Vendere a uno solo dei due porta al «devo sentire mia moglie» o «devo sentire mio marito», cioè a una trattativa che riparte da zero senza di te.",
    article: "gestire-coppia-decisionale-vendita",
    articleLabel: "Gestire la coppia decisionale",
  },
  {
    term: "Obiezione",
    id: "obiezione",
    group: "Trattativa",
    definition:
      "Un'obiezione è la resistenza che il cliente esprime prima di decidere. Nel settore edile le ricorrenti sono cinque: costa troppo, ci devo pensare, ho un preventivo più basso, non è il momento, devo sentire mio marito o mia moglie.",
    why: "Un'obiezione non è un no: è una richiesta di informazioni mascherata. Chi la tratta come un rifiuto chiude la trattativa da solo.",
    article: "obiezione-prezzo-costa-troppo-edilizia",
    articleLabel: "Rispondere a «costa troppo»",
  },
  {
    term: "Obiezione «ci devo pensare»",
    id: "obiezione-ci-penso",
    group: "Trattativa",
    definition:
      "È l'obiezione con cui il cliente rinvia la decisione senza dichiarare il vero motivo del dubbio. Nella maggior parte dei casi nasconde un problema di prezzo, di fiducia o di potere decisionale.",
    why: "Accettarla senza indagare significa perdere il controllo della trattativa: il cliente esce dalla porta e la decisione la prende senza di te.",
    article: "obiezione-ci-penso-come-gestirla",
    articleLabel: "Gestire il «ci devo pensare»",
  },
  {
    term: "Chiusura",
    id: "chiusura",
    group: "Trattativa",
    definition:
      "La chiusura è il momento in cui guidi il cliente alla decisione, invece di aspettare che la prenda da solo. In edilizia si concretizza con la firma del contratto e il versamento dell'acconto.",
    why: "La maggior parte dei preventivi persi non viene rifiutata: resta semplicemente in sospeso perché nessuno ha chiesto la decisione.",
    article: "chiudere-trattativa-serramenti",
    articleLabel: "Chiudere una trattativa di serramenti",
  },
  {
    term: "Chiusura al primo appuntamento",
    id: "chiusura-primo-appuntamento",
    group: "Trattativa",
    definition:
      "È la pratica di arrivare alla decisione già durante il primo incontro, presentando il prezzo sul posto invece di rimandare l'invio del preventivo a giorni dopo.",
    why: "Ogni giorno che passa tra sopralluogo e preventivo abbassa la probabilità di chiusura, perché nel frattempo entrano in gioco i concorrenti.",
    article: "chiudere-al-primo-appuntamento",
    articleLabel: "Chiudere al primo appuntamento",
  },
  {
    term: "Follow-up",
    id: "follow-up",
    group: "Trattativa",
    definition:
      "Il follow-up è la sequenza di contatti programmati dopo l'invio del preventivo, con l'obiettivo di riportare il cliente alla decisione. Non è «richiamare quando capita»: ha tempi e contenuti stabiliti.",
    why: "Oltre metà delle vendite si chiude dal secondo contatto in poi. Un'impresa senza follow-up strutturato lascia sul tavolo i preventivi già fatti e già pagati in tempo.",
    article: "follow-up-preventivi-edilizia",
    articleLabel: "Il follow-up dei preventivi",
  },
  {
    term: "Riprova sociale",
    id: "riprova-sociale",
    group: "Trattativa",
    definition:
      "La riprova sociale è l'insieme di recensioni, referenze e lavori documentati che dimostrano al cliente che altri, prima di lui, si sono trovati bene.",
    why: "Nel settore casa il cliente compra qualcosa che vedrà per vent'anni: la paura di sbagliare pesa più del prezzo, e la riprova sociale è ciò che la abbassa.",
    article: "recensioni-riprova-sociale-showroom",
    articleLabel: "Recensioni e riprova sociale",
  },
  {
    term: "Storytelling di vendita",
    id: "storytelling",
    group: "Trattativa",
    definition:
      "È l'uso di casi concreti già realizzati — un cantiere simile, un problema risolto, un cliente con la stessa esigenza — per far capire il valore invece di elencare caratteristiche tecniche.",
    why: "Un cliente non ricorda i valori di trasmittanza. Ricorda la storia della famiglia che ha smesso di sentire il rumore della strada.",
    article: "storytelling-vendita-edilizia",
    articleLabel: "Storytelling nella vendita",
  },

  // --- Preventivi e prezzo ---
  {
    term: "Preventivo che vende",
    id: "preventivo-che-vende",
    group: "Preventivi e prezzo",
    definition:
      "È un preventivo costruito come documento di vendita e non come elenco di voci e prezzi: contiene il problema del cliente, la soluzione proposta, le opzioni e i motivi per scegliere te.",
    why: "Un elenco di voci può essere confrontato solo sul prezzo. È l'unico terreno su cui il concorrente più economico vince sempre.",
    article: "come-fare-preventivi-edilizia-che-chiudono",
    articleLabel: "Preventivi in edilizia che chiudono",
  },
  {
    term: "Sconto",
    id: "sconto",
    group: "Preventivi e prezzo",
    definition:
      "Lo sconto è la riduzione di prezzo concessa per chiudere la vendita. Esce interamente dal margine: su una commessa con il 28% di margine, uno sconto del 10% brucia circa il 36% del guadagno di quel lavoro.",
    why: "Chi sconta per abitudine insegna al mercato che il suo listino non è vero, e si trova a trattare partendo già più in basso ogni volta.",
    article: "vendere-senza-fare-sconti",
    articleLabel: "Vendere senza fare sconti",
  },
  {
    term: "Contropartita",
    id: "contropartita",
    group: "Preventivi e prezzo",
    definition:
      "È ciò che chiedi in cambio quando concedi qualcosa in trattativa: pagamento anticipato, tempi di posa flessibili, una referenza, l'acquisto di un'opzione aggiuntiva.",
    why: "Uno sconto senza contropartita è un regalo. Con la contropartita resta una negoziazione, e il cliente percepisce che il prezzo aveva un senso.",
    article: "negoziazione-senza-cedere-sul-prezzo",
    articleLabel: "Negoziare senza cedere sul prezzo",
  },
  {
    term: "Prezzo medio (ticket medio)",
    id: "prezzo-medio",
    group: "Preventivi e prezzo",
    definition:
      "Il prezzo medio è il valore medio dei contratti firmati in un periodo. Si calcola dividendo il fatturato per il numero di contratti.",
    why: "Alzare il prezzo medio del 10% vale quanto aumentare del 10% il numero di clienti, ma non richiede né più lead né più sopralluoghi.",
    article: "aumentare-prezzo-medio-edilizia",
    articleLabel: "Aumentare il prezzo medio",
  },
  {
    term: "Valore della posa",
    id: "valore-posa",
    group: "Preventivi e prezzo",
    definition:
      "È la parte di prezzo che corrisponde alla qualità dell'installazione — squadra, tempi, finiture, garanzia — distinta dal costo del prodotto acquistato dal fornitore.",
    why: "Il serramento lo può comprare chiunque, la posa no. È l'unica leva che rende il tuo preventivo non confrontabile con quello del concorrente.",
    article: "vendere-il-valore-della-posa",
    articleLabel: "Vendere il valore della posa",
  },

  // --- Numeri e margine ---
  {
    term: "Tasso di chiusura",
    id: "tasso-di-chiusura",
    group: "Numeri e margine",
    definition:
      "Il tasso di chiusura è la percentuale di preventivi emessi che si trasformano in contratti firmati. Si calcola come contratti firmati diviso preventivi emessi, per cento.",
    why: "È il numero con il maggior impatto sul fatturato: passare dal 15% al 30% raddoppia gli incassi senza fare un preventivo in più. Nel settore casa il valore tipico è 10-15%, quello di un'impresa organizzata 35-45%.",
    article: "aumentare-tasso-chiusura-preventivi",
    articleLabel: "Aumentare il tasso di chiusura",
  },
  {
    term: "Margine di commessa",
    id: "margine-commessa",
    group: "Numeri e margine",
    definition:
      "Il margine di commessa è quanto resta di un singolo lavoro dopo tutti i costi diretti: (ricavo − costi diretti) ÷ ricavo. Va misurato a lavoro chiuso, non sul preventivo emesso.",
    why: "Tra preventivo e consuntivo si perdono in media 10-15 punti di margine, che spariscono nei rientri in cantiere e nelle ore non preventivate. Chi non consuntiva ripete lo stesso errore di stima per anni.",
    article: "margine-commessa-impresa-edile",
    articleLabel: "Calcolare il margine di commessa",
  },
  {
    term: "Margine minimo",
    id: "margine-minimo",
    group: "Numeri e margine",
    definition:
      "È la soglia di margine sotto cui un lavoro non va accettato. Si calcola dividendo i costi fissi mensili per il fatturato mensile realistico.",
    why: "Va deciso prima della trattativa. Nel momento in cui il cliente chiede lo sconto non hai il tempo di rifare i conti: o il numero ce l'hai già in testa, o cedi.",
    article: "margine-commessa-impresa-edile",
    articleLabel: "Come si calcola il margine minimo",
  },
  {
    term: "Consuntivo",
    id: "consuntivo",
    group: "Numeri e margine",
    definition:
      "Il consuntivo è il calcolo dei costi effettivi di una commessa a lavoro terminato, da confrontare con quelli previsti nel preventivo.",
    why: "La differenza tra preventivo e consuntivo è il tuo scostamento medio. Senza quel numero non sai se il problema sono i prezzi bassi o gli sprechi in cantiere.",
    article: "controllo-di-gestione-imprese-edili",
    articleLabel: "Controllo di gestione per imprese edili",
  },
  {
    term: "KPI di vendita",
    id: "kpi-vendita",
    group: "Numeri e margine",
    definition:
      "I KPI di vendita sono i pochi numeri che descrivono la salute commerciale di un'impresa edile: preventivi emessi, tasso di chiusura, prezzo medio, tempo medio di chiusura, valore per lead, tasso di follow-up e fatturato per venditore.",
    why: "Vanno letti insieme: un tasso di chiusura in crescita con un prezzo medio in calo non è crescita, è erosione di margine.",
    article: "kpi-vendita-edilizia-numeri",
    articleLabel: "I KPI della vendita in edilizia",
  },
  {
    term: "Provvigione",
    id: "provvigione",
    group: "Numeri e margine",
    definition:
      "La provvigione è il compenso variabile riconosciuto a chi vende. Nel settore edile va dal 2-5% del fatturato per un venditore dipendente al 6-12% per un agente di commercio.",
    why: "Conta più la base di calcolo della percentuale: pagata sul fatturato spinge il venditore a scontare, pagata sul margine lo allinea agli interessi dell'azienda.",
    article: "provvigioni-venditore-edilizia",
    articleLabel: "Provvigioni: quanto e come pagare",
  },

  // --- Contatti e clienti ---
  {
    term: "Lead",
    id: "lead",
    group: "Contatti e clienti",
    definition:
      "Un lead è un contatto che ha manifestato interesse lasciando i propri dati, ma che non è ancora stato verificato né incontrato.",
    why: "Un lead non è un cliente e nemmeno un appuntamento. Confondere le due cose porta a valutare il marketing sui numeri sbagliati.",
    article: "lead-qualificati-imprese-edili",
    articleLabel: "Lead qualificati per imprese edili",
  },
  {
    term: "Lead qualificato",
    id: "lead-qualificato",
    group: "Contatti e clienti",
    definition:
      "Un lead qualificato è un contatto con un'esigenza attiva, un budget compatibile e un tempo di intervento definito. È il minimo perché valga la pena uscire per un sopralluogo.",
    why: "Il vero collo di bottiglia delle aziende del settore casa non è generare contatti: è gestirli nelle prime 24 ore, prima che chiamino qualcun altro.",
    article: "clienti-qualificati-edilizia",
    articleLabel: "Clienti qualificati in edilizia",
  },
  {
    term: "Costo per contratto",
    id: "costo-per-contratto",
    group: "Contatti e clienti",
    definition:
      "È quanto ti costa in marketing ogni contratto effettivamente firmato, non ogni contatto ricevuto. Si ottiene dividendo la spesa pubblicitaria per il numero di contratti chiusi.",
    why: "Il costo per contatto da solo non dice nulla: contatti economici che non chiudono costano più di contatti cari che firmano.",
    article: "funnel-vendita-infissi-serramenti",
    articleLabel: "Il funnel di vendita per serramenti",
  },
  {
    term: "Funnel di vendita",
    id: "funnel",
    group: "Contatti e clienti",
    definition:
      "Il funnel è il percorso che porta una persona da primo contatto a cliente, diviso in fasi misurabili: contatto, appuntamento fissato, sopralluogo, preventivo, firma.",
    why: "Misurare il passaggio tra una fase e l'altra è l'unico modo per capire dove stai perdendo davvero i clienti, invece di dare la colpa al prezzo.",
    article: "funnel-vendita-infissi-serramenti",
    articleLabel: "Il funnel di vendita per serramenti",
  },
  {
    term: "Primo contatto telefonico",
    id: "primo-contatto",
    group: "Contatti e clienti",
    definition:
      "È la prima telefonata al contatto in entrata. Ha un solo obiettivo: qualificare e fissare l'appuntamento, non vendere né dare prezzi.",
    why: "Dare un prezzo al telefono, prima del sopralluogo, è il modo più rapido per essere confrontati solo sulla cifra e non essere richiamati.",
    article: "primo-contatto-telefonico-lead-edilizia",
    articleLabel: "La prima telefonata al lead",
  },

  // --- Organizzazione ---
  {
    term: "CRM",
    id: "crm",
    group: "Organizzazione",
    definition:
      "Un CRM è il sistema dove vivono contatti, trattative e preventivi con il loro stato. In edilizia ne bastano cinque funzioni: anagrafica con misure, stato del preventivo, promemoria di follow-up, storico della trattativa e dati sul tasso di chiusura.",
    why: "Senza uno stato condiviso, i preventivi in sospeso esistono solo nella testa di chi li ha fatti — e quando quella persona è in ferie, si perdono.",
    article: "crm-per-serramentisti",
    articleLabel: "CRM per serramentisti",
  },
  {
    term: "Gestionale per l'edilizia",
    id: "gestionale-edilizia",
    group: "Organizzazione",
    definition:
      "È il software che tiene insieme preventivi, cantieri, fatturazione, margini e incassi di un'impresa edile in un unico posto, al posto di fogli separati.",
    why: "Vendere di più senza controllare i margini per commessa significa aumentare il fatturato e non l'utile.",
    article: "gestionale-edilizia-in-cloud",
    articleLabel: "Gestionale edilizia in cloud",
  },
  {
    term: "Rete vendita",
    id: "rete-vendita",
    group: "Organizzazione",
    definition:
      "La rete vendita è l'insieme delle persone che vendono per l'azienda — venditori interni, agenti plurimandatari, showroom partner — con zone, obiettivi e regole definite.",
    why: "Una rete senza metodo condiviso non è una rete: sono singoli che vendono ognuno a modo suo, con risultati che non puoi replicare né correggere.",
    article: "rete-vendita-aziende-edili",
    articleLabel: "Costruire una rete vendita",
  },
  {
    term: "Manuale di vendita",
    id: "manuale-vendita",
    group: "Organizzazione",
    definition:
      "È il documento che mette per iscritto il metodo commerciale dell'azienda: script di qualificazione, struttura del sopralluogo, risposte alle obiezioni ricorrenti, regole di sconto e follow-up.",
    why: "Finché il metodo esiste solo nella testa del titolare, ogni nuovo venditore riparte da zero e l'azienda non può crescere oltre le ore di una persona.",
    article: "team-commerciale-impresa-edile",
    articleLabel: "Costruire un team commerciale",
  },
  {
    term: "Azienda dipendente dal titolare",
    id: "azienda-dipendente-titolare",
    group: "Organizzazione",
    definition:
      "È l'impresa in cui ogni trattativa importante passa dal titolare. Il fatturato coincide con le ore che riesce a dedicare alla vendita.",
    why: "Finché ogni trattativa passa da te non hai un'azienda: hai un lavoro. E il valore di rivendita dell'attività è vicino a zero.",
    article: "azienda-che-dipende-dal-titolare",
    articleLabel: "L'azienda che dipende dal titolare",
  },
  {
    term: "Efficienza operativa",
    id: "efficienza-operativa",
    group: "Organizzazione",
    definition:
      "È la capacità di portare a termine i lavori senza tempi morti, rientri in cantiere e rifacimenti. Si misura in ore perse rispetto a quelle preventivate.",
    why: "Ogni rientro non preventivato è margine che esce dalla commessa e tempo sottratto alla vendita del lavoro successivo.",
    article: "efficienza-operativa-impresa-edile",
    articleLabel: "Efficienza operativa in impresa edile",
  },
];

export function getGlossaryByGroup(group: GlossaryGroup): GlossaryTerm[] {
  return glossary.filter((t) => t.group === group);
}
