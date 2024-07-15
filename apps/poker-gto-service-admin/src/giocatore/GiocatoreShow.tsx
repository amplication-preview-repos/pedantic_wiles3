import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GIOCATORE_TITLE_FIELD } from "./GiocatoreTitle";
import { MANO_TITLE_FIELD } from "../mano/ManoTitle";

export const GiocatoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="nome" source="nome" />
        <TextField label="saldo" source="saldo" />
        <ReferenceManyField reference="Mano" target="giocatoreId" label="Manos">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Mossa"
          target="giocatoreId"
          label="Mossas"
        >
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
