import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import {
  Covid19VaccineCoverageCountriesDetailParams,
  Covid19VaccineCoverageCountriesListParams,
  Covid19VaccineCoverageListParams,
  Covid19VaccineCoverageStatesDetailParams,
  Covid19VaccineCoverageStatesListParams,
  VaccineCountriesCoverage,
  VaccineCountryCoverage,
  VaccineCoverage,
  VaccineStateCoverage,
  VaccineStatesCoverage,
  Vaccines,
} from "./data-contracts";

export class Covid19VaccineService extends Rxios {
  constructor() {
    super({
      baseURL: global.window
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.API_URL,
    });
  }

  /** Get vaccine trial data from RAPS (Regulatory Affairs Professional Society). Specifically published by Jeff Craven at https://www.raps.org/news-and-articles/news-articles/2020/3/covid-19-vaccine-tracker **/
  covid19VaccineList = (): Observable<Vaccines> =>
    this.get<Vaccines>(`/v3/covid-19/vaccine`);
  /** Get total global COVID-19 vaccine doses administered. Sourced from https://covid.ourworldindata.org/ **/
  covid19VaccineCoverageList = (
    query: Covid19VaccineCoverageListParams,
  ): Observable<VaccineCoverage> =>
    this.get<VaccineCoverage>(
      `/v3/covid-19/vaccine/coverage`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 vaccine doses administered for all countries that have reported rolling out vaccination. Sourced  from https://covid.ourworldindata.org/ **/
  covid19VaccineCoverageCountriesList = (
    query: Covid19VaccineCoverageCountriesListParams,
  ): Observable<VaccineCountriesCoverage> =>
    this.get<VaccineCountriesCoverage>(
      `/v3/covid-19/vaccine/coverage/countries`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 vaccine doses administered for a country that has reported vaccination rollout. Sourced from https://covid.ourworldindata.org/ **/
  covid19VaccineCoverageCountriesDetail = ({
    country,
    ...query
  }: Covid19VaccineCoverageCountriesDetailParams): Observable<VaccineCountryCoverage> =>
    this.get<VaccineCountryCoverage>(
      `/v3/covid-19/vaccine/coverage/countries/${country}`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 vaccine doses administered for all states that have reported rolling out vaccination. Sourced  from https://covid.ourworldindata.org/ **/
  covid19VaccineCoverageStatesList = (
    query: Covid19VaccineCoverageStatesListParams,
  ): Observable<VaccineStatesCoverage> =>
    this.get<VaccineStatesCoverage>(
      `/v3/covid-19/vaccine/coverage/states`,
      query as unknown as Record<string, unknown>,
    );
  /** Get COVID-19 vaccine doses administered for a state that has reported vaccination rollout. Sourced from https://covid.ourworldindata.org/ **/
  covid19VaccineCoverageStatesDetail = ({
    state,
    ...query
  }: Covid19VaccineCoverageStatesDetailParams): Observable<VaccineStateCoverage> =>
    this.get<VaccineStateCoverage>(
      `/v3/covid-19/vaccine/coverage/states/${state}`,
      query as unknown as Record<string, unknown>,
    );
}
