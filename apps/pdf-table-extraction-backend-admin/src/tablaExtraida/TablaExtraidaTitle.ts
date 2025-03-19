import { TablaExtraida as TTablaExtraida } from "../api/tablaExtraida/TablaExtraida";

export const TABLAEXTRAIDA_TITLE_FIELD = "id";

export const TablaExtraidaTitle = (record: TTablaExtraida): string => {
  return record.id?.toString() || String(record.id);
};
