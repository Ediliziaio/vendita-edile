import { format } from "date-fns";
import { it } from "date-fns/locale";

/** Formatta una data ISO (YYYY-MM-DD) in italiano esteso: "8 gennaio 2026". */
export function formatArticleDate(iso: string): string {
  try {
    return format(new Date(iso), "d MMMM yyyy", { locale: it });
  } catch {
    return iso;
  }
}
