import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";

export type ResultadoOcrCreateInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput | null;
  lenguajeDetectado?: string | null;
  textoExtraido?: string | null;
};
