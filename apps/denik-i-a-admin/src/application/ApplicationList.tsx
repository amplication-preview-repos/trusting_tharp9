import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INTERN_TITLE_FIELD } from "../intern/InternTitle";
import { VACANCY_TITLE_FIELD } from "../vacancy/VacancyTitle";

export const ApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Applications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Intern" source="intern.id" reference="Intern">
          <TextField source={INTERN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Vacancy" source="vacancy.id" reference="Vacancy">
          <TextField source={VACANCY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
