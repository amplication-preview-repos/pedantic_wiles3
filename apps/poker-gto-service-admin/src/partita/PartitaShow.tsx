import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PartitaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="data" source="data" />
        <TextField label="Giocatori" source="giocatori" />
        <TextField label="vincitore" source="vincitore" />
      </SimpleShowLayout>
    </Show>
  );
};
