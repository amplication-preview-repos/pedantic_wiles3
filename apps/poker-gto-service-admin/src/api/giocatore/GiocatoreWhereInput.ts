import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ManoListRelationFilter } from "../mano/ManoListRelationFilter";
import { MossaListRelationFilter } from "../mossa/MossaListRelationFilter";

export type GiocatoreWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  saldo?: FloatNullableFilter;
  manos?: ManoListRelationFilter;
  mossas?: MossaListRelationFilter;
};
