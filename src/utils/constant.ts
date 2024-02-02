import { IWorkbenchOptions } from "@univerjs/ui/lib/types/controllers/ui/ui.controller.js";

export const myWorkbenchOptions: IWorkbenchOptions = {
    container: "myapp",
    outerLeft: false,
    innerLeft: false,
    header: false,
    toolbar: false, // Alignment, merging functions, fomular,...
    footer: false, // Sheet list
    infoBar: true,
}

// ============== CONSTANTS =============
export const ROOT = 'src'
export const FILES_DIRECTORY = 'files'