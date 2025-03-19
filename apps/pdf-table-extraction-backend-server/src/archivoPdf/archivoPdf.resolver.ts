import * as graphql from "@nestjs/graphql";
import { ArchivoPdfResolverBase } from "./base/archivoPdf.resolver.base";
import { ArchivoPdf } from "./base/ArchivoPdf";
import { ArchivoPdfService } from "./archivoPdf.service";

@graphql.Resolver(() => ArchivoPdf)
export class ArchivoPdfResolver extends ArchivoPdfResolverBase {
  constructor(protected readonly service: ArchivoPdfService) {
    super(service);
  }
}
