import { ManoUpdateManyWithoutGiocatoresInput } from "./ManoUpdateManyWithoutGiocatoresInput";
import { MossaUpdateManyWithoutGiocatoresInput } from "./MossaUpdateManyWithoutGiocatoresInput";

export type GiocatoreUpdateInput = {
  nome?: string | null;
  saldo?: number | null;
  manos?: ManoUpdateManyWithoutGiocatoresInput;
  mossas?: MossaUpdateManyWithoutGiocatoresInput;
};
