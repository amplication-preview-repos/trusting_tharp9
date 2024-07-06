import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VacancyList } from "./vacancy/VacancyList";
import { VacancyCreate } from "./vacancy/VacancyCreate";
import { VacancyEdit } from "./vacancy/VacancyEdit";
import { VacancyShow } from "./vacancy/VacancyShow";
import { InternList } from "./intern/InternList";
import { InternCreate } from "./intern/InternCreate";
import { InternEdit } from "./intern/InternEdit";
import { InternShow } from "./intern/InternShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
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
        title={"Denik I&A"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vacancy"
          list={VacancyList}
          edit={VacancyEdit}
          create={VacancyCreate}
          show={VacancyShow}
        />
        <Resource
          name="Intern"
          list={InternList}
          edit={InternEdit}
          create={InternCreate}
          show={InternShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
