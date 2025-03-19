import { SortOrder } from "../../util/SortOrder";

export type ResultadoOcrOrderByInput = {
  archivoPdfId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lenguajeDetectado?: SortOrder;
  textoExtraido?: SortOrder;
  updatedAt?: SortOrder;
};
