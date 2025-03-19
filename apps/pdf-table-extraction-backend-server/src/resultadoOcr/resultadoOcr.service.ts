import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResultadoOcrServiceBase } from "./base/resultadoOcr.service.base";

@Injectable()
export class ResultadoOcrService extends ResultadoOcrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
