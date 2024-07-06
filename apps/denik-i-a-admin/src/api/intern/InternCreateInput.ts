import { ApplicationCreateNestedManyWithoutInternsInput } from "./ApplicationCreateNestedManyWithoutInternsInput";
import { InputJsonValue } from "../../types";

export type InternCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutInternsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  resume?: InputJsonValue;
};
