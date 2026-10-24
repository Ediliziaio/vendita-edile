import { TrendingUp, Wallet, Receipt, Calculator, Package, Truck, ClipboardList, Landmark, Users, GitBranch, MessageCircle, Mail, Zap, Image as ImageIcon, PenTool, Building2 } from "lucide-react";
export const EIC = "https://www.ediliziaincloud.com";

// Sitelink "istituzionali" (pagine chiave del sito EdiliziaInCloud)
export const mainLinks = [
  { label: "Tutte le funzionalità", href: `${EIC}/funzionalita/` },
  { label: "Prezzi e piani", href: `${EIC}/prezzi/` },
  { label: "Richiedi una demo", href: `${EIC}/demo/` },
  { label: "Accedi all'app", href: "https://app.ediliziaincloud.com/login" },
];

// Sitelink alle funzionalità reali, raggruppate per area operativa
export const areas = [
  {
    area: "Margini e cassa",
    desc: "I numeri veri dell'azienda, in tempo reale.",
    links: [
      { label: "Margini cantiere", href: `${EIC}/funzionalita/margini-cantiere/`, icon: TrendingUp },
      { label: "Previsionale di cassa", href: `${EIC}/funzionalita/contabilita-fiscale/`, icon: Wallet },
      { label: "Fatturazione elettronica", href: `${EIC}/funzionalita/fatturazione-elettronica/`, icon: Receipt },
      { label: "Contabilità fiscale", href: `${EIC}/funzionalita/contabilita-fiscale/`, icon: Landmark },
    ],
  },
  {
    area: "Cantieri e campo",
    desc: "Il cantiere che aggiorna l'ufficio da solo.",
    links: [
      { label: "Gestione cantieri", href: `${EIC}/funzionalita/gestione-cantieri/`, icon: Building2 },
      { label: "Giornale dei lavori", href: `${EIC}/funzionalita/giornale-lavori/`, icon: ClipboardList },
      { label: "Magazzino cantiere", href: `${EIC}/funzionalita/magazzino-cantiere/`, icon: Package },
      { label: "DDT digitali", href: `${EIC}/funzionalita/ddt-digitali/`, icon: Truck },
    ],
  },
  {
    area: "Preventivi e vendite",
    desc: "Dal computo metrico al contratto firmato.",
    links: [
      { label: "Preventivi con AI", href: `${EIC}/funzionalita/preventivi-edilizia/`, icon: Calculator },
      { label: "CRM edilizia", href: `${EIC}/funzionalita/crm-edilizia/`, icon: Users },
      { label: "Pipeline vendite", href: `${EIC}/funzionalita/pipeline-vendite/`, icon: GitBranch },
      { label: "Render AI infissi", href: `${EIC}/funzionalita/render-infissi/`, icon: ImageIcon },
    ],
  },
  {
    area: "Marketing e automazioni",
    desc: "Più richieste, meno lavoro manuale.",
    links: [
      { label: "WhatsApp marketing", href: `${EIC}/funzionalita/whatsapp-marketing/`, icon: MessageCircle },
      { label: "Email marketing", href: `${EIC}/funzionalita/email-marketing/`, icon: Mail },
      { label: "Automazioni", href: `${EIC}/funzionalita/automazioni/`, icon: Zap },
      { label: "Firma elettronica", href: `${EIC}/funzionalita/firma-elettronica/`, icon: PenTool },
    ],
  },
];

export const painPoints = [
  {
    q: "Qual è il margine REALE di ogni commessa, oggi?",
    a: "Non a fine anno dal commercialista: adesso, cantiere per cantiere, preventivato contro consuntivo.",
  },
  {
    q: "Quanta cassa avrò tra 30, 60 e 90 giorni?",
    a: "Incassi, scadenze e pagamenti in un unico previsionale, per non trovarti mai scoperto.",
  },
  {
    q: "Dove sto perdendo soldi senza saperlo?",
    a: "Materiali, ore, rifacimenti, sconti: i buchi che si mangiano l'utile diventano visibili.",
  },
];

