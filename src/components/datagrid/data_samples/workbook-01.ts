import { IWorkbookData, IWorksheetData, LocaleType } from "@univerjs/core";
import { SAMPLE_WOKRSHEET_01 } from "./worksheet-01";

export const SAMPLE_WORKBOOK_DATA_DEMO: IWorkbookData = {
  id: "my-workbook-01",
  name: "My UniverSheet Demo",
  appVersion: "3.0.0-alpha",
  locale: LocaleType.ZH_CN,
  styles: undefined,
  sheetOrder: ["my-sheet-01"],
  sheets: {
    "my-sheet-01": { ...SAMPLE_WOKRSHEET_01 },
  },
};
