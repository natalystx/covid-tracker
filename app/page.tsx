import Chart from "@/components/Chart";
import DatePicker from "@/components/DatePicker";
import Table from "@/components/Table";
import HistoryContextProvider from "@/contexts/HistoryContext";
import Covid19JhucsseRepository from "@/repository/Covid19JhucsseRepository";
import { Covid19JhucsseService } from "@/services/covid19jhucsse.service";
import { firstValueFrom } from "rxjs";
export const revalidate = 1;

const getCovidHistoryData = async () => {
  const covid19JhucsseRepository = new Covid19JhucsseRepository(
    new Covid19JhucsseService(),
  );
  try {
    const data = await firstValueFrom(
      covid19JhucsseRepository.getAllHistory({ lastdays: "all" }),
    );

    return data;
  } catch (error) {
    console.log({ error });

    return {};
  }
};

export default async function Home() {
  const histories = await getCovidHistoryData();
  return (
    <HistoryContextProvider data={histories}>
      <div className="flex flex-col gap-y-6 w-full">
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">Worldwide</h2>
          <DatePicker />
          <Chart />
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">Breakdown</h2>
          <Table />
        </div>
      </div>
    </HistoryContextProvider>
  );
}
