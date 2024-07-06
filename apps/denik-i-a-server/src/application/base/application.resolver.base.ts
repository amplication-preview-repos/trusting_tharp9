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
import { Application } from "./Application";
import { ApplicationCountArgs } from "./ApplicationCountArgs";
import { ApplicationFindManyArgs } from "./ApplicationFindManyArgs";
import { ApplicationFindUniqueArgs } from "./ApplicationFindUniqueArgs";
import { CreateApplicationArgs } from "./CreateApplicationArgs";
import { UpdateApplicationArgs } from "./UpdateApplicationArgs";
import { DeleteApplicationArgs } from "./DeleteApplicationArgs";
import { Intern } from "../../intern/base/Intern";
import { Vacancy } from "../../vacancy/base/Vacancy";
import { ApplicationService } from "../application.service";
@graphql.Resolver(() => Application)
export class ApplicationResolverBase {
  constructor(protected readonly service: ApplicationService) {}

  async _applicationsMeta(
    @graphql.Args() args: ApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Application])
  async applications(
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    return this.service.applications(args);
  }

  @graphql.Query(() => Application, { nullable: true })
  async application(
    @graphql.Args() args: ApplicationFindUniqueArgs
  ): Promise<Application | null> {
    const result = await this.service.application(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Application)
  async createApplication(
    @graphql.Args() args: CreateApplicationArgs
  ): Promise<Application> {
    return await this.service.createApplication({
      ...args,
      data: {
        ...args.data,

        intern: args.data.intern
          ? {
              connect: args.data.intern,
            }
          : undefined,

        vacancy: args.data.vacancy
          ? {
              connect: args.data.vacancy,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Application)
  async updateApplication(
    @graphql.Args() args: UpdateApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.updateApplication({
        ...args,
        data: {
          ...args.data,

          intern: args.data.intern
            ? {
                connect: args.data.intern,
              }
            : undefined,

          vacancy: args.data.vacancy
            ? {
                connect: args.data.vacancy,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Application)
  async deleteApplication(
    @graphql.Args() args: DeleteApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.deleteApplication(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Intern, {
    nullable: true,
    name: "intern",
  })
  async getIntern(
    @graphql.Parent() parent: Application
  ): Promise<Intern | null> {
    const result = await this.service.getIntern(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Vacancy, {
    nullable: true,
    name: "vacancy",
  })
  async getVacancy(
    @graphql.Parent() parent: Application
  ): Promise<Vacancy | null> {
    const result = await this.service.getVacancy(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
