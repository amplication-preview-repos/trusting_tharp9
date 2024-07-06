import { Vacancy } from "../vacancy/Vacancy";

export type Company = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
  vacancies?: Array<Vacancy>;
};
