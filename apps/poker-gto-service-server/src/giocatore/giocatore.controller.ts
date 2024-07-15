import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GiocatoreService } from "./giocatore.service";
import { GiocatoreControllerBase } from "./base/giocatore.controller.base";

@swagger.ApiTags("giocatores")
@common.Controller("giocatores")
export class GiocatoreController extends GiocatoreControllerBase {
  constructor(
    protected readonly service: GiocatoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
