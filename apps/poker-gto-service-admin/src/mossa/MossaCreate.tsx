import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManoTitle } from "../mano/ManoTitle";
import { GiocatoreTitle } from "../giocatore/GiocatoreTitle";

export const MossaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="azione" source="azione" />
        <ReferenceInput source="mano.id" reference="Mano" label="Mano">
          <SelectInput optionText={ManoTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="giocatore.id"
          reference="Giocatore"
          label="Giocatore"
        >
          <SelectInput optionText={GiocatoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
