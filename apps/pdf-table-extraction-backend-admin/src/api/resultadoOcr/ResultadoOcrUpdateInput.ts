import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";

export type ResultadoOcrUpdateInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput | null;
  lenguajeDetectado?: string | null;
  textoExtraido?: string | null;
};
