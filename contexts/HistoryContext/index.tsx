"use client";

import { CovidHistoricalAll } from "@/services/data-contracts";
import { ReactNode, createContext, useContext } from "react";
import { useViewModel } from "./viewModel";
import { DateRange } from "react-day-picker";

type HistoryContextProps = {
  histories: CovidHistoricalAll;
  filterByRange: (date: DateRange | undefined) => void;
};

export const HistoryContext = createContext<HistoryContextProps>(
  {} as HistoryContextProps
);

type HistoryContextProviderProps = {
  data: CovidHistoricalAll;
  children: ReactNode;
};

export const useHistoryContext = () => useContext(HistoryContext);

const HistoryContextProvider = ({
  children,
  data,
}: HistoryContextProviderProps) => {
  const { histories, setDateRange } = useViewModel(data);

  return (
    <HistoryContext.Provider value={{ histories, filterByRange: setDateRange }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
