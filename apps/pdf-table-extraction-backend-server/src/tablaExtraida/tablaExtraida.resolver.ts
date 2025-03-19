import * as graphql from "@nestjs/graphql";
import { TablaExtraidaResolverBase } from "./base/tablaExtraida.resolver.base";
import { TablaExtraida } from "./base/TablaExtraida";
import { TablaExtraidaService } from "./tablaExtraida.service";

@graphql.Resolver(() => TablaExtraida)
export class TablaExtraidaResolver extends TablaExtraidaResolverBase {
  constructor(protected readonly service: TablaExtraidaService) {
    super(service);
  }
}
