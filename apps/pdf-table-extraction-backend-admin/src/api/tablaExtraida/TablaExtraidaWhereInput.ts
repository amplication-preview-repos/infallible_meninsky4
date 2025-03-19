import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TablaExtraidaWhereInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput;
  contenidoTabla?: JsonFilter;
  id?: StringFilter;
  numeroColumnas?: IntNullableFilter;
  numeroFilas?: IntNullableFilter;
};
