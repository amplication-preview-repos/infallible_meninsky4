import { Proceso as TProceso } from "../api/proceso/Proceso";

export const PROCESO_TITLE_FIELD = "estado";

export const ProcesoTitle = (record: TProceso): string => {
  return record.estado?.toString() || String(record.id);
};
