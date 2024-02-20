import { IWorkbenchOptions } from "@univerjs/ui/lib/types/controllers/ui/ui.controller.js";

export const myWorkbenchOptions: IWorkbenchOptions = {
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
export const DEFAULT_CONTAINER_ID = "my-app"