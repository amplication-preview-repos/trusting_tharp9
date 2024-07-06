import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VacancyServiceBase } from "./base/vacancy.service.base";

@Injectable()
export class VacancyService extends VacancyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
