import { PartitaWhereInput } from "./PartitaWhereInput";
import { PartitaOrderByInput } from "./PartitaOrderByInput";

export type PartitaFindManyArgs = {
  where?: PartitaWhereInput;
  orderBy?: Array<PartitaOrderByInput>;
  skip?: number;
  take?: number;
};
