import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  Covid19VariantsCountriesDetailParams,
  VariantsCountriesECDC,
  VariantsECDC,
} from "./data-contracts";

export class Covid19VariantsService extends Rxios {
  constructor() {
    super({ baseURL: process.env.SWAGGER_JSON_DOCS });
  }

  /** Get a list of supported countries for ECDC specific data **/
  covid19VariantsCountriesList = (): Observable<VariantsECDC> =>
    this.get<VariantsECDC>(`/v3/covid-19/variants/countries/`);
  /** Get COVID-19 ECDC reported data for a specific country **/
  covid19VariantsCountriesDetail = ({
    country,
    ...query
  }: Covid19VariantsCountriesDetailParams): Observable<VariantsCountriesECDC> =>
    this.get<VariantsCountriesECDC>(
      `/v3/covid-19/variants/countries/${country}`,
      query as unknown as Record<string, unknown>,
    );
}
