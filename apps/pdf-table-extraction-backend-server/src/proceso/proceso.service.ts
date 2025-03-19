import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcesoServiceBase } from "./base/proceso.service.base";

@Injectable()
export class ProcesoService extends ProcesoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
