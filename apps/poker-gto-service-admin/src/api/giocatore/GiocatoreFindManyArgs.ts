import { GiocatoreWhereInput } from "./GiocatoreWhereInput";
import { GiocatoreOrderByInput } from "./GiocatoreOrderByInput";

export type GiocatoreFindManyArgs = {
  where?: GiocatoreWhereInput;
  orderBy?: Array<GiocatoreOrderByInput>;
  skip?: number;
  take?: number;
};
