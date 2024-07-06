import { Intern } from "../intern/Intern";
import { Vacancy } from "../vacancy/Vacancy";

export type Application = {
  createdAt: Date;
  id: string;
  intern?: Intern | null;
  status?: "Option1" | null;
  updatedAt: Date;
  vacancy?: Vacancy | null;
};
