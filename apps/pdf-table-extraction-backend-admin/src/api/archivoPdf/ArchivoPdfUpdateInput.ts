import { ProcesoUpdateManyWithoutArchivoPdfsInput } from "./ProcesoUpdateManyWithoutArchivoPdfsInput";
import { ResultadoOcrUpdateManyWithoutArchivoPdfsInput } from "./ResultadoOcrUpdateManyWithoutArchivoPdfsInput";
import { TablaExtraidaUpdateManyWithoutArchivoPdfsInput } from "./TablaExtraidaUpdateManyWithoutArchivoPdfsInput";

export type ArchivoPdfUpdateInput = {
  formato?: string | null;
  nombreArchivo?: string | null;
  procesos?: ProcesoUpdateManyWithoutArchivoPdfsInput;
  resultadoOcrs?: ResultadoOcrUpdateManyWithoutArchivoPdfsInput;
  tablaExtraidas?: TablaExtraidaUpdateManyWithoutArchivoPdfsInput;
  tamano?: number | null;
};
