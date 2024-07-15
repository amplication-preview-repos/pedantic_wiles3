import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManoTitle } from "../mano/ManoTitle";
import { GiocatoreTitle } from "../giocatore/GiocatoreTitle";

export const MossaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
