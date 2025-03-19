import { ProcesoWhereInput } from "./ProcesoWhereInput";
import { ProcesoOrderByInput } from "./ProcesoOrderByInput";

export type ProcesoFindManyArgs = {
  where?: ProcesoWhereInput;
  orderBy?: Array<ProcesoOrderByInput>;
  skip?: number;
  take?: number;
};
