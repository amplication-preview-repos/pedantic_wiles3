import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MANO_TITLE_FIELD } from "./ManoTitle";
import { GIOCATORE_TITLE_FIELD } from "../giocatore/GiocatoreTitle";

export const ManoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="carte" source="carte" />
        <TextField label="puntata" source="puntata" />
        <ReferenceField
          label="Giocatore"
          source="giocatore.id"
          reference="Giocatore"
        >
          <TextField source={GIOCATORE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Mossa" target="manoId" label="Mossas">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="azione" source="azione" />
            <ReferenceField label="Mano" source="mano.id" reference="Mano">
              <TextField source={MANO_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Giocatore"
              source="giocatore.id"
              reference="Giocatore"
            >
              <TextField source={GIOCATORE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
