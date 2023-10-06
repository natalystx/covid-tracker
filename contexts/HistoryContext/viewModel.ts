import { CovidHistoricalAll } from "@/services/data-contracts";
import { useMemo, useRef, useState } from "react";
import { DateRange } from "react-day-picker";
import { isWithinInterval } from "date-fns";
import { useSearchParams } from "next/navigation";

export const useViewModel = (data: CovidHistoricalAll) => {
  const originalList = useRef<CovidHistoricalAll>(data);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const searchParams = useSearchParams();

  const country = searchParams.get("country");

  const filterByDate = (
    data: CovidHistoricalAll,
    dateRange: DateRange
  ): CovidHistoricalAll => {
    const types = Object.keys(data);
    const filteredData: CovidHistoricalAll = {};
    types.forEach((type) => {
      const dateList = Object.keys((data as any)[type]);
      const dateInRange = dateList.filter((dateString) => {
        const date = new Date(dateString);
        if (
          isWithinInterval(date, {
            start: dateRange.from as Date,
            end: dateRange.to as Date,
          })
        ) {
          return dateString;
        }
      });

      dateInRange.forEach((date) => {
        (filteredData as any)[type] = {
          ...(filteredData as any)[type],
          [date]: (data as any)[type][date],
        };
      });
    });

    return filteredData;
  };

  const histories = useMemo(() => {
    if (!dateRange) return originalList.current;

    return filterByDate(originalList.current, dateRange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalList.current, dateRange]);

  return {
    histories,
    setDateRange,
  };
};
