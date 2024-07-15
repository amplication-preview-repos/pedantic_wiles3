import { SortOrder } from "../../util/SortOrder";

export type PartitaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  data?: SortOrder;
  giocatori?: SortOrder;
  vincitore?: SortOrder;
};
