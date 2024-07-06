import { Module } from "@nestjs/common";
import { InternModuleBase } from "./base/intern.module.base";
import { InternService } from "./intern.service";
import { InternController } from "./intern.controller";
import { InternResolver } from "./intern.resolver";

@Module({
  imports: [InternModuleBase],
  controllers: [InternController],
  providers: [InternService, InternResolver],
  exports: [InternService],
})
export class InternModule {}
