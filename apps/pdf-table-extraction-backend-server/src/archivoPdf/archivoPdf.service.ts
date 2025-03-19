import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArchivoPdfServiceBase } from "./base/archivoPdf.service.base";

@Injectable()
export class ArchivoPdfService extends ArchivoPdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
