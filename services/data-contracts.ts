export interface CovidAll {
  updated?: number;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  recovered?: number;
  todayRecovered?: number;
  active?: number;
  critical?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  tests?: number;
  testsPerOneMillion?: number;
  population?: number;
  oneCasePerPeople?: number;
  oneDeathPerPeople?: number;
  oneTestPerPeople?: number;
  activePerOneMillion?: number;
  recoveredPerOneMillion?: number;
  criticalPerOneMillion?: number;
  affectedCountries?: number;
}

export interface CovidState {
  state?: string;
  updated?: number;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  active?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  tests?: number;
  testsPerOneMillion?: number;
  population?: number;
}

export type CovidStates = CovidState[];

export interface CovidContinent {
  updated?: number;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  todayRecovered?: number;
  active?: number;
  critical?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  tests?: number;
  testsPerOneMillion?: number;
  population?: number;
  continent?: string;
  activePerOneMillion?: number;
  recoveredPerOneMillion?: number;
  criticalPerOneMillion?: number;
  continentInfo?: {
    lat?: number;
    long?: number;
  };
  countries?: string[];
}

export type CovidContinents = CovidContinent[];

export interface CovidCountry {
  updated?: number;
  country?: string;
  countryInfo?: {
    /** @uniqueItems true */
    _id?: number;
    /** @uniqueItems true */
    iso2?: string;
    /** @uniqueItems true */
    iso3?: string;
    lat?: number;
    long?: number;
    flag?: string;
  };
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  todayRecovered?: number;
  active?: number;
  critical?: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  tests?: number;
  testsPerOneMillion?: number;
  population?: number;
  continent?: number;
  oneCasePerPeople?: number;
  oneDeathPerPeople?: number;
  oneTestPerPeople?: number;
  activePerOneMillion?: number;
  recoveredPerOneMillion?: number;
  criticalPerOneMillion?: number;
}

export type CovidCountries = CovidCountry[];

export interface CovidJHUCountries {
  country?: string;
  county?: string;
  updatedAt?: string;
  stats?: {
    confirmed?: number;
    deaths?: number;
    recovered?: number;
  };
  coordinates?: {
    latitude?: string;
    longitude?: string;
  };
  province?: string;
}

export interface CovidJHUCounty {
  country?: string;
  province?: string;
  county?: string;
  updatedAt?: string;
  stats?: {
    confirmed?: number;
    deaths?: number;
    recovered?: number;
  };
  coordinates?: {
    latitude?: string;
    longitude?: string;
  };
}

export type CovidJHUCounties = CovidJHUCounty[];

export type CovidHistorical = {
  country?: string;
  province?: string;
  /** The amount of key-value pairs in 'cases', 'deaths' and 'recovered' is dependent on the 'lastdays' query */
  timeline?: {
    cases?: {
      date?: number;
    };
    deaths?: {
      date?: number;
    };
    recovered?: {
      date?: number;
    };
  };
}[];

/** The amount of key-value pairs in 'cases', 'deaths' and 'recovered' is dependent on the 'lastdays' query */
export interface CovidHistoricalAll {
  cases?: {
    date?: number;
  };
  deaths?: {
    date?: number;
  };
  recovered?: {
    date?: number;
  };
}

export interface CovidHistoricalCountry {
  country?: string;
  province?: string[];
  /** The amount of key-value pairs in 'cases', 'deaths' and 'recovered' is dependent on the 'lastdays' query */
  timeline?: {
    cases?: {
      date?: number;
    };
    deaths?: {
      date?: number;
    };
    recovered?: {
      date?: number;
    };
  };
}

export type CovidHistoricalCountries = CovidHistoricalCountry[];

export type CovidHistoricalUSCounties = string[];

export type CovidHistoricalUSCounty = {
  province?: string;
  county?: string;
  /** The amount of key-value pairs in 'cases', 'deaths' and 'recovered' is dependent on the 'lastdays' query */
  timeline?: {
    cases?: {
      date?: number;
    };
    deaths?: {
      date?: number;
    };
    recovered?: {
      date?: number;
    };
  };
}[];

export interface CovidHistoricalProvince {
  country?: string;
  province?: string;
  /** The amount of key-value pairs in 'cases', 'deaths' and 'recovered' is dependent on the 'lastdays' query */
  timeline?: {
    cases?: {
      date?: number;
    };
    deaths?: {
      date?: number;
    };
    recovered?: {
      date?: number;
    };
  };
}

export type CovidHistoricalProvinces = CovidHistoricalProvince[];

export type CovidNYTState = {
  /** @format date */
  date?: string;
  state?: string;
  fips?: string;
  cases?: number;
  deaths?: number;
}[];

export type CovidNYTCounty = {
  /** @format date */
  date?: string;
  county?: string;
  state?: string;
  fips?: string;
  cases?: number;
  deaths?: number;
}[];

export type CovidNYTUSA = {
  /** @format date */
  date?: string;
  cases?: number;
  deaths?: number;
}[];

export type CovidAppleCountries = string[];

export interface CovidAppleSubregions {
  country?: string;
  subregions?: string[];
}

export interface CovidAppleData {
  country?: string;
  subregion?: string;
  data?: {
    "sub-region"?: string;
    subregion_and_city?: string;
    geo_type?: string;
    /** @format date */
    date?: string;
    driving?: number;
    transit?: number;
    walking?: number;
  }[];
}

export type CovidGov = string[];

export interface InfluenzaILINet {
  updated?: number;
  source?: string;
  data?: ILINet[];
}

export interface ILINet {
  week?: string;
  "age 5-24"?: number;
  "age 25-49"?: number;
  "age 50-64"?: number;
  "age 64+"?: number;
  totalILI?: number;
  totalPatients?: number;
  percentUnweightedILI?: number;
  percentWeightedILI?: number;
}

export interface InfluenzaUSCL {
  updated?: number;
  source?: string;
  data?: USCL[];
}

export interface USCL {
  week?: string;
  totalA?: number;
  totalB?: number;
  percentPositiveA?: number;
  percentPositiveB?: number;
  totalTests?: number;
  percentPositive?: number;
}

export interface Vaccines {
  source?: string;
  totalCandidates?: string;
  phases?: Phases[];
  data?: Vaccine[];
}

export interface Vaccine {
  candidate?: string;
  mechanism?: string;
  sponsors?: string[];
  details?: string;
  trialPhase?: string;
  institutions?: string[];
}

export interface Phases {
  phase?: string;
  candidates?: string;
}

export type VaccineCoverage = SimpleVaccineTimeline | FullVaccineTimeline;

export type VaccineCountriesCoverage = VaccineCountryCoverage[];

export interface VaccineCountryCoverage {
  country?: string;
  timeline?: SimpleVaccineTimeline | FullVaccineTimeline;
}

export type VaccineStatesCoverage = VaccineStateCoverage[];

export interface VaccineStateCoverage {
  state?: string;
  timeline?: SimpleVaccineTimeline | FullVaccineTimeline;
}

export interface SimpleVaccineTimeline {
  date?: number;
}

export type FullVaccineTimeline = {
  total?: number;
  daily?: number;
  totalPerHundred?: number;
  dailyPerMillion?: number;
  date?: string;
}[];

export interface Therapeutics {
  source?: string;
  totalCandidates?: string;
  phases?: Phases[];
  data?: Therapeutic[];
}

export interface Therapeutic {
  medicationClass?: string;
  tradeName?: string[];
  details?: string;
  developerResearcher?: string[];
  sponsors?: string[];
  trialPhase?: string;
  lastUpdate?: string;
}

export type VariantsECDC = string[];

export type VariantsCountriesECDC = {
  /** @format date */
  updated?: number;
  country?: string;
  yearWeek?: string;
  source?: string;
  newCases?: number;
  numberSequenced?: number;
  percentSequenced?: number;
  validDenominator?: string;
  variant?: string;
  numberDetectionsVariant?: number;
  numberSequencedKnownVariant?: number;
  percentVariant?: number;
}[];

export interface InfluenzaUSPHL {
  updated?: number;
  source?: string;
  data?: USPHL[];
}

export interface USPHL {
  week?: string;
  "A(H3N2v)"?: number;
  "A(H1N1)"?: number;
  "A(H3)"?: number;
  "A(unable to sub-type)+"?: number;
  "A(Subtyping not performed)"?: number;
  B?: number;
  BVIC?: number;
  totalTests?: number;
}

export interface Covid19AllListParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
}

export interface Covid19StatesListParams {
  /** Provided a key (e.g. cases, todayCases, deaths, active), result will be sorted from greatest to least */
  sort?: "cases" | "todayCases" | "deaths" | "todayDeaths" | "active";
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
}

export interface Covid19StatesDetailParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** State name or comma separated names spelled correctly */
  states: string;
}

export interface Covid19ContinentsListParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /** Provided a key (e.g. cases, todayCases, deaths, recovered, active), results will be sorted from greatest to least */
  sort?:
    | "cases"
    | "todayCases"
    | "deaths"
    | "todayDeaths"
    | "recovered"
    | "active"
    | "critical"
    | "casesPerOneMillion"
    | "deathsPerOneMillion";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
}

export interface Covid19ContinentsDetailParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /**
   * Setting to false gives you the ability to fuzzy search continents (i.e. Oman vs. rOMANia)
   * @default "true"
   */
  strict?: "true" | "false";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** Continent name */
  continent: string;
}

export interface Covid19CountriesListParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /** Provided a key (e.g. cases, todayCases, deaths, recovered, active), the result will be sorted from greatest to least */
  sort?:
    | "cases"
    | "todayCases"
    | "deaths"
    | "todayDeaths"
    | "recovered"
    | "active"
    | "critical"
    | "casesPerOneMillion"
    | "deathsPerOneMillion";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
}

export interface Covid19CountriesDetailParams {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /**
   * Setting to false gives you the ability to fuzzy search countries (i.e. Oman vs. rOMANia)
   * @default "true"
   */
  strict?: "true" | "false";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** A country name, iso2, iso3, or country ID code */
  country: string;
}

export interface Covid19CountriesDetail2Params {
  /** Queries data reported a day ago */
  yesterday?: "true" | "false" | "1" | "0";
  /** Queries data reported two days ago */
  twoDaysAgo?: "true" | "false" | "1" | "0";
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** Multiple country names, iso2, iso3, or country IDs separated by commas */
  countries: string;
}

export interface Covid19HistoricalListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
}

export interface Covid19HistoricalAllListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
}

export interface Covid19HistoricalDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** A country name, iso2, iso3, or country ID code */
  country: string;
}

export interface Covid19HistoricalDetail2Params {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** Multiple country names, iso2, iso3, or country IDs separated by commas */
  countries: string;
}

export interface Covid19HistoricalDetail3Params {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** A country name, iso2, iso3, or country ID code */
  country: string;
  /** Province name. All available names can be found in the /v3/covid-19/historical/{query} endpoint */
  province: string;
}

export interface Covid19HistoricalDetail4Params {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** A country name, iso2, iso3, or country ID code */
  country: string;
  /** Provinces spelled correctly separated by ',' or '|' delimiters, never both in the same query */
  provinces: string;
}

export interface Covid19HistoricalUsacountiesDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** US state name, validated in the array returned from the /v3/covid-19/historical/usacounties endpoint */
  state: string;
}

export interface Covid19NytStatesListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
}

export interface Covid19NytStatesDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** State name(s), separated by commas (e.g. 'Illinois, California') */
  state: string;
}

export interface Covid19NytCountiesListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
}

export interface Covid19NytCountiesDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /** County name(s), separated by commas (e.g. 'Alameda, Humboldt') */
  county: string;
}

export interface Covid19GovDetailParams {
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** A valid country name from the /v3/covid-19/gov endpoint */
  country: string;
}

export interface Covid19VaccineCoverageListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /**
   * Flag indicating whether to return data type as simpleVaccineTimeline (false) or fullVaccineTimeline (true).
   * @default "false"
   */
  fullData?: string;
}

export interface Covid19VaccineCoverageCountriesListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /**
   * Flag indicating whether to return timeline data type as simpleVaccineTimeline (false) or fullVaccineTimeline (true).
   * @default "false"
   */
  fullData?: string;
}

export interface Covid19VaccineCoverageCountriesDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /**
   * Flag indicating whether to return timeline data type as simpleVaccineTimeline (false) or fullVaccineTimeline (true).
   * @default "false"
   */
  fullData?: string;
  /** A valid country name, iso2, iso3 */
  country: string;
}

export interface Covid19VaccineCoverageStatesListParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /**
   * Flag indicating whether to return timeline data type as simpleVaccineTimeline (false) or fullVaccineTimeline (true).
   * @default "false"
   */
  fullData?: string;
}

export interface Covid19VaccineCoverageStatesDetailParams {
  /**
   * Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24)
   * @default 30
   */
  lastdays?: string;
  /**
   * Flag indicating whether to return timeline data type as simpleVaccineTimeline (false) or fullVaccineTimeline (true).
   * @default "false"
   */
  fullData?: string;
  /** A valid state name */
  state: string;
}

export interface Covid19VariantsCountriesDetailParams {
  /** By default, if a value is missing, it is returned as 0. This allows nulls to be returned */
  allowNull?: "true" | "false" | "1" | "0";
  /** A valid country name from the /v3/covid-19/variants/countries/ endpoint */
  country: string;
}
