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

export const ProcesoShow = (props: ShowProps): React.ReactElement => {
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="estado" source="estado" />
        <TextField label="ID" source="id" />
        <TextField label="mensajeError" source="mensajeError" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
