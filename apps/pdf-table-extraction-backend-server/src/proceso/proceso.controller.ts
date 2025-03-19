import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcesoService } from "./proceso.service";
import { ProcesoControllerBase } from "./base/proceso.controller.base";

@swagger.ApiTags("procesos")
@common.Controller("procesos")
export class ProcesoController extends ProcesoControllerBase {
  constructor(protected readonly service: ProcesoService) {
    super(service);
  }
}
