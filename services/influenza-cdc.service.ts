import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  InfluenzaILINet,
  InfluenzaUSCL,
  InfluenzaUSPHL,
} from "./data-contracts";

export class InfluenzaCdcService extends Rxios {
  constructor() {
    super({ baseURL: process.env.SWAGGER_JSON_DOCS });
  }

  /** Get Influenza-like-illness data for the 2019 and 2020 outbreaks from the US Center for Disease Control **/
  influenzaCdcIliNetList = (): Observable<InfluenzaILINet> =>
    this.get<InfluenzaILINet>(`/v3/influenza/cdc/ILINet`);
  /** Get Influenza report data for the 2019 and 2020 outbreaks from the US Center for Disease Control, reported by US clinical labs **/
  influenzaCdcUsclList = (): Observable<InfluenzaUSCL> =>
    this.get<InfluenzaUSCL>(`/v3/influenza/cdc/USCL`);
  /** Get Influenza report data for the 2019 and 2020 outbreaks from the US Center for Disease Control, reported by US public health labs **/
  influenzaCdcUsphlList = (): Observable<InfluenzaUSPHL> =>
    this.get<InfluenzaUSPHL>(`/v3/influenza/cdc/USPHL`);
}
