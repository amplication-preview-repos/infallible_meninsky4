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

export const ResultadoOcrCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="lenguajeDetectado" source="lenguajeDetectado" />
        <TextInput label="textoExtraido" multiline source="textoExtraido" />
      </SimpleForm>
    </Create>
  );
};
