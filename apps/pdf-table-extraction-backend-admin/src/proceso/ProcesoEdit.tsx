import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ArchivoPdfTitle } from "../archivoPdf/ArchivoPdfTitle";

export const ProcesoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
