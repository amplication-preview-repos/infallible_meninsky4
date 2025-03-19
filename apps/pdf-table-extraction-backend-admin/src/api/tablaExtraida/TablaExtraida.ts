import { ArchivoPdf } from "../archivoPdf/ArchivoPdf";
import { JsonValue } from "type-fest";

export type TablaExtraida = {
  archivoPdf?: ArchivoPdf | null;
  contenidoTabla: JsonValue;
  createdAt: Date;
  id: string;
  numeroColumnas: number | null;
  numeroFilas: number | null;
  updatedAt: Date;
};
