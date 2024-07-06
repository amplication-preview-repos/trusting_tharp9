import { ApplicationUpdateManyWithoutVacanciesInput } from "./ApplicationUpdateManyWithoutVacanciesInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type VacancyUpdateInput = {
  applications?: ApplicationUpdateManyWithoutVacanciesInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
