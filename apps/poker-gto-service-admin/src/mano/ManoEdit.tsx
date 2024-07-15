import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GiocatoreTitle } from "../giocatore/GiocatoreTitle";
import { MossaTitle } from "../mossa/MossaTitle";

export const ManoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
