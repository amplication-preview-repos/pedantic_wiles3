import { ManoWhereUniqueInput } from "../mano/ManoWhereUniqueInput";
import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";

export type MossaCreateInput = {
  azione?: string | null;
  mano?: ManoWhereUniqueInput | null;
  giocatore?: GiocatoreWhereUniqueInput | null;
};
