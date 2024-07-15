import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PartitaModuleBase } from "./base/partita.module.base";
import { PartitaService } from "./partita.service";
import { PartitaController } from "./partita.controller";
import { PartitaResolver } from "./partita.resolver";

@Module({
  imports: [PartitaModuleBase, forwardRef(() => AuthModule)],
  controllers: [PartitaController],
  providers: [PartitaService, PartitaResolver],
  exports: [PartitaService],
})
export class PartitaModule {}
