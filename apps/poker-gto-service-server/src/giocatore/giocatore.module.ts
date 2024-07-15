import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GiocatoreModuleBase } from "./base/giocatore.module.base";
import { GiocatoreService } from "./giocatore.service";
import { GiocatoreController } from "./giocatore.controller";
import { GiocatoreResolver } from "./giocatore.resolver";

@Module({
  imports: [GiocatoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [GiocatoreController],
  providers: [GiocatoreService, GiocatoreResolver],
  exports: [GiocatoreService],
})
export class GiocatoreModule {}
