import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GiocatoreWhereUniqueInput } from "../giocatore/GiocatoreWhereUniqueInput";
import { MossaListRelationFilter } from "../mossa/MossaListRelationFilter";

export type ManoWhereInput = {
  id?: StringFilter;
  carte?: StringNullableFilter;
  puntata?: FloatNullableFilter;
  giocatore?: GiocatoreWhereUniqueInput;
  mossas?: MossaListRelationFilter;
};
