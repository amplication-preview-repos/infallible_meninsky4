import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ArchivoPdfTitle } from "../archivoPdf/ArchivoPdfTitle";

export const TablaExtraidaEdit = (props: EditProps): React.ReactElement => {
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
        <div />
        <NumberInput step={1} label="numeroColumnas" source="numeroColumnas" />
        <NumberInput step={1} label="numeroFilas" source="numeroFilas" />
      </SimpleForm>
    </Edit>
  );
};
