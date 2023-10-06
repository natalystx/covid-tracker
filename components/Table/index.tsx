"use client";

import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useViewModel } from "./viewModel";
import { month } from "@/utils/historyToChartData";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";

const COLUMNS = [
  {
    label: "Date",
    renderCell: (item: any) => {
      const date = Object.keys(item)?.[0];
      const splitted = date.split("/");
      const monthNumber = parseInt(splitted[0]);
      return `${month[monthNumber - 1]} 20${splitted[1]}`;
    },
    sort: { sortKey: "DATE" },
  },
  {
    label: "Cases",
    renderCell: (item: any) => {
      const key = Object.keys(item)[0];
      const obj = item[key];
      return obj["cases"].count;
    },
    sort: { sortKey: "CASES" },
  },
  {
    label: "Deaths",
    renderCell: (item: any) => {
      const key = Object.keys(item)[0];
      const obj = item[key];
      return obj["deaths"].count;
    },
    sort: { sortKey: "DEATHS" },
  },
  {
    label: "Recovered",
    renderCell: (item: any) => {
      const key = Object.keys(item)[0];
      const obj = item[key];
      return obj["recovered"].count;
    },
    sort: { sortKey: "RECOVERED" },
  },
];

const Table = () => {
  const { tableData } = useViewModel();
  const theme = useTheme({
    ...getTheme(),
    HeaderRow: `
        .th {
          border-bottom: 1px solid #a0a8ae;
        }
        padding: 8px;
        font-size: 14px;
        background: #f3f3f3;
      `,
    BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        text-align: left;
        font-size: 12px;
        padding: 4px;
       
      `,
    Table: `
        border-radius: 8px;
        background: #f2f2f2;
      `,
  });
  const sort = useSort(
    { nodes: tableData },
    {
      onChange: () => null,
    },
    {
      sortFns: {
        DATE: (arr) =>
          [...arr].sort((a, b) => {
            const keyA = new Date(Object.keys(a)[0]).getDate();
            const keyB = new Date(Object.keys(b)[0]).getDate();

            return keyA - keyB;
          }),
        CASES: (arr) =>
          [...arr].sort((a, b) => {
            const keyA = Object.keys(a)[0];
            const keyB = Object.keys(b)[0];

            return a[keyA].cases.count - b[keyB].cases.count;
          }),
        DEATHS: (arr) =>
          [...arr].sort((a, b) => {
            const keyA = Object.keys(a)[0];
            const keyB = Object.keys(b)[0];

            return a[keyA].deaths.count - b[keyB].deaths.count;
          }),
        RECOVERED: (arr) =>
          [...arr].sort((a, b) => {
            const keyA = Object.keys(a)[0];
            const keyB = Object.keys(b)[0];

            return a[keyA].recovered.count - b[keyB].recovered.count;
          }),
      },
    }
  );

  return (
    <div className="w-full h-auto overflow-hidden">
      <CompactTable
        columns={COLUMNS}
        data={{ nodes: tableData }}
        theme={theme}
        sort={sort}
      />
    </div>
  );
};

export default Table;
