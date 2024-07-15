import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ManoList } from "./mano/ManoList";
import { ManoCreate } from "./mano/ManoCreate";
import { ManoEdit } from "./mano/ManoEdit";
import { ManoShow } from "./mano/ManoShow";
import { PartitaList } from "./partita/PartitaList";
import { PartitaCreate } from "./partita/PartitaCreate";
import { PartitaEdit } from "./partita/PartitaEdit";
import { PartitaShow } from "./partita/PartitaShow";
import { GiocatoreList } from "./giocatore/GiocatoreList";
import { GiocatoreCreate } from "./giocatore/GiocatoreCreate";
import { GiocatoreEdit } from "./giocatore/GiocatoreEdit";
import { GiocatoreShow } from "./giocatore/GiocatoreShow";
import { MossaList } from "./mossa/MossaList";
import { MossaCreate } from "./mossa/MossaCreate";
import { MossaEdit } from "./mossa/MossaEdit";
import { MossaShow } from "./mossa/MossaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PokerGTOService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Mano"
          list={ManoList}
          edit={ManoEdit}
          create={ManoCreate}
          show={ManoShow}
        />
        <Resource
          name="Partita"
          list={PartitaList}
          edit={PartitaEdit}
          create={PartitaCreate}
          show={PartitaShow}
        />
        <Resource
          name="Giocatore"
          list={GiocatoreList}
          edit={GiocatoreEdit}
          create={GiocatoreCreate}
          show={GiocatoreShow}
        />
        <Resource
          name="Mossa"
          list={MossaList}
          edit={MossaEdit}
          create={MossaCreate}
          show={MossaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
