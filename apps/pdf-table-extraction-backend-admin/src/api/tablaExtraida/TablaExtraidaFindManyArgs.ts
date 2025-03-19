import { TablaExtraidaWhereInput } from "./TablaExtraidaWhereInput";
import { TablaExtraidaOrderByInput } from "./TablaExtraidaOrderByInput";

export type TablaExtraidaFindManyArgs = {
  where?: TablaExtraidaWhereInput;
  orderBy?: Array<TablaExtraidaOrderByInput>;
  skip?: number;
  take?: number;
};
