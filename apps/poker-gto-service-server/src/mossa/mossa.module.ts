import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MossaModuleBase } from "./base/mossa.module.base";
import { MossaService } from "./mossa.service";
import { MossaController } from "./mossa.controller";
import { MossaResolver } from "./mossa.resolver";

@Module({
  imports: [MossaModuleBase, forwardRef(() => AuthModule)],
  controllers: [MossaController],
  providers: [MossaService, MossaResolver],
  exports: [MossaService],
})
export class MossaModule {}
