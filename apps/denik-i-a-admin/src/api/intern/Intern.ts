import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type Intern = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  resume: JsonValue;
  updatedAt: Date;
};
