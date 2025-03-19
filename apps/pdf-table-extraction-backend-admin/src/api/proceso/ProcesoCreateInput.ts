import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";

export type ProcesoCreateInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput | null;
  estado?: string | null;
  mensajeError?: string | null;
};
