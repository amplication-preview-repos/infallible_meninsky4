import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ProcesoTitle } from "../proceso/ProcesoTitle";
import { ResultadoOcrTitle } from "../resultadoOcr/ResultadoOcrTitle";
import { TablaExtraidaTitle } from "../tablaExtraida/TablaExtraidaTitle";

export const ArchivoPdfCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="formato" source="formato" />
        <TextInput label="nombreArchivo" source="nombreArchivo" />
        <ReferenceArrayInput source="procesos" reference="Proceso">
          <SelectArrayInput
            optionText={ProcesoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="resultadoOcrs" reference="ResultadoOcr">
          <SelectArrayInput
            optionText={ResultadoOcrTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="tablaExtraidas" reference="TablaExtraida">
          <SelectArrayInput
            optionText={TablaExtraidaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="tamano" source="tamano" />
      </SimpleForm>
    </Create>
  );
};
