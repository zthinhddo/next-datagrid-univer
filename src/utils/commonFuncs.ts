import { FILES_DIRECTORY, ROOT } from "./constant";

export const getPathDirectory = () => { return __dirname; }

export const saveFile = (blob: Blob, fileName?: string): void => {
  if (!window || typeof window.document === "undefined") return;
  const hyperlinkElement = document.createElement("a");
  hyperlinkElement.download = `${fileName}.json` || "untitled.json";
  if (typeof blob === "string") {
    hyperlinkElement.href = blob;
  } else {
    hyperlinkElement.href = URL.createObjectURL(blob);
  }

  hyperlinkElement.click();
}

export const uploadFile = (file: File): void => {

}