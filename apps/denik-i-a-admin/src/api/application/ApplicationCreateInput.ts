import { InternWhereUniqueInput } from "../intern/InternWhereUniqueInput";
import { VacancyWhereUniqueInput } from "../vacancy/VacancyWhereUniqueInput";

export type ApplicationCreateInput = {
  intern?: InternWhereUniqueInput | null;
  status?: "Option1" | null;
  vacancy?: VacancyWhereUniqueInput | null;
};
