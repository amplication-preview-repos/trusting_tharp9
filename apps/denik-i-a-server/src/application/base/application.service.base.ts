/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Application as PrismaApplication,
  Intern as PrismaIntern,
  Vacancy as PrismaVacancy,
} from "@prisma/client";

export class ApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ApplicationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.application.count(args);
  }

  async applications(
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.application.findMany(args);
  }
  async application(
    args: Prisma.ApplicationFindUniqueArgs
  ): Promise<PrismaApplication | null> {
    return this.prisma.application.findUnique(args);
  }
  async createApplication(
    args: Prisma.ApplicationCreateArgs
  ): Promise<PrismaApplication> {
    return this.prisma.application.create(args);
  }
  async updateApplication(
    args: Prisma.ApplicationUpdateArgs
  ): Promise<PrismaApplication> {
    return this.prisma.application.update(args);
  }
  async deleteApplication(
    args: Prisma.ApplicationDeleteArgs
  ): Promise<PrismaApplication> {
    return this.prisma.application.delete(args);
  }

  async getIntern(parentId: string): Promise<PrismaIntern | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .intern();
  }

  async getVacancy(parentId: string): Promise<PrismaVacancy | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .vacancy();
  }
}