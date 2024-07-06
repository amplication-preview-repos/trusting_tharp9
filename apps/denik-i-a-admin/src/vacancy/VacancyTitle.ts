import { Vacancy as TVacancy } from "../api/vacancy/Vacancy";

export const VACANCY_TITLE_FIELD = "title";

export const VacancyTitle = (record: TVacancy): string => {
  return record.title?.toString() || String(record.id);
};
