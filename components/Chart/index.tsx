"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useHistoryContext } from "@/contexts/HistoryContext";
import { historyToChartData } from "@/utils/historyToChartData";
import Fallback from "./Fallback";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { histories } = useHistoryContext();
  const ref = useRef<any>();
  useEffect(() => {
    window.addEventListener("resize", () => {
      ref.current.update();
    });
  }, []);
  return (
    <div className="w-full">
      {Object.keys(histories).length ? (
        <Line
          ref={ref}
          className="w-full min-h-[320px]"
          options={{
            responsive: true,
            resizeDelay: 0,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          updateMode="resize"
          data={historyToChartData(histories)}
        />
      ) : (
        <Fallback />
      )}
    </div>
  );
};

export default Chart;
