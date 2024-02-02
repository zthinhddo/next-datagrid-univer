import { IWorksheetData } from "@univerjs/core";

export const SAMPLE_WOKRSHEET_01: IWorksheetData = {
  type: 0,
  name: "Sample sheet name",
  id: "my-sheet-01",
  tabColor: "",
  hidden: 0,
  rowCount: 1000,
  columnCount: 20,
  zoomRatio: 1,
  cellData: {
    "0": {
      "1": {
        s: "",
        v: "Hello World",
      },
    },
  },
  freeze: {
    xSplit: 0,
    ySplit: 0,
    startRow: -1,
    startColumn: -1,
  },
  scrollTop: 0,
  scrollLeft: 0,
  defaultColumnWidth: 73,
  defaultRowHeight: 19,
  mergeData: [],
  hideRow: [],
  hideColumn: [],
  rowData: {},
  columnData: {},
  status: 1,
  showGridlines: 1,
  rowHeader: {
    width: 46,
    hidden: 0,
  },
  columnHeader: {
    height: 20,
    hidden: 0,
  },
  selections: ["A1"],
  rightToLeft: 0,
  pluginMeta: {},
};
