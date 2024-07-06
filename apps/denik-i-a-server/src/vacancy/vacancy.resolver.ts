import * as graphql from "@nestjs/graphql";
import { VacancyResolverBase } from "./base/vacancy.resolver.base";
import { Vacancy } from "./base/Vacancy";
import { VacancyService } from "./vacancy.service";

@graphql.Resolver(() => Vacancy)
export class VacancyResolver extends VacancyResolverBase {
  constructor(protected readonly service: VacancyService) {
    super(service);
  }
}
