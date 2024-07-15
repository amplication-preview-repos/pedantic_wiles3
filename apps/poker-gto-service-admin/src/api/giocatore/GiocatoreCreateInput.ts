import { ManoCreateNestedManyWithoutGiocatoresInput } from "./ManoCreateNestedManyWithoutGiocatoresInput";
import { MossaCreateNestedManyWithoutGiocatoresInput } from "./MossaCreateNestedManyWithoutGiocatoresInput";

export type GiocatoreCreateInput = {
  nome?: string | null;
  saldo?: number | null;
  manos?: ManoCreateNestedManyWithoutGiocatoresInput;
  mossas?: MossaCreateNestedManyWithoutGiocatoresInput;
};
