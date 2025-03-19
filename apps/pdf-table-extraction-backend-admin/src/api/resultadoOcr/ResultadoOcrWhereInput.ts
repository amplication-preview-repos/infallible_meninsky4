import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResultadoOcrWhereInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput;
  id?: StringFilter;
  lenguajeDetectado?: StringNullableFilter;
  textoExtraido?: StringNullableFilter;
};
