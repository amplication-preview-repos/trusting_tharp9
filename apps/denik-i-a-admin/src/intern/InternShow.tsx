import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INTERN_TITLE_FIELD } from "./InternTitle";
import { VACANCY_TITLE_FIELD } from "../vacancy/VacancyTitle";

export const InternShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="resume" source="resume" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="internId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Intern"
              source="intern.id"
              reference="Intern"
            >
              <TextField source={INTERN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vacancy"
              source="vacancy.id"
              reference="Vacancy"
            >
              <TextField source={VACANCY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
