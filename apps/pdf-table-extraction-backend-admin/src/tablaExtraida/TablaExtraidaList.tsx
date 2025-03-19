import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ARCHIVOPDF_TITLE_FIELD } from "../archivoPdf/ArchivoPdfTitle";

export const TablaExtraidaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TablaExtraidas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="ArchivoPdf"
          source="archivopdf.id"
          reference="ArchivoPdf"
        >
          <TextField source={ARCHIVOPDF_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="contenidoTabla" source="contenidoTabla" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="numeroColumnas" source="numeroColumnas" />
        <TextField label="numeroFilas" source="numeroFilas" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
