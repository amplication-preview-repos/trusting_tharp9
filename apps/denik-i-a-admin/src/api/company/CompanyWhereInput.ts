import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VacancyListRelationFilter } from "../vacancy/VacancyListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  vacancies?: VacancyListRelationFilter;
};
