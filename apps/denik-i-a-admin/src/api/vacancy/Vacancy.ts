import { Application } from "../application/Application";
import { Company } from "../company/Company";

export type Vacancy = {
  applications?: Array<Application>;
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
