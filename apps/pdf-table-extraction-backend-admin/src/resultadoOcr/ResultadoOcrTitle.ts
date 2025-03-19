import { ResultadoOcr as TResultadoOcr } from "../api/resultadoOcr/ResultadoOcr";

export const RESULTADOOCR_TITLE_FIELD = "lenguajeDetectado";

export const ResultadoOcrTitle = (record: TResultadoOcr): string => {
  return record.lenguajeDetectado?.toString() || String(record.id);
};
