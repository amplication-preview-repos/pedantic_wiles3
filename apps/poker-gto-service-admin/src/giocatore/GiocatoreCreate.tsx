import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ManoTitle } from "../mano/ManoTitle";
import { MossaTitle } from "../mossa/MossaTitle";

export const GiocatoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nome" source="nome" />
        <NumberInput label="saldo" source="saldo" />
        <ReferenceArrayInput
          source="manos"
          reference="Mano"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ManoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mossas"
          reference="Mossa"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MossaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
