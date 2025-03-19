import { ArchivoPdfWhereUniqueInput } from "../archivoPdf/ArchivoPdfWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TablaExtraidaUpdateInput = {
  archivoPdf?: ArchivoPdfWhereUniqueInput | null;
  contenidoTabla?: InputJsonValue;
  numeroColumnas?: number | null;
  numeroFilas?: number | null;
};
