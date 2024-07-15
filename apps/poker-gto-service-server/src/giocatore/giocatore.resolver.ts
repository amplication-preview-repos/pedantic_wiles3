import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GiocatoreResolverBase } from "./base/giocatore.resolver.base";
import { Giocatore } from "./base/Giocatore";
import { GiocatoreService } from "./giocatore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Giocatore)
export class GiocatoreResolver extends GiocatoreResolverBase {
  constructor(
    protected readonly service: GiocatoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
