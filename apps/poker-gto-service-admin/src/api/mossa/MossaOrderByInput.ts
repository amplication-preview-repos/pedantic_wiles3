import { SortOrder } from "../../util/SortOrder";

export type MossaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  azione?: SortOrder;
  manoId?: SortOrder;
  giocatoreId?: SortOrder;
};
