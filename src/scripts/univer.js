"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@univerjs/design/lib/index.css");
require("@univerjs/sheets-formula/lib/index.css");
require("@univerjs/sheets-ui/lib/index.css");
require("@univerjs/ui/lib/index.css");
var core_1 = require("@univerjs/core");
var design_1 = require("@univerjs/design");
var docs_1 = require("@univerjs/docs");
var engine_formula_1 = require("@univerjs/engine-formula");
var engine_render_1 = require("@univerjs/engine-render");
var sheets_1 = require("@univerjs/sheets");
var sheets_formula_1 = require("@univerjs/sheets-formula");
var sheets_ui_1 = require("@univerjs/sheets-ui");
var ui_1 = require("@univerjs/ui");
// univer
var univer = new core_1.Univer({
    theme: design_1.defaultTheme,
});
// core plugins
univer.registerPlugin(engine_render_1.UniverRenderEnginePlugin);
univer.registerPlugin(engine_formula_1.UniverFormulaEnginePlugin);
univer.registerPlugin(ui_1.UniverUIPlugin, {
    container: "myspreadsheet",
    header: true,
    toolbar: true,
    footer: true,
});
// doc plugins
univer.registerPlugin(docs_1.UniverDocsPlugin, {
    hasScroll: false,
});
// sheet plugins
univer.registerPlugin(sheets_1.UniverSheetsPlugin);
univer.registerPlugin(sheets_ui_1.UniverSheetsUIPlugin);
univer.registerPlugin(sheets_formula_1.UniverSheetsFormulaPlugin);
// create univer sheet instance
univer.createUniverSheet({});
