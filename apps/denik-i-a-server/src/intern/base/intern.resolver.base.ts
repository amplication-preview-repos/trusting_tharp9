/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Intern } from "./Intern";
import { InternCountArgs } from "./InternCountArgs";
import { InternFindManyArgs } from "./InternFindManyArgs";
import { InternFindUniqueArgs } from "./InternFindUniqueArgs";
import { CreateInternArgs } from "./CreateInternArgs";
import { UpdateInternArgs } from "./UpdateInternArgs";
import { DeleteInternArgs } from "./DeleteInternArgs";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { InternService } from "../intern.service";
@graphql.Resolver(() => Intern)
export class InternResolverBase {
  constructor(protected readonly service: InternService) {}

  async _internsMeta(
    @graphql.Args() args: InternCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Intern])
  async interns(@graphql.Args() args: InternFindManyArgs): Promise<Intern[]> {
    return this.service.interns(args);
  }

  @graphql.Query(() => Intern, { nullable: true })
  async intern(
    @graphql.Args() args: InternFindUniqueArgs
  ): Promise<Intern | null> {
    const result = await this.service.intern(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Intern)
  async createIntern(@graphql.Args() args: CreateInternArgs): Promise<Intern> {
    return await this.service.createIntern({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Intern)
  async updateIntern(
    @graphql.Args() args: UpdateInternArgs
  ): Promise<Intern | null> {
    try {
      return await this.service.updateIntern({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Intern)
  async deleteIntern(
    @graphql.Args() args: DeleteInternArgs
  ): Promise<Intern | null> {
    try {
      return await this.service.deleteIntern(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Application], { name: "applications" })
  async findApplications(
    @graphql.Parent() parent: Intern,
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    const results = await this.service.findApplications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
