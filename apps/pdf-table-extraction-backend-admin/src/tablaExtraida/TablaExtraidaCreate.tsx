import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ArchivoPdfTitle } from "../archivoPdf/ArchivoPdfTitle";

export const TablaExtraidaCreate = (props: CreateProps): React.ReactElement => {
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
        <div />
        <NumberInput step={1} label="numeroColumnas" source="numeroColumnas" />
        <NumberInput step={1} label="numeroFilas" source="numeroFilas" />
      </SimpleForm>
    </Create>
  );
};
