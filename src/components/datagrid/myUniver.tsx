"use client";

import {
  IWorkbookData,
  LocaleType,
  LogLevel,
  Univer,
  Workbook,
} from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import "@univerjs/design/lib/index.css";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import "@univerjs/sheets-formula/lib/index.css";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import "@univerjs/sheets-ui/lib/index.css";
import { UniverUIPlugin } from "@univerjs/ui";
import "@univerjs/ui/lib/index.css";

import { myWorkbenchOptions } from "@/utils/constant";
import { enUS as UniverDesignEnUS } from "@univerjs/design";
import { enUS as UniverDocsUIEnUS } from "@univerjs/docs-ui";
import { enUS as UniverSheetsEnUS } from "@univerjs/sheets";
import { enUS as UniverSheetsUIEnUS } from "@univerjs/sheets-ui";
import { enUS as UniverUiEnUS } from "@univerjs/ui";

type ComponentProps = {
  data: IWorkbookData;
  setWorkbookUniver: (newWorkbook: Workbook) => void;
};

const MyUniverSpreadsheet = (props: ComponentProps) => {
  console.log("re-render MyUniverSpreadsheet");
  console.log("data: ", props.data);
  // Fomulas Plugin
  const univer = new Univer({
    theme: defaultTheme,
    logLevel: LogLevel.VERBOSE,
    locale: LocaleType.EN_US,
    locales: {
      [LocaleType.EN_US]: {
        ...UniverSheetsEnUS,
        ...UniverDocsUIEnUS,
        ...UniverSheetsUIEnUS,
        ...UniverUiEnUS,
        ...UniverDesignEnUS,
      },
    },
  });
  // doc plugins
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  });
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, { ...myWorkbenchOptions });
  // sheet plugins
  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);
  const newWorkbook = univer.createUniverSheet(props.data);
  props.setWorkbookUniver(newWorkbook);
  return (
    <>
      <div className={`h-lvh overflow-hidden`} id={"myapp"} />
    </>
  );
};

export default MyUniverSpreadsheet;
