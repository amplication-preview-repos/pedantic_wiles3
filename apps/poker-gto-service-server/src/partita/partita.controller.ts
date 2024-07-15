import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartitaService } from "./partita.service";
import { PartitaControllerBase } from "./base/partita.controller.base";

@swagger.ApiTags("partitas")
@common.Controller("partitas")
export class PartitaController extends PartitaControllerBase {
  constructor(
    protected readonly service: PartitaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
