import { ManoWhereUniqueInput } from "../mano/ManoWhereUniqueInput";
import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";

export type MossaUpdateInput = {
  azione?: string | null;
  mano?: ManoWhereUniqueInput | null;
  giocatore?: GiocatoreWhereUniqueInput | null;
};
