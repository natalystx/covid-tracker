import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  Covid19AllListParams,
  Covid19ContinentsDetailParams,
  Covid19ContinentsListParams,
  Covid19CountriesDetail2Params,
  Covid19CountriesDetailParams,
  Covid19CountriesListParams,
  Covid19StatesDetailParams,
  Covid19StatesListParams,
  CovidAll,
  CovidContinent,
  CovidContinents,
  CovidCountries,
  CovidCountry,
  CovidState,
  CovidStates,
} from "./data-contracts";

export class Covid19WorldometersService extends Rxios {
  constructor() {
    super({
      baseURL: global.window
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.API_URL,
    });
  }

  /** Get global COVID-19 totals for today, yesterday and two days ago **/
  covid19AllList = (query: Covid19AllListParams): Observable<CovidAll> =>
    this.get<CovidAll>(
      `/v3/covid-19/all`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for all US States **/
  covid19StatesList = (
    query: Covid19StatesListParams,
  ): Observable<CovidStates> =>
    this.get<CovidStates>(
      `/v3/covid-19/states`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for specific US State(s) **/
  covid19StatesDetail = ({
    states,
    ...query
  }: Covid19StatesDetailParams): Observable<CovidState> =>
    this.get<CovidState>(
      `/v3/covid-19/states/${states}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for all continents **/
  covid19ContinentsList = (
    query: Covid19ContinentsListParams,
  ): Observable<CovidContinents> =>
    this.get<CovidContinents>(
      `/v3/covid-19/continents`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for a specific continent **/
  covid19ContinentsDetail = ({
    continent,
    ...query
  }: Covid19ContinentsDetailParams): Observable<CovidContinent> =>
    this.get<CovidContinent>(
      `/v3/covid-19/continents/${continent}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for all countries **/
  covid19CountriesList = (
    query: Covid19CountriesListParams,
  ): Observable<CovidCountries> =>
    this.get<CovidCountries>(
      `/v3/covid-19/countries`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for a specific country **/
  covid19CountriesDetail = ({
    country,
    ...query
  }: Covid19CountriesDetailParams): Observable<CovidCountry> =>
    this.get<CovidCountry>(
      `/v3/covid-19/countries/${country}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 totals for a specific set of countries **/
  covid19CountriesDetail2 = ({
    countries,
    ...query
  }: Covid19CountriesDetail2Params): Observable<CovidCountries> =>
    this.get<CovidCountries>(
      `/v3/covid-19/countries/${countries}`,
      query as unknown as Record<string, unknown>,
    );
}
