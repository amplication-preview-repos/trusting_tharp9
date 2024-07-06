import { VacancyCreateNestedManyWithoutCompaniesInput } from "./VacancyCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  vacancies?: VacancyCreateNestedManyWithoutCompaniesInput;
};
