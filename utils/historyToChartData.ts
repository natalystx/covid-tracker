import { CovidHistoricalAll } from "@/services/data-contracts";
import { ChartData } from "chart.js";

export const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const colors = {
  cases: {
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
  deaths: {
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  recovered: {
    borderColor: "rgb(0, 255, 0)",
    backgroundColor: "rgba(0, 255, 0, 0.5)",
  },
};

export const groupData = (
  labels: string[],
  type: string,
  data: CovidHistoricalAll,
): number[] => {
  const currentData = (data as any)[type];

  const dataSet = labels.map((label) => {
    let sum = 0;
    Object.keys(currentData).forEach((dateString) => {
      const spiltDateString = dateString.split("/");
      const formattedDateString = `${spiltDateString[0]}/${spiltDateString[2]}`;
      if (label === formattedDateString) {
        sum += parseInt(currentData[dateString]);
      }
    });

    return sum;
  });

  return dataSet;
};

export const getAllMonthYearList = (
  types: string[],
  data: CovidHistoricalAll,
) => {
  const allDate = types.map((type) => Object.keys((data as any)[type])).flat(1);

  const labels: string[] = [];
  allDate.forEach((dateString) => {
    const spiltDateString = dateString.split("/");
    const formattedDateString = `${spiltDateString[0]}/${spiltDateString[2]}`;
    if (!labels.includes(formattedDateString)) {
      labels.push(formattedDateString);
    }
  });

  return labels;
};

export const historyToChartData = (data: CovidHistoricalAll) => {
  const types = Object.keys(data);
  const labels: string[] = getAllMonthYearList(types, data);

  const chartData: ChartData<"line", number[], string> = {
    labels: labels.map((label) => {
      const splitted = label.split("/");
      const monthNumber = parseInt(splitted[0]);
      return `${month[monthNumber - 1]} 20${splitted[1]}`;
    }),
    datasets: [],
  };

  types.forEach((key) => {
    const dataSet = groupData(labels, key, data);
    chartData.datasets.push({
      label: key,
      ...(colors as any)[key],
      data: dataSet,
      pointStyle: "circle",
      pointRadius: 2,
      pointHoverRadius: 10,
    });
  });

  return chartData;
};
