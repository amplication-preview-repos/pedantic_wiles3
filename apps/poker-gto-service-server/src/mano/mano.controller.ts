import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManoService } from "./mano.service";
import { ManoControllerBase } from "./base/mano.controller.base";

@swagger.ApiTags("manos")
@common.Controller("manos")
export class ManoController extends ManoControllerBase {
  constructor(
    protected readonly service: ManoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
