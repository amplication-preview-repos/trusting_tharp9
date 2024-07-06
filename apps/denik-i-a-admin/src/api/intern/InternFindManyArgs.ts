import { InternWhereInput } from "./InternWhereInput";
import { InternOrderByInput } from "./InternOrderByInput";

export type InternFindManyArgs = {
  where?: InternWhereInput;
  orderBy?: Array<InternOrderByInput>;
  skip?: number;
  take?: number;
};
