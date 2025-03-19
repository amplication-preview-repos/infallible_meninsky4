import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProcesoWhereInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput;
  estado?: StringNullableFilter;
  id?: StringFilter;
  mensajeError?: StringNullableFilter;
};
