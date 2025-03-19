import { Module } from "@nestjs/common";
import { ResultadoOcrModuleBase } from "./base/resultadoOcr.module.base";
import { ResultadoOcrService } from "./resultadoOcr.service";
import { ResultadoOcrController } from "./resultadoOcr.controller";
import { ResultadoOcrResolver } from "./resultadoOcr.resolver";

@Module({
  imports: [ResultadoOcrModuleBase],
  controllers: [ResultadoOcrController],
  providers: [ResultadoOcrService, ResultadoOcrResolver],
  exports: [ResultadoOcrService],
})
export class ResultadoOcrModule {}
