import { Giocatore as TGiocatore } from "../api/giocatore/Giocatore";

export const GIOCATORE_TITLE_FIELD = "nome";

export const GiocatoreTitle = (record: TGiocatore): string => {
  return record.nome?.toString() || String(record.id);
};
