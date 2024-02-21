import { IWorkbookData, IWorksheetData, LocaleType } from "@univerjs/core";
import { SAMPLE_WOKRSHEET_01 } from "./worksheet-01";

export const SAMPLE_WORKBOOK_DATA_DEMO: IWorkbookData = {
  id: "my-workbook-01",
  name: "My UniverSheet Demo",
  appVersion: "3.0.0-alpha",
  locale: LocaleType.ZH_CN,
  styles: undefined,
  sheetOrder: ["root-sample-sheet"],
  sheets: {
    "root-sample-sheet": { ...SAMPLE_WOKRSHEET_01 },
  },
};
