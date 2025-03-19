import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArchivoPdfList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ArchivoPDFS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="formato" source="formato" />
        <TextField label="ID" source="id" />
        <TextField label="nombreArchivo" source="nombreArchivo" />
        <TextField label="tamano" source="tamano" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
