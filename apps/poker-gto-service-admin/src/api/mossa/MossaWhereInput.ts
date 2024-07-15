import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ManoWhereUniqueInput } from "../mano/ManoWhereUniqueInput";
import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";

export type MossaWhereInput = {
  id?: StringFilter;
  azione?: StringNullableFilter;
  mano?: ManoWhereUniqueInput;
  giocatore?: GiocatoreWhereUniqueInput;
};
