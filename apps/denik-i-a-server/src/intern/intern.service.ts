import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternServiceBase } from "./base/intern.service.base";

@Injectable()
export class InternService extends InternServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
