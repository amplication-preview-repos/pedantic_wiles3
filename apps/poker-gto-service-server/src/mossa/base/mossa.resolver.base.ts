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
import { Mossa } from "./Mossa";
import { MossaCountArgs } from "./MossaCountArgs";
import { MossaFindManyArgs } from "./MossaFindManyArgs";
import { MossaFindUniqueArgs } from "./MossaFindUniqueArgs";
import { CreateMossaArgs } from "./CreateMossaArgs";
import { UpdateMossaArgs } from "./UpdateMossaArgs";
import { DeleteMossaArgs } from "./DeleteMossaArgs";
import { Mano } from "../../mano/base/Mano";
import { Giocatore } from "../../giocatore/base/Giocatore";
import { AddMossaDto } from "../AddMossaDto";
import { MossaService } from "../mossa.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Mossa)
export class MossaResolverBase {
  constructor(
    protected readonly service: MossaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "read",
    possession: "any",
  })
  async _mossasMeta(
    @graphql.Args() args: MossaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Mossa])
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "read",
    possession: "any",
  })
  async mossas(@graphql.Args() args: MossaFindManyArgs): Promise<Mossa[]> {
    return this.service.mossas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Mossa, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "read",
    possession: "own",
  })
  async mossa(
    @graphql.Args() args: MossaFindUniqueArgs
  ): Promise<Mossa | null> {
    const result = await this.service.mossa(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mossa)
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "create",
    possession: "any",
  })
  async createMossa(@graphql.Args() args: CreateMossaArgs): Promise<Mossa> {
    return await this.service.createMossa({
      ...args,
      data: {
        ...args.data,

        mano: args.data.mano
          ? {
              connect: args.data.mano,
            }
          : undefined,

        giocatore: args.data.giocatore
          ? {
              connect: args.data.giocatore,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mossa)
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "update",
    possession: "any",
  })
  async updateMossa(
    @graphql.Args() args: UpdateMossaArgs
  ): Promise<Mossa | null> {
    try {
      return await this.service.updateMossa({
        ...args,
        data: {
          ...args.data,

          mano: args.data.mano
            ? {
                connect: args.data.mano,
              }
            : undefined,

          giocatore: args.data.giocatore
            ? {
                connect: args.data.giocatore,
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

  @graphql.Mutation(() => Mossa)
  @nestAccessControl.UseRoles({
    resource: "Mossa",
    action: "delete",
    possession: "any",
  })
  async deleteMossa(
    @graphql.Args() args: DeleteMossaArgs
  ): Promise<Mossa | null> {
    try {
      return await this.service.deleteMossa(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Mano, {
    nullable: true,
    name: "mano",
  })
  @nestAccessControl.UseRoles({
    resource: "Mano",
    action: "read",
    possession: "any",
  })
  async getMano(@graphql.Parent() parent: Mossa): Promise<Mano | null> {
    const result = await this.service.getMano(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Giocatore, {
    nullable: true,
    name: "giocatore",
  })
  @nestAccessControl.UseRoles({
    resource: "Giocatore",
    action: "read",
    possession: "any",
  })
  async getGiocatore(
    @graphql.Parent() parent: Mossa
  ): Promise<Giocatore | null> {
    const result = await this.service.getGiocatore(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => String)
  async AddMossa(
    @graphql.Args()
    args: AddMossaDto
  ): Promise<string> {
    return this.service.AddMossa(args);
  }
}