import { ApplicationUpdateManyWithoutInternsInput } from "./ApplicationUpdateManyWithoutInternsInput";
import { InputJsonValue } from "../../types";

export type InternUpdateInput = {
  applications?: ApplicationUpdateManyWithoutInternsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  resume?: InputJsonValue;
};
