import { Mano as TMano } from "../api/mano/Mano";

export const MANO_TITLE_FIELD = "id";

export const ManoTitle = (record: TMano): string => {
  return record.id?.toString() || String(record.id);
};
