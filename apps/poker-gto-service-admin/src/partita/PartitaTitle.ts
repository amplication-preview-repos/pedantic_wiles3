import { Partita as TPartita } from "../api/partita/Partita";

export const PARTITA_TITLE_FIELD = "giocatori";

export const PartitaTitle = (record: TPartita): string => {
  return record.giocatori?.toString() || String(record.id);
};
