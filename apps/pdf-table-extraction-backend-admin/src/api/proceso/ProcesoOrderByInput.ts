import { SortOrder } from "../../util/SortOrder";

export type ProcesoOrderByInput = {
  archivoPdfId?: SortOrder;
  createdAt?: SortOrder;
  estado?: SortOrder;
  id?: SortOrder;
  mensajeError?: SortOrder;
  updatedAt?: SortOrder;
};
