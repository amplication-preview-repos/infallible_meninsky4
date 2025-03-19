import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ARCHIVOPDF_TITLE_FIELD } from "./ArchivoPdfTitle";

export const ArchivoPdfShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="formato" source="formato" />
        <TextField label="ID" source="id" />
        <TextField label="nombreArchivo" source="nombreArchivo" />
        <TextField label="tamano" source="tamano" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Proceso"
          target="archivoPdfId"
          label="Procesos"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ResultadoOcr"
          target="archivoPdfId"
          label="ResultadoOCRS"
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
            <TextField label="ID" source="id" />
            <TextField label="lenguajeDetectado" source="lenguajeDetectado" />
            <TextField label="textoExtraido" source="textoExtraido" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TablaExtraida"
          target="archivoPdfId"
          label="TablaExtraidas"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
