import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ARCHIVOPDF_TITLE_FIELD } from "../archivoPdf/ArchivoPdfTitle";

export const TablaExtraidaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
