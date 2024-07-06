import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VacancyService } from "./vacancy.service";
import { VacancyControllerBase } from "./base/vacancy.controller.base";

@swagger.ApiTags("vacancies")
@common.Controller("vacancies")
export class VacancyController extends VacancyControllerBase {
  constructor(protected readonly service: VacancyService) {
    super(service);
  }
}
