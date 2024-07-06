import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VacancyWhereInput = {
  applications?: ApplicationListRelationFilter;
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
