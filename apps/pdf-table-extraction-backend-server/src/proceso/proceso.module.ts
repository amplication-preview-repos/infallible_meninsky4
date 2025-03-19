import { Module } from "@nestjs/common";
import { ProcesoModuleBase } from "./base/proceso.module.base";
import { ProcesoService } from "./proceso.service";
import { ProcesoController } from "./proceso.controller";
import { ProcesoResolver } from "./proceso.resolver";

@Module({
  imports: [ProcesoModuleBase],
  controllers: [ProcesoController],
  providers: [ProcesoService, ProcesoResolver],
  exports: [ProcesoService],
})
export class ProcesoModule {}
