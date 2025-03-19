import { ArchivoPdf } from "../archivoPdf/ArchivoPdf";

export type Proceso = {
  archivoPdf?: ArchivoPdf | null;
  createdAt: Date;
  estado: string | null;
  id: string;
  mensajeError: string | null;
  updatedAt: Date;
};
