import * as graphql from "@nestjs/graphql";
import { InternResolverBase } from "./base/intern.resolver.base";
import { Intern } from "./base/Intern";
import { InternService } from "./intern.service";

@graphql.Resolver(() => Intern)
export class InternResolver extends InternResolverBase {
  constructor(protected readonly service: InternService) {
    super(service);
  }
}
