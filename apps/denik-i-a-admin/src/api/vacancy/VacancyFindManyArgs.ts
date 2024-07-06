import { VacancyWhereInput } from "./VacancyWhereInput";
import { VacancyOrderByInput } from "./VacancyOrderByInput";

export type VacancyFindManyArgs = {
  where?: VacancyWhereInput;
  orderBy?: Array<VacancyOrderByInput>;
  skip?: number;
  take?: number;
};
