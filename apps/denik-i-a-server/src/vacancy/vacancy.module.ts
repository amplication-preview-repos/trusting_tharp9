import { Module } from "@nestjs/common";
import { VacancyModuleBase } from "./base/vacancy.module.base";
import { VacancyService } from "./vacancy.service";
import { VacancyController } from "./vacancy.controller";
import { VacancyResolver } from "./vacancy.resolver";

@Module({
  imports: [VacancyModuleBase],
  controllers: [VacancyController],
  providers: [VacancyService, VacancyResolver],
  exports: [VacancyService],
})
export class VacancyModule {}
