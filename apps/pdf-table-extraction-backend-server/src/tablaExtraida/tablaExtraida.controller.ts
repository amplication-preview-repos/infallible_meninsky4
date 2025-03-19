import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TablaExtraidaService } from "./tablaExtraida.service";
import { TablaExtraidaControllerBase } from "./base/tablaExtraida.controller.base";

@swagger.ApiTags("tablaExtraidas")
@common.Controller("tablaExtraidas")
export class TablaExtraidaController extends TablaExtraidaControllerBase {
  constructor(protected readonly service: TablaExtraidaService) {
    super(service);
  }
}
