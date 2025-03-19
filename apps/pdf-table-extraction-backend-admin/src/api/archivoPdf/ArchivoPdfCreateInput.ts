import { ProcesoCreateNestedManyWithoutArchivoPdfsInput } from "./ProcesoCreateNestedManyWithoutArchivoPdfsInput";
import { ResultadoOcrCreateNestedManyWithoutArchivoPdfsInput } from "./ResultadoOcrCreateNestedManyWithoutArchivoPdfsInput";
import { TablaExtraidaCreateNestedManyWithoutArchivoPdfsInput } from "./TablaExtraidaCreateNestedManyWithoutArchivoPdfsInput";

export type ArchivoPdfCreateInput = {
  formato?: string | null;
  nombreArchivo?: string | null;
  procesos?: ProcesoCreateNestedManyWithoutArchivoPdfsInput;
  resultadoOcrs?: ResultadoOcrCreateNestedManyWithoutArchivoPdfsInput;
  tablaExtraidas?: TablaExtraidaCreateNestedManyWithoutArchivoPdfsInput;
  tamano?: number | null;
};
