import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PartitaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="data" source="data" />
        <TextInput label="Giocatori" source="giocatori" />
        <TextInput label="vincitore" source="vincitore" />
      </SimpleForm>
    </Create>
  );
};
