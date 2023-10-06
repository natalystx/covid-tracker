import { useHistoryContext } from "@/contexts/HistoryContext";
import { getAllMonthYearList, groupData } from "@/utils/historyToChartData";
import { useMemo } from "react";

export const getYear = (dateString: string): number => {
  return parseInt(dateString.split("/")[1]);
};

export const useViewModel = () => {
  const { histories } = useHistoryContext();
  const tableData = useMemo(() => {
    const types = Object.keys(histories);
    const monthYears = getAllMonthYearList(types, histories);

    const formattedData = monthYears.map((dateString) => {
      let data: any = {};

      types.forEach((type) => {
        const groupedData = groupData([dateString], type, histories);

        data[dateString] = {
          ...data[dateString],
          [type]: { count: groupedData[0] },
        };
      });

      return data;
    });
    return formattedData.sort((a, b) => {
      const keyA = getYear(Object.keys(a)[0]);
      const keyB = getYear(Object.keys(b)[0]);

      return keyB - keyA;
    });
  }, [histories]);

  return { tableData };
};
