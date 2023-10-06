import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  Covid19NytCountiesDetailParams,
  Covid19NytCountiesListParams,
  Covid19NytStatesDetailParams,
  Covid19NytStatesListParams,
  CovidNYTCounty,
  CovidNYTState,
  CovidNYTUSA,
} from "./data-contracts";

export class Covid19NytService extends Rxios {
  constructor() {
    super({ baseURL: process.env.SWAGGER_JSON_DOCS });
  }

  /** Get COVID-19 time series data for all states, with an entry for each day since the pandemic began **/
  covid19NytStatesList = (
    query: Covid19NytStatesListParams,
  ): Observable<CovidNYTState> =>
    this.get<CovidNYTState>(
      `/v3/covid-19/nyt/states`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a state or set of states, with an entry for each day since the pandemic began **/
  covid19NytStatesDetail = ({
    state,
    ...query
  }: Covid19NytStatesDetailParams): Observable<CovidNYTState> =>
    this.get<CovidNYTState>(
      `/v3/covid-19/nyt/states/${state}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for all available US counties, with an entry for each day since the pandemic began **/
  covid19NytCountiesList = (
    query: Covid19NytCountiesListParams,
  ): Observable<CovidNYTCounty> =>
    this.get<CovidNYTCounty>(
      `/v3/covid-19/nyt/counties`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for a county or set of counties, with an entry for each day since the pandemic began **/
  covid19NytCountiesDetail = ({
    county,
    ...query
  }: Covid19NytCountiesDetailParams): Observable<CovidNYTCounty> =>
    this.get<CovidNYTCounty>(
      `/v3/covid-19/nyt/counties/${county}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 time series data for the entire USA, with an entry for each day since the pandemic began **/
  covid19NytUsaList = (): Observable<CovidNYTUSA> =>
    this.get<CovidNYTUSA>(`/v3/covid-19/nyt/usa`);
}
