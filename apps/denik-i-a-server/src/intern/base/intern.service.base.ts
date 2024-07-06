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
  Intern as PrismaIntern,
  Application as PrismaApplication,
} from "@prisma/client";

export class InternServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InternCountArgs, "select">): Promise<number> {
    return this.prisma.intern.count(args);
  }

  async interns(args: Prisma.InternFindManyArgs): Promise<PrismaIntern[]> {
    return this.prisma.intern.findMany(args);
  }
  async intern(
    args: Prisma.InternFindUniqueArgs
  ): Promise<PrismaIntern | null> {
    return this.prisma.intern.findUnique(args);
  }
  async createIntern(args: Prisma.InternCreateArgs): Promise<PrismaIntern> {
    return this.prisma.intern.create(args);
  }
  async updateIntern(args: Prisma.InternUpdateArgs): Promise<PrismaIntern> {
    return this.prisma.intern.update(args);
  }
  async deleteIntern(args: Prisma.InternDeleteArgs): Promise<PrismaIntern> {
    return this.prisma.intern.delete(args);
  }

  async findApplications(
    parentId: string,
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.intern
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applications(args);
  }
}
