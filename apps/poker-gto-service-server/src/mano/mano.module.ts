import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ManoModuleBase } from "./base/mano.module.base";
import { ManoService } from "./mano.service";
import { ManoController } from "./mano.controller";
import { ManoResolver } from "./mano.resolver";

@Module({
  imports: [ManoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ManoController],
  providers: [ManoService, ManoResolver],
  exports: [ManoService],
})
export class ManoModule {}
