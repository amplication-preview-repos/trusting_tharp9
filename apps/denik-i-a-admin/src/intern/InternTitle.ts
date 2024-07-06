import { Intern as TIntern } from "../api/intern/Intern";

export const INTERN_TITLE_FIELD = "name";

export const InternTitle = (record: TIntern): string => {
  return record.name?.toString() || String(record.id);
};
