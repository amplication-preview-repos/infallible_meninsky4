import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProcesoListRelationFilter } from "../proceso/ProcesoListRelationFilter";
import { ResultadoOcrListRelationFilter } from "../resultadoOcr/ResultadoOcrListRelationFilter";
import { TablaExtraidaListRelationFilter } from "../tablaExtraida/TablaExtraidaListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ArchivoPdfWhereInput = {
  formato?: StringNullableFilter;
  id?: StringFilter;
  nombreArchivo?: StringNullableFilter;
  procesos?: ProcesoListRelationFilter;
  resultadoOcrs?: ResultadoOcrListRelationFilter;
  tablaExtraidas?: TablaExtraidaListRelationFilter;
  tamano?: IntNullableFilter;
};
