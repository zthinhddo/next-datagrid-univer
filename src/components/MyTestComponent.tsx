import "@univerjs/design/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/ui/lib/index.css";
import { useEffect } from "react";

import { Univer } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
const MyTestComponent: React.FC = () => {
  useEffect(() => {
    // univer
    const univer = new Univer({
      theme: defaultTheme,
    });
    // core plugins
    univer.registerPlugin(UniverRenderEnginePlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverUIPlugin, {
      container: "myspreadsheet",
      header: true,
      toolbar: true,
      footer: true,
    });

    // doc plugins
    univer.registerPlugin(UniverDocsPlugin, {
      hasScroll: false,
    });

    // sheet plugins
    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin);
    univer.registerPlugin(UniverSheetsFormulaPlugin);

    // create univer sheet instance
    univer.createUniverSheet({});
    console.log("Create univer sheet instance");
  }, []);

  return (<></>);
};

export default MyTestComponent;
