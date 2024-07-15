import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PartitaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="data" source="data" />
        <TextInput label="Giocatori" source="giocatori" />
        <TextInput label="vincitore" source="vincitore" />
      </SimpleForm>
    </Edit>
  );
};
