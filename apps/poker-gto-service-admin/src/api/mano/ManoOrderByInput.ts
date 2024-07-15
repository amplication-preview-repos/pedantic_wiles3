import { SortOrder } from "../../util/SortOrder";

export type ManoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  carte?: SortOrder;
  puntata?: SortOrder;
  giocatoreId?: SortOrder;
};
