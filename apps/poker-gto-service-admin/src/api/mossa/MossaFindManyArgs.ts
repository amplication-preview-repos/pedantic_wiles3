import { MossaWhereInput } from "./MossaWhereInput";
import { MossaOrderByInput } from "./MossaOrderByInput";

export type MossaFindManyArgs = {
  where?: MossaWhereInput;
  orderBy?: Array<MossaOrderByInput>;
  skip?: number;
  take?: number;
};
