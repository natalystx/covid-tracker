import { Covid19JhucsseService } from "@/services/covid19jhucsse.service";
import { Covid19HistoricalAllListParams } from "@/services/data-contracts";

class Covid19JhucsseRepository {
  private service: Covid19JhucsseService;
  constructor(service: Covid19JhucsseService) {
    this.service = service;
  }

  getAllHistory(query: Covid19HistoricalAllListParams) {
    return this.service.covid19HistoricalAllList(query);
  }
}

export default Covid19JhucsseRepository;
