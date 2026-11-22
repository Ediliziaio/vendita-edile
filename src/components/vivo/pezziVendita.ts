import { BarChart3, ClipboardList, FileText, FolderOpen, ShieldCheck, type LucideIcon } from "lucide-react";

export type PezzoEsploso = { name: string; desc: string; icon: LucideIcon };

/** Le cinque parti del metodo di vendita, una per pezzo dell'oggetto esploso. */
export const pezziVendita: PezzoEsploso[] = [
  { name: "Cartella del cliente", desc: "Chi decide, cosa gli serve, entro quando: tutto quello che sai del cliente, in un posto solo.", icon: FolderOpen },
  { name: "Note del sopralluogo", desc: "I bisogni scritti nero su bianco, da riprendere quando presenti il preventivo.", icon: ClipboardList },
  { name: "Preventivo che vende", desc: "Presentato di persona, voce per voce, legato a quello che il cliente ti ha detto.", icon: FileText },
  { name: "Margine protetto", desc: "Niente sconti a caso: il prezzo si difende mostrando il valore, non tagliando.", icon: ShieldCheck },
  { name: "Numeri del commerciale", desc: "Chiamate, appuntamenti e chiusure misurati ogni settimana: sai dove si perde la vendita.", icon: BarChart3 },
];

/** Gli stessi pezzi letti su una finestra: dal primo contatto all'ordine. */
export const pezziVenditaSerramenti: PezzoEsploso[] = [
  { name: "Domande al telefono", desc: "Prima del listino, il problema: spifferi, rumore, bollette. Si fissa il sopralluogo con chi decide.", icon: FolderOpen },
  { name: "Sopralluogo guidato", desc: "Misure e bisogni scritti, foto dei vecchi infissi: il materiale per la trattativa.", icon: ClipboardList },
  { name: "Preventivo spiegato", desc: "Vetro, profilo, posa: ogni voce collegata a un bisogno del cliente, non a un codice.", icon: FileText },
  { name: "Obiezioni gestite", desc: "«Costa troppo», «ci penso»: risposte provate in showroom, senza sconti di panico.", icon: ShieldCheck },
  { name: "Ordine firmato", desc: "Acconto incassato, data di posa in agenda, cliente che ti manda il vicino.", icon: BarChart3 },
];
