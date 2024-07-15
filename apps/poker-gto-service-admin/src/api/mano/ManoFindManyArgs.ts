import { ManoWhereInput } from "./ManoWhereInput";
import { ManoOrderByInput } from "./ManoOrderByInput";

export type ManoFindManyArgs = {
  where?: ManoWhereInput;
  orderBy?: Array<ManoOrderByInput>;
  skip?: number;
  take?: number;
};
