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

export const ProcesoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Procesos"}
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="estado" source="estado" />
        <TextField label="ID" source="id" />
        <TextField label="mensajeError" source="mensajeError" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
