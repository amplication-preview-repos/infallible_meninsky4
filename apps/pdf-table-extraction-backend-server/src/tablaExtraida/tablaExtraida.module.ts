import { Module } from "@nestjs/common";
import { TablaExtraidaModuleBase } from "./base/tablaExtraida.module.base";
import { TablaExtraidaService } from "./tablaExtraida.service";
import { TablaExtraidaController } from "./tablaExtraida.controller";
import { TablaExtraidaResolver } from "./tablaExtraida.resolver";

@Module({
  imports: [TablaExtraidaModuleBase],
  controllers: [TablaExtraidaController],
  providers: [TablaExtraidaService, TablaExtraidaResolver],
  exports: [TablaExtraidaService],
})
export class TablaExtraidaModule {}
