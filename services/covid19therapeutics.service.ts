import { Observable } from "rxjs";
import Rxios from "../core/rxios";

import { Therapeutics } from "./data-contracts";

export class Covid19TherapeuticsService extends Rxios {
  constructor() {
    super({
      baseURL: global.window
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.API_URL,
    });
  }

  /** Get therapeutics trial data from RAPS (Regulatory Affairs Professional Society). Specifically published by Jeff Craven at https://www.raps.org/news-and-articles/news-articles/2020/3/covid-19-therapeutics-tracker **/
  covid19TherapeuticsList = (): Observable<Therapeutics> =>
    this.get<Therapeutics>(`/v3/covid-19/therapeutics`);
}
