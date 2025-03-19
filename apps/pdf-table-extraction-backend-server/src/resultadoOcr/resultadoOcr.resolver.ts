import * as graphql from "@nestjs/graphql";
import { ResultadoOcrResolverBase } from "./base/resultadoOcr.resolver.base";
import { ResultadoOcr } from "./base/ResultadoOcr";
import { ResultadoOcrService } from "./resultadoOcr.service";

@graphql.Resolver(() => ResultadoOcr)
export class ResultadoOcrResolver extends ResultadoOcrResolverBase {
  constructor(protected readonly service: ResultadoOcrService) {
    super(service);
  }
}
