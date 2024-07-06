import { StringFilter } from "../../util/StringFilter";
import { InternWhereUniqueInput } from "../intern/InternWhereUniqueInput";
import { VacancyWhereUniqueInput } from "../vacancy/VacancyWhereUniqueInput";

export type ApplicationWhereInput = {
  id?: StringFilter;
  intern?: InternWhereUniqueInput;
  status?: "Option1";
  vacancy?: VacancyWhereUniqueInput;
};
