import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternService } from "./intern.service";
import { InternControllerBase } from "./base/intern.controller.base";

@swagger.ApiTags("interns")
@common.Controller("interns")
export class InternController extends InternControllerBase {
  constructor(protected readonly service: InternService) {
    super(service);
  }
}
