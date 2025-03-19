import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArchivoPdfTitle } from "../archivoPdf/ArchivoPdfTitle";

export const ProcesoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="archivoPdf.id"
          reference="ArchivoPdf"
          label="ArchivoPdf"
        >
          <SelectInput optionText={ArchivoPdfTitle} />
        </ReferenceInput>
        <TextInput label="estado" source="estado" />
        <TextInput label="mensajeError" multiline source="mensajeError" />
      </SimpleForm>
    </Create>
  );
};
