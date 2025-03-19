import * as graphql from "@nestjs/graphql";
import { ProcesoResolverBase } from "./base/proceso.resolver.base";
import { Proceso } from "./base/Proceso";
import { ProcesoService } from "./proceso.service";

@graphql.Resolver(() => Proceso)
export class ProcesoResolver extends ProcesoResolverBase {
  constructor(protected readonly service: ProcesoService) {
    super(service);
  }
}
