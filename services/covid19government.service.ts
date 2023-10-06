import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import { Covid19GovDetailParams, CovidGov } from "./data-contracts";

export class Covid19GovernmentService extends Rxios {
  constructor() {
    super({
      baseURL: global.window
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.API_URL,
    });
  }

  /** Get a list of supported countries for government specific data **/
  covid19GovList = (): Observable<CovidGov> =>
    this.get<CovidGov>(`/v3/covid-19/gov/`);
  /** Get COVID-19 government reported data for a specific country **/
  covid19GovDetail = ({
    country,
    ...query
  }: Covid19GovDetailParams): Observable<void> =>
    this.get<void>(
      `/v3/covid-19/gov/${country}`,
      query as unknown as Record<string, unknown>,
    );
}
