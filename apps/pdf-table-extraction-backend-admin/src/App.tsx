import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TablaExtraidaList } from "./tablaExtraida/TablaExtraidaList";
import { TablaExtraidaCreate } from "./tablaExtraida/TablaExtraidaCreate";
import { TablaExtraidaEdit } from "./tablaExtraida/TablaExtraidaEdit";
import { TablaExtraidaShow } from "./tablaExtraida/TablaExtraidaShow";
import { ResultadoOcrList } from "./resultadoOcr/ResultadoOcrList";
import { ResultadoOcrCreate } from "./resultadoOcr/ResultadoOcrCreate";
import { ResultadoOcrEdit } from "./resultadoOcr/ResultadoOcrEdit";
import { ResultadoOcrShow } from "./resultadoOcr/ResultadoOcrShow";
import { ProcesoList } from "./proceso/ProcesoList";
import { ProcesoCreate } from "./proceso/ProcesoCreate";
import { ProcesoEdit } from "./proceso/ProcesoEdit";
import { ProcesoShow } from "./proceso/ProcesoShow";
import { ArchivoPdfList } from "./archivoPdf/ArchivoPdfList";
import { ArchivoPdfCreate } from "./archivoPdf/ArchivoPdfCreate";
import { ArchivoPdfEdit } from "./archivoPdf/ArchivoPdfEdit";
import { ArchivoPdfShow } from "./archivoPdf/ArchivoPdfShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PDF Table Extraction Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TablaExtraida"
          list={TablaExtraidaList}
          edit={TablaExtraidaEdit}
          create={TablaExtraidaCreate}
          show={TablaExtraidaShow}
        />
        <Resource
          name="ResultadoOcr"
          list={ResultadoOcrList}
          edit={ResultadoOcrEdit}
          create={ResultadoOcrCreate}
          show={ResultadoOcrShow}
        />
        <Resource
          name="Proceso"
          list={ProcesoList}
          edit={ProcesoEdit}
          create={ProcesoCreate}
          show={ProcesoShow}
        />
        <Resource
          name="ArchivoPdf"
          list={ArchivoPdfList}
          edit={ArchivoPdfEdit}
          create={ArchivoPdfCreate}
          show={ArchivoPdfShow}
        />
      </Admin>
    </div>
  );
};

export default App;
