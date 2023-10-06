import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  Covid19HistoricalAllListParams,
  Covid19HistoricalDetail2Params,
  Covid19HistoricalDetail3Params,
  Covid19HistoricalDetail4Params,
  Covid19HistoricalDetailParams,
  Covid19HistoricalListParams,
  Covid19HistoricalUsacountiesDetailParams,
  CovidHistorical,
  CovidHistoricalAll,
  CovidHistoricalCountries,
  CovidHistoricalCountry,
  CovidHistoricalProvince,
  CovidHistoricalProvinces,
  CovidHistoricalUSCounties,
  CovidHistoricalUSCounty,
  CovidJHUCounties,
  CovidJHUCountries,
} from "./data-contracts";

export class Covid19JhucsseService extends Rxios {
  constructor() {
    super({ baseURL: process.env.SWAGGER_JSON_DOCS });
  }

  /** Get COVID-19 totals for all countries and their provinces **/
  covid19JhucsseList = (): Observable<CovidJHUCountries> =>
    this.get<CovidJHUCountries>(`/v3/covid-19/jhucsse`);
  /** Get COVID-19 totals for all US counties **/
  covid19JhucsseCountiesList = (): Observable<CovidJHUCounties> =>
    this.get<CovidJHUCounties>(`/v3/covid-19/jhucsse/counties`);
  /** Get COVID-19 totals for a specific county **/
  covid19JhucsseCountiesDetail = (county: any): Observable<CovidJHUCounties> =>
    this.get<CovidJHUCounties>(`/v3/covid-19/jhucsse/counties/${county}`);
  /** Get COVID-19 time series data for all countries and their provinces **/
  covid19HistoricalList = (
    query: Covid19HistoricalListParams,
  ): Observable<CovidHistorical> =>
    this.get<CovidHistorical>(
      `/v3/covid-19/historical`,
      query as unknown as Record<string, unknown>,
    );
  /** Get global accumulated COVID-19 time series data **/
  covid19HistoricalAllList = (
    query: Covid19HistoricalAllListParams,
  ): Observable<CovidHistoricalAll> =>
    this.get<CovidHistoricalAll>(
      `/v3/covid-19/historical/all`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a specific country **/
  covid19HistoricalDetail = ({
    country,
    ...query
  }: Covid19HistoricalDetailParams): Observable<CovidHistoricalCountry> =>
    this.get<CovidHistoricalCountry>(
      `/v3/covid-19/historical/${country}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a specific set of countries **/
  covid19HistoricalDetail2 = ({
    countries,
    ...query
  }: Covid19HistoricalDetail2Params): Observable<CovidHistoricalCountries> =>
    this.get<CovidHistoricalCountries>(
      `/v3/covid-19/historical/${countries}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a specific province in a country **/
  covid19HistoricalDetail3 = ({
    country,
    province,
    ...query
  }: Covid19HistoricalDetail3Params): Observable<CovidHistoricalProvince> =>
    this.get<CovidHistoricalProvince>(
      `/v3/covid-19/historical/${country}/${province}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a set of provinces in a country **/
  covid19HistoricalDetail4 = ({
    country,
    provinces,
    ...query
  }: Covid19HistoricalDetail4Params): Observable<CovidHistoricalProvinces> =>
    this.get<CovidHistoricalProvinces>(
      `/v3/covid-19/historical/${country}/${provinces}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get all possible US States to query the /historical/usacounties/{state} endpoint with **/
  covid19HistoricalUsacountiesList =
    (): Observable<CovidHistoricalUSCounties> =>
      this.get<CovidHistoricalUSCounties>(
        `/v3/covid-19/historical/usacounties`,
      );
  /** Get COVID-19 time series data for all counties in a specified US state **/
  covid19HistoricalUsacountiesDetail = ({
    state,
    ...query
  }: Covid19HistoricalUsacountiesDetailParams): Observable<CovidHistoricalUSCounty> =>
    this.get<CovidHistoricalUSCounty>(
      `/v3/covid-19/historical/usacounties/${state}`,
      query as unknown as Record<string, unknown>,
    );
}
