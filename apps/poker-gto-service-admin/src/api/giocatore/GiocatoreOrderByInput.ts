import { SortOrder } from "../../util/SortOrder";

export type GiocatoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nome?: SortOrder;
  saldo?: SortOrder;
};
