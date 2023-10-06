"use client";

import React from "react";
import { DayPicker } from "react-day-picker";
import { useViewModel } from "./viewModel";
import "react-day-picker/dist/style.css";
import { AiOutlineCaretDown } from "react-icons/ai";
import { cx } from "@emotion/css";
import Footer from "./Footer";
import { usePopover } from "@/hooks/usePopover";

const DatePicker = () => {
  const {
    selected,
    setSelected,
    formattedDateRange,
    defaultDate,
    setPickedDate,
    pickedDate,
    reset,
  } = useViewModel();

  const {
    setIsOpen,
    isOpen,
    setPopperElement,
    setRefElement,
    styles,
    attributes,
  } = usePopover();

  const close = () => {
    setIsOpen(false);
    setSelected(undefined);
  };
  return (
    <div className="relative">
      <div
        ref={setRefElement}
        className="flex gap-x-1 items-center cursor-pointer w-fit"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{formattedDateRange}</p>
        <AiOutlineCaretDown className={cx("w-4 h-4", isOpen && "rotate-180")} />
      </div>
      {isOpen && (
        <div
          className="w-screen h-screen fixed z-10 top-0 left-0"
          onClick={close}
        />
      )}
      <div
        className={cx(
          "p-4 rounded-md shadow-md w-fit absolute left-0 z-50 bg-white",
          !isOpen && "invisible"
        )}
        ref={setPopperElement}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        <DayPicker
          defaultMonth={defaultDate.to}
          mode="range"
          selected={selected || pickedDate}
          onSelect={setSelected}
          min={30}
          footer={
            <Footer
              onReset={reset}
              onCancel={close}
              onSubmit={() => {
                setPickedDate(selected);
                close();
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default DatePicker;
