import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MANO_TITLE_FIELD } from "../mano/ManoTitle";
import { GIOCATORE_TITLE_FIELD } from "../giocatore/GiocatoreTitle";

export const MossaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Mossas"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
