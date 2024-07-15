import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";
import { MossaCreateNestedManyWithoutManosInput } from "./MossaCreateNestedManyWithoutManosInput";

export type ManoCreateInput = {
  carte?: string | null;
  puntata?: number | null;
  giocatore?: GiocatoreWhereUniqueInput | null;
  mossas?: MossaCreateNestedManyWithoutManosInput;
};
