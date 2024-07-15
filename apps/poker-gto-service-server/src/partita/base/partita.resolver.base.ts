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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Partita } from "./Partita";
import { PartitaCountArgs } from "./PartitaCountArgs";
import { PartitaFindManyArgs } from "./PartitaFindManyArgs";
import { PartitaFindUniqueArgs } from "./PartitaFindUniqueArgs";
import { CreatePartitaArgs } from "./CreatePartitaArgs";
import { UpdatePartitaArgs } from "./UpdatePartitaArgs";
import { DeletePartitaArgs } from "./DeletePartitaArgs";
import { StartPartitaDto } from "../StartPartitaDto";
import { PartitaService } from "../partita.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Partita)
export class PartitaResolverBase {
  constructor(
    protected readonly service: PartitaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "read",
    possession: "any",
  })
  async _partitasMeta(
    @graphql.Args() args: PartitaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Partita])
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "read",
    possession: "any",
  })
  async partitas(
    @graphql.Args() args: PartitaFindManyArgs
  ): Promise<Partita[]> {
    return this.service.partitas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Partita, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "read",
    possession: "own",
  })
  async partita(
    @graphql.Args() args: PartitaFindUniqueArgs
  ): Promise<Partita | null> {
    const result = await this.service.partita(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Partita)
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "create",
    possession: "any",
  })
  async createPartita(
    @graphql.Args() args: CreatePartitaArgs
  ): Promise<Partita> {
    return await this.service.createPartita({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Partita)
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "update",
    possession: "any",
  })
  async updatePartita(
    @graphql.Args() args: UpdatePartitaArgs
  ): Promise<Partita | null> {
    try {
      return await this.service.updatePartita({
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

  @graphql.Mutation(() => Partita)
  @nestAccessControl.UseRoles({
    resource: "Partita",
    action: "delete",
    possession: "any",
  })
  async deletePartita(
    @graphql.Args() args: DeletePartitaArgs
  ): Promise<Partita | null> {
    try {
      return await this.service.deletePartita(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async FinishPartita(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FinishPartita(args);
  }

  @graphql.Mutation(() => String)
  async StartPartita(
    @graphql.Args()
    args: StartPartitaDto
  ): Promise<string> {
    return this.service.StartPartita(args);
  }
}
