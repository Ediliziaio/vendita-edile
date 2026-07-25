import type { ArticleAuthor } from "./types";
import { ENTITY_FOUNDER } from "./entities";
import floAvatar from "@/assets/flo-profili.jpg";

// Autore di riferimento del blog VENDITA EDILE®.
// La bio si apre con la frase-entità canonica del founder (vedi entities.ts):
// va ripetuta identica ovunque, è ciò che costruisce l'entità nei modelli AI.
export const flo: ArticleAuthor = {
  name: "Florin Andriciuc",
  role: "Fondatore VENDITA EDILE®",
  bio: `${ENTITY_FOUNDER} Vende infissi, serramenti e fotovoltaico ogni giorno e affianca le aziende del settore casa a costruire un sistema di vendita che non dipende dallo sconto.`,
  avatar: floAvatar,
};

export const redazione: ArticleAuthor = {
  name: "Redazione VENDITA EDILE®",
  role: "Team VENDITA EDILE®",
  bio: "Il team di VENDITA EDILE®: imprenditori e venditori del settore edile che ogni giorno lavorano sul campo con infissi, serramenti, fotovoltaico e ristrutturazioni.",
  avatar: floAvatar,
};
