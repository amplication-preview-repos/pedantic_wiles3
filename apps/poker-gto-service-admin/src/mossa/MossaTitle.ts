import { Mossa as TMossa } from "../api/mossa/Mossa";

export const MOSSA_TITLE_FIELD = "azione";

export const MossaTitle = (record: TMossa): string => {
  return record.azione?.toString() || String(record.id);
};
