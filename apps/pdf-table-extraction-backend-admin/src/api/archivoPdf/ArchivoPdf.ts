import { Proceso } from "../proceso/Proceso";
import { ResultadoOcr } from "../resultadoOcr/ResultadoOcr";
import { TablaExtraida } from "../tablaExtraida/TablaExtraida";

export type ArchivoPdf = {
  createdAt: Date;
  formato: string | null;
  id: string;
  nombreArchivo: string | null;
  procesos?: Array<Proceso>;
  resultadoOcrs?: Array<ResultadoOcr>;
  tablaExtraidas?: Array<TablaExtraida>;
  tamano: number | null;
  updatedAt: Date;
};
