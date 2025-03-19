import { ArchivoPdf as TArchivoPdf } from "../api/archivoPdf/ArchivoPdf";

export const ARCHIVOPDF_TITLE_FIELD = "formato";

export const ArchivoPdfTitle = (record: TArchivoPdf): string => {
  return record.formato?.toString() || String(record.id);
};
