import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";
import { MossaUpdateManyWithoutManosInput } from "./MossaUpdateManyWithoutManosInput";

export type ManoUpdateInput = {
  carte?: string | null;
  puntata?: number | null;
  giocatore?: GiocatoreWhereUniqueInput | null;
  mossas?: MossaUpdateManyWithoutManosInput;
};
