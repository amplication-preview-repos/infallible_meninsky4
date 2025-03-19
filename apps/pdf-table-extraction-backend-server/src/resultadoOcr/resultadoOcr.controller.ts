import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResultadoOcrService } from "./resultadoOcr.service";
import { ResultadoOcrControllerBase } from "./base/resultadoOcr.controller.base";

@swagger.ApiTags("resultadoOcrs")
@common.Controller("resultadoOcrs")
export class ResultadoOcrController extends ResultadoOcrControllerBase {
  constructor(protected readonly service: ResultadoOcrService) {
    super(service);
  }
}
