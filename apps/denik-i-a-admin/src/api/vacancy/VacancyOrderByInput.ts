import { SortOrder } from "../../util/SortOrder";

export type VacancyOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
