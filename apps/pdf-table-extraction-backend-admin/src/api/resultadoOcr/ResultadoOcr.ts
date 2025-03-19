import { ArchivoPdf } from "../archivoPdf/ArchivoPdf";

export type ResultadoOcr = {
  archivoPdf?: ArchivoPdf | null;
  createdAt: Date;
  id: string;
  lenguajeDetectado: string | null;
  textoExtraido: string | null;
  updatedAt: Date;
};
