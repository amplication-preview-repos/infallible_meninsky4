import { SortOrder } from "../../util/SortOrder";

export type ArchivoPdfOrderByInput = {
  createdAt?: SortOrder;
  formato?: SortOrder;
  id?: SortOrder;
  nombreArchivo?: SortOrder;
  tamano?: SortOrder;
  updatedAt?: SortOrder;
};
