import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TablaExtraidaServiceBase } from "./base/tablaExtraida.service.base";

@Injectable()
export class TablaExtraidaService extends TablaExtraidaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
