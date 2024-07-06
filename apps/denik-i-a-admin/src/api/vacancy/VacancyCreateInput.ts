import { ApplicationCreateNestedManyWithoutVacanciesInput } from "./ApplicationCreateNestedManyWithoutVacanciesInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type VacancyCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutVacanciesInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
