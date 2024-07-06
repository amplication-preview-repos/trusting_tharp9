import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InternTitle } from "../intern/InternTitle";
import { VacancyTitle } from "../vacancy/VacancyTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="intern.id" reference="Intern" label="Intern">
          <SelectInput optionText={InternTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="vacancy.id" reference="Vacancy" label="Vacancy">
          <SelectInput optionText={VacancyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
