import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GiocatoreTitle } from "../giocatore/GiocatoreTitle";
import { MossaTitle } from "../mossa/MossaTitle";

export const ManoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="carte" multiline source="carte" />
        <NumberInput label="puntata" source="puntata" />
        <ReferenceInput
          source="giocatore.id"
          reference="Giocatore"
          label="Giocatore"
        >
          <SelectInput optionText={GiocatoreTitle} />
        </ReferenceInput>
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
