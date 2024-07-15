import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PartitaWhereInput = {
  id?: StringFilter;
  data?: DateTimeNullableFilter;
  giocatori?: StringNullableFilter;
  vincitore?: StringNullableFilter;
};
