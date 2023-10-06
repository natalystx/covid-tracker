import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  CovidAppleCountries,
  CovidAppleData,
  CovidAppleSubregions,
} from "./data-contracts";

export class Covid19AppleService extends Rxios {
  constructor() {
    super({ baseURL: process.env.SWAGGER_JSON_DOCS });
  }

  /** Get a list of supported countries for Apple mobility data **/
  covid19AppleCountriesList = (): Observable<CovidAppleCountries> =>
    this.get<CovidAppleCountries>(`/v3/covid-19/apple/countries`);
  /** Get a list of supported subregions for specific country in the Apple mobility data set **/
  covid19AppleCountriesDetail = (
    country: any,
  ): Observable<CovidAppleSubregions> =>
    this.get<CovidAppleSubregions>(`/v3/covid-19/apple/countries/${country}`);
  /** Get COVID-19 Apple mobility data for subregions of a country **/
  covid19AppleCountriesDetail2 = (
    country: any,
    subregions: any,
  ): Observable<CovidAppleData> =>
    this.get<CovidAppleData>(
      `/v3/covid-19/apple/countries/${country}/${subregions}`,
    );
}
