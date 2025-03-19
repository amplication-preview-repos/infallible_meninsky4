import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";

export type ProcesoUpdateInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput | null;
  estado?: string | null;
  mensajeError?: string | null;
};
