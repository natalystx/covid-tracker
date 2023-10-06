import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { sub, format } from "date-fns";
import { useHistoryContext } from "@/contexts/HistoryContext";

export const useViewModel = () => {
  const today = new Date(Date.now());
  const defaultDate = {
    from: sub(today, { months: 1 }),
    to: today,
  };
  const [selected, setSelected] = useState<DateRange | undefined>();
  const [pickedDate, setPickedDate] = useState<DateRange | undefined>();
  const { filterByRange } = useHistoryContext();
  const formattedDateRange = useMemo(() => {
    if (pickedDate?.from && pickedDate?.to) {
      filterByRange(pickedDate);
      return `${format(pickedDate.from, "PP")} - ${format(
        pickedDate.to,
        "PP",
      )}`;
    }

    return "All-time";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedDate]);

  const reset = () => {
    setPickedDate(undefined);
    setSelected(undefined);
    filterByRange(undefined);
  };

  return {
    selected,
    setSelected,
    formattedDateRange,
    defaultDate,
    setPickedDate,
    pickedDate,
    reset,
  };
};
