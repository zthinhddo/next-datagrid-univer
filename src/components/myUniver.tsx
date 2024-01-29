import { LocaleType, LogLevel, Univer } from "@univerjs/core";
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
import { useEffect } from "react";

import { enUS as UniverDesignEnUS } from '@univerjs/design';
import { enUS as UniverDocsUIEnUS } from '@univerjs/docs-ui';
import { enUS as UniverSheetsEnUS } from '@univerjs/sheets';
import { enUS as UniverSheetsUIEnUS } from '@univerjs/sheets-ui';
import { enUS as UniverUiEnUS } from '@univerjs/ui';

const MyTestComponent = () => {
  useEffect(() => {
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
    univer.registerPlugin(UniverUIPlugin, {
      container: "myapp",
      header: true,
      toolbar: true,
      footer: true,
    });

    // sheet plugins
    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin);

    univer.registerPlugin(UniverSheetsNumfmtPlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverSheetsFormulaPlugin);

    univer.createUniverSheet({});
  }, []);

  return (
    <>
      <div id={`myapp`} />
    </>
  );
};

export default MyTestComponent;
