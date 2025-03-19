import { Module } from "@nestjs/common";
import { ArchivoPdfModuleBase } from "./base/archivoPdf.module.base";
import { ArchivoPdfService } from "./archivoPdf.service";
import { ArchivoPdfController } from "./archivoPdf.controller";
import { ArchivoPdfResolver } from "./archivoPdf.resolver";

@Module({
  imports: [ArchivoPdfModuleBase],
  controllers: [ArchivoPdfController],
  providers: [ArchivoPdfService, ArchivoPdfResolver],
  exports: [ArchivoPdfService],
})
export class ArchivoPdfModule {}
