import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArchivoPdfService } from "./archivoPdf.service";
import { ArchivoPdfControllerBase } from "./base/archivoPdf.controller.base";

@swagger.ApiTags("archivoPdfs")
@common.Controller("archivoPdfs")
export class ArchivoPdfController extends ArchivoPdfControllerBase {
  constructor(protected readonly service: ArchivoPdfService) {
    super(service);
  }
}
