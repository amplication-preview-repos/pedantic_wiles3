import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MossaService } from "./mossa.service";
import { MossaControllerBase } from "./base/mossa.controller.base";

@swagger.ApiTags("mossas")
@common.Controller("mossas")
export class MossaController extends MossaControllerBase {
  constructor(
    protected readonly service: MossaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
