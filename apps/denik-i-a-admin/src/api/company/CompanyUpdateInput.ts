import { VacancyUpdateManyWithoutCompaniesInput } from "./VacancyUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  vacancies?: VacancyUpdateManyWithoutCompaniesInput;
};
