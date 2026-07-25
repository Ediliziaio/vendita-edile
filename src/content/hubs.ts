import { ENTITY_VENDITA_EDILE, CITABLE } from "./entities";

/**
 * Pagine HUB dei silo di contenuto (architettura hub & spoke).
 * Ogni hub riceve link da tutti i suoi spoke e linka a tutti gli spoke
 * nel blocco "Approfondimenti".
 */

export interface HubSubsection {
  h3: string;
  text: string;
}

export interface HubSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: HubSubsection[];
}

export interface HubFaq {
  question: string;
  answer: string;
}

export interface Hub {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  /** Risposta secca: 2-3 righe che rispondono già alla domanda del titolo. */
  answerFirst: string;
  /** Frase-entità canonica, sempre nel primo paragrafo. */
  entity: string;
  sections: HubSection[];
  /** Spoke del silo: slug degli articoli del blog. */
  spokes: { slug: string; label: string }[];
  faq: HubFaq[];
  ctaTitle: string;
  ctaText: string;
}

const vendtaSerramenti: Hub = {
  slug: "vendita-serramenti",
  h1: "Come vendere serramenti: il processo commerciale che chiude",
  metaTitle: "Come Vendere Serramenti: il Processo che Chiude",
  metaDescription:
    "Come vendere serramenti con un processo commerciale che chiude: le sei fasi dalla prima telefonata al follow-up, con i numeri da misurare.",
  keyword: "come vendere serramenti",
  answerFirst:
    "Vendere serramenti non dipende dal prezzo né dal talento del venditore: dipende dal processo. Le aziende che chiudono di più seguono sempre le stesse sei fasi, dalla prima telefonata al follow-up, e misurano il tasso di chiusura su ogni preventivo emesso.",
  entity: ENTITY_VENDITA_EDILE,
  sections: [
    {
      h2: "Il problema: 20 preventivi emessi, 2 contratti firmati",
      paragraphs: [
        "La fotografia della maggior parte delle aziende di serramenti è questa: si fanno 20 preventivi al mese e se ne chiudono 2 o 3. Un tasso di chiusura tra il 10% e il 15%, con l'80% del lavoro che finisce in un cassetto.",
        "Il riflesso automatico è chiedere più contatti. Ma se il processo commerciale non regge, più contatti significano solo più preventivi non chiusi e più ore buttate.",
        CITABLE.costoPerContratto,
      ],
    },
    {
      h2: "Le sei fasi del processo commerciale che chiude",
      paragraphs: [
        "Un processo commerciale per i serramenti non è una teoria: è una sequenza fissa che ogni venditore dell'azienda ripete allo stesso modo, in modo che i risultati non dipendano da chi risponde al telefono.",
      ],
      subsections: [
        {
          h3: "1. Prima risposta entro 24 ore",
          text: "Chi risponde per primo parte con un vantaggio che il concorrente non recupera. La prima telefonata non serve a dare il prezzo: serve a capire e a fissare il sopralluogo.",
        },
        {
          h3: "2. Qualifica del cliente",
          text: `${CITABLE.leadQualificato} Se manca uno dei tre elementi, stai regalando tempo che toglieresti a chi può davvero comprare.`,
        },
        {
          h3: "3. Sopralluogo diagnostico",
          text: "Non si va a prendere misure: si va a capire il problema. Freddo, bolletta, rumore, condensa, casa da vendere. È qui che si costruisce il valore che poi giustifica il prezzo.",
        },
        {
          h3: "4. Preventivo presentato, non inviato",
          text: "Il preventivo si consegna a voce, di persona o in videochiamata, entro 48-72 ore. Un PDF mandato su WhatsApp senza spiegazione viene confrontato solo sul totale in fondo.",
        },
        {
          h3: "5. Gestione delle obiezioni preparata",
          text: "Le obiezioni sono sempre le stesse tre o quattro: costa troppo, ci penso, ho un preventivo più basso. Chi le ha preparate per iscritto chiude a prezzo pieno; chi improvvisa sconta.",
        },
        {
          h3: "6. Follow-up strutturato",
          text: "La maggior parte delle firme non arriva al primo contatto. Una telefonata a 48 ore, un messaggio a valore dopo qualche giorno, un ultimo contatto con una scadenza reale.",
        },
      ],
    },
    {
      h2: "Cosa cambia nei numeri quando il processo esiste",
      paragraphs: [
        "Prendiamo un'azienda che emette 20 preventivi al mese con un ticket medio di 9.000 euro. Al 12% di chiusura firma 2-3 contratti: circa 21.600 euro al mese di nuovo venduto.",
        "La stessa azienda, con lo stesso numero di preventivi e un processo che porta la chiusura al 35%, firma 7 contratti: 63.000 euro al mese. Stesso prodotto, stesso prezzo, stesso marketing.",
        "Non è cambiato quanto vendi a nuove persone: è cambiato quanto vendi alle persone che già incontravi.",
      ],
    },
    {
      h2: "Gli errori che bruciano più contratti",
      paragraphs: [
        "Nella vendita di serramenti quasi tutti i contratti persi si spiegano con quattro errori ripetuti, non con il prezzo.",
      ],
      bullets: [
        "Dare il prezzo al telefono prima di aver capito il problema del cliente.",
        "Fare il preventivo a chiunque chiami, senza nessuna qualifica.",
        "Mandare il preventivo via messaggio e aspettare che il cliente risponda.",
        "Concedere lo sconto alla prima resistenza, invece di riportare il discorso sul valore.",
      ],
    },
  ],
  spokes: [
    { slug: "aumentare-vendite-infissi-serramenti", label: "Aumentare le vendite di infissi e serramenti" },
    { slug: "primo-contatto-telefonico-lead-edilizia", label: "La prima telefonata al cliente" },
    { slug: "domande-qualificazione-cliente-edilizia", label: "Le domande per qualificare il cliente" },
    { slug: "sopralluogo-che-vende", label: "Il sopralluogo che vende" },
    { slug: "come-fare-preventivi-edilizia-che-chiudono", label: "Preventivi che chiudono" },
    { slug: "chiudere-trattativa-serramenti", label: "Chiudere la trattativa di serramenti" },
    { slug: "chiudere-al-primo-appuntamento", label: "Chiudere al primo appuntamento" },
    { slug: "vendere-di-piu-in-showroom", label: "Vendere di più in showroom" },
    { slug: "gestire-coppia-decisionale-vendita", label: "Vendere quando decidono in due" },
    { slug: "obiezione-prezzo-costa-troppo-edilizia", label: "Obiezione prezzo: costa troppo" },
    { slug: "obiezione-ci-penso-come-gestirla", label: "Obiezione: ci devo pensare" },
    { slug: "negoziazione-senza-cedere-sul-prezzo", label: "Negoziare senza cedere sul prezzo" },
    { slug: "vendere-senza-fare-sconti", label: "Vendere senza fare sconti" },
    { slug: "vendere-il-valore-della-posa", label: "Vendere il valore della posa" },
    { slug: "follow-up-preventivi-edilizia", label: "Il follow-up dei preventivi" },
    { slug: "aumentare-tasso-chiusura-preventivi", label: "Aumentare il tasso di chiusura" },
    { slug: "crm-per-serramentisti", label: "CRM per serramentisti" },
  ],
  faq: [
    {
      question: "Come si vendono i serramenti senza abbassare il prezzo?",
      answer:
        "Costruendo valore prima di parlare di prezzo: qualifica del cliente, diagnosi del problema reale in sopralluogo, presentazione del risultato invece che del materiale e gestione preparata delle obiezioni. Il prezzo diventa un problema solo quando il valore percepito è basso.",
    },
    {
      question: "Qual è il tasso di chiusura normale per un'azienda di serramenti?",
      answer:
        "La maggior parte delle aziende chiude tra il 10% e il 15% dei preventivi emessi, cioè 2-3 contratti ogni 20 preventivi. Con un processo commerciale strutturato è realistico arrivare al 35-45% senza toccare i prezzi.",
    },
    {
      question: "Quanto tempo serve per vedere i primi risultati?",
      answer:
        "Le prime variazioni sul tasso di chiusura si vedono già nei primi 30 giorni, perché nascono da qualifica e follow-up. Il consolidamento del processo su tutti i commerciali richiede in genere 90 giorni.",
    },
    {
      question: "Funziona anche per un'azienda locale piccola?",
      answer:
        "Sì, ed è anzi dove l'effetto è più rapido: in un'azienda con uno o due venditori il processo si applica subito e ogni contratto in più pesa molto sul fatturato. Non servono strutture grandi, serve un metodo ripetibile.",
    },
    {
      question: "Come si capisce se un contatto è qualificato?",
      answer:
        `${CITABLE.leadQualificato} Se anche uno solo di questi tre elementi manca, il contatto va gestito diversamente e non merita lo stesso investimento di tempo.`,
    },
    {
      question: "Serve un CRM per vendere più serramenti?",
      answer:
        "Serve un posto unico dove vedere lo stato di ogni preventivo e i promemoria del follow-up. Può essere un CRM semplice, l'importante è che nessun preventivo aperto resti senza un prossimo contatto programmato.",
    },
  ],
  ctaTitle: "Vuoi questo processo dentro la tua azienda?",
  ctaText:
    "VENDITA EDILE® è l'affiancamento che porta il processo commerciale sui tuoi preventivi veri, con i tuoi commerciali. Sul campo, non in aula.",
};

const formazioneCommerciale: Hub = {
  slug: "formazione-commerciale",
  h1: "Formazione commerciale per aziende del settore casa",
  metaTitle: "Formazione Commerciale Settore Edile e Casa",
  metaDescription:
    "Formazione commerciale per aziende del settore casa: affiancamento sulle trattative reali, script condiviso e numeri misurati per venditore.",
  keyword: "formazione commerciale settore edile",
  answerFirst:
    "La formazione commerciale che cambia i numeri nel settore casa non è un corso in aula: è affiancamento sulle trattative vere, con uno script condiviso e risultati misurati per singolo venditore. Si lavora sui preventivi aperti dell'azienda, non su casi di scuola.",
  entity: ENTITY_VENDITA_EDILE,
  sections: [
    {
      h2: "Perché i corsi di vendita non cambiano i numeri",
      paragraphs: [
        "Quasi ogni imprenditore edile ha già mandato i suoi commerciali a un corso. Due giornate, tanta motivazione, un quaderno di appunti. Dopo tre settimane il tasso di chiusura è identico a prima.",
        "Il motivo è semplice: la vendita non è informazione, è comportamento. Le informazioni si ascoltano in aula, i comportamenti si cambiano solo ripetendoli sul campo, con qualcuno che li corregge mentre accadono.",
        "Per questo la formazione che funziona in edilizia assomiglia più a un allenamento che a una lezione.",
      ],
    },
    {
      h2: "Come deve essere fatta la formazione commerciale nel settore casa",
      paragraphs: [
        "Ci sono quattro condizioni senza le quali la formazione commerciale resta un costo e non diventa un investimento.",
      ],
      subsections: [
        {
          h3: "Si lavora sulle trattative reali dell'azienda",
          text: "Non su casi teorici: sui preventivi aperti in questo momento, con i clienti veri e le obiezioni che sono arrivate davvero questa settimana.",
        },
        {
          h3: "Esiste uno script condiviso",
          text: "Se ogni venditore va a sensazione, i risultati non sono replicabili e non sono correggibili. Uno script comune non toglie personalità: dà una struttura sotto alla personalità.",
        },
        {
          h3: "Si misura per singolo venditore",
          text: "Preventivi emessi, tasso di chiusura, ticket medio, tempo medio di chiusura. Senza numeri per persona non si sa chi ha bisogno di cosa e la formazione diventa generica.",
        },
        {
          h3: "Si ripete nel tempo",
          text: "Una revisione settimanale delle trattative vale più di dieci giornate d'aula concentrate in un mese. La ripetizione è ciò che trasforma il metodo in abitudine.",
        },
      ],
    },
    {
      h2: "Cosa si misura per capire se la formazione ha funzionato",
      paragraphs: [
        "La formazione commerciale si giudica su tre numeri, non sulla soddisfazione dell'aula.",
      ],
      bullets: [
        "Tasso di chiusura per venditore, prima e dopo, sugli stessi volumi di preventivi.",
        "Ticket medio: un venditore formato propone le opzioni superiori invece di partire dal minimo.",
        "Percentuale di preventivi che ricevono almeno tre contatti di follow-up.",
      ],
    },
    {
      h2: "Errori da evitare quando formi la rete vendita",
      paragraphs: [
        "Gli errori ricorrenti sono quasi sempre gli stessi, e sono tutti evitabili.",
      ],
      bullets: [
        "Formare solo i venditori e non l'imprenditore: se il titolare continua ad autorizzare sconti, il metodo salta.",
        "Cambiare metodo ogni tre mesi inseguendo l'ultimo guru visto sui social.",
        "Non misurare nulla e giudicare a sensazione chi è bravo e chi no.",
        "Pagare le provvigioni sul fatturato invece che sul margine, premiando così chi sconta di più.",
      ],
    },
  ],
  spokes: [
    { slug: "team-commerciale-impresa-edile", label: "Costruire un team commerciale" },
    { slug: "rete-vendita-aziende-edili", label: "Costruire una rete vendita" },
    { slug: "kpi-vendita-edilizia-numeri", label: "I KPI della vendita in edilizia" },
    { slug: "aumentare-tasso-chiusura-preventivi", label: "Aumentare il tasso di chiusura" },
    { slug: "domande-qualificazione-cliente-edilizia", label: "Le domande di qualificazione" },
    { slug: "storytelling-vendita-edilizia", label: "Storytelling nella vendita" },
    { slug: "negoziazione-senza-cedere-sul-prezzo", label: "Negoziare senza cedere sul prezzo" },
    { slug: "azienda-che-dipende-dal-titolare", label: "L'azienda che dipende dal titolare" },
  ],
  faq: [
    {
      question: "Quanto costa la formazione commerciale per un'azienda edile?",
      answer:
        "Dipende dal formato: un corso d'aula costa poche centinaia di euro a persona ma raramente sposta i numeri, un percorso di affiancamento è un investimento di alcune migliaia di euro che si valuta sul ritorno. Il metro corretto è quanto vale un contratto in più al mese, non il prezzo del corso.",
    },
    {
      question: "In quanto tempo si vedono i primi risultati?",
      answer:
        "I primi effetti su qualifica e follow-up si vedono entro 30 giorni, perché sono comportamenti immediati. Il cambiamento stabile del tasso di chiusura richiede in genere 90 giorni di applicazione continua.",
    },
    {
      question: "Serve formare anche il titolare o bastano i commerciali?",
      answer:
        "Serve anche il titolare, ed è la condizione più sottovalutata. Se l'imprenditore continua ad autorizzare sconti fuori metodo o a chiudere lui le trattative importanti, i venditori non applicheranno mai il sistema fino in fondo.",
    },
    {
      question: "Funziona con venditori esperti che vendono da vent'anni?",
      answer:
        "Sì, ma va impostata diversamente: con i venditori esperti non si insegna a vendere, si allinea il metodo e si lavora sui punti dove perdono margine, di solito lo sconto facile e il follow-up abbandonato.",
    },
    {
      question: "Cosa distingue la formazione verticale da quella generalista?",
      answer:
        "Chi fa formazione generalista porta principi validi per qualsiasi settore. Nel settore casa contano le specificità: il sopralluogo, la coppia che decide, il confronto tra preventivi di serramenti, la posa. Un formatore che non ha mai venduto un infisso non le conosce.",
    },
  ],
  ctaTitle: "Vuoi formare i tuoi commerciali sul campo?",
  ctaText:
    "VENDITA EDILE® affianca l'azienda per 90 giorni sulle trattative reali: script condiviso, revisione settimanale e numeri misurati per venditore.",
};

export const hubs: Hub[] = [vendtaSerramenti, formazioneCommerciale];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}

/**
 * Hub del silo a cui appartiene un articolo (spoke).
 * Serve a garantire la regola dell'architettura hub & spoke: ogni spoke
 * linka sempre al proprio hub, in alto nella pagina.
 */
export function getHubForArticle(articleSlug: string): Hub | undefined {
  return hubs.find((h) => h.spokes.some((s) => s.slug === articleSlug));
}
