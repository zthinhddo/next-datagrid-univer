import MyUniverSpreadsheet from "@/components/datagrid/myUniver";
import { saveFile } from "@/utils/commonFuncs";
import { IWorkbookData, Univer, Workbook } from "@univerjs/core";
import { useCallback, useEffect, useState } from "react";
import { DEFAULT_WORKBOOK_DATA_DEMO } from "./data_samples/data";
import { SAMPLE_WORKBOOK_DATA_DEMO } from "./data_samples/workbook-01";

export default function DataGridComponent() {
  const [univerModule, setUniverModule] = useState<Univer>();
  const [workbook, setWorkbook] = useState<Workbook>();
  const [fileName, setFileName] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean>(true);
  const [uploadFile, setUploadFile] = useState<File>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isLoadSample, setIsLoadSample] = useState<boolean>(false);
  const [spreadSheetData, setSpreadsheetData] = useState<IWorkbookData>(null);
  const [sheetDataList, setSheetDataList] = useState<any[]>([]);
  const [isReload, setIsReload] = useState<boolean>(false);

  // ============ USE EFFECT ============ //
    async function fetchData() {
      const apiUrl = `api/sheet-api/sheets`;
      await fetch(apiUrl, {
        method: "GET",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((res) => {
          console.log("data from db: ", res);
          if (res.data && res.data.length > 0) {
            const mySheetData = [];
            for (let i = 0; i < res.data.length; i++) {
              mySheetData.push({
                name: res.data[i].sheet_id,
                data: res.data[i].data,
              });
            }
            console.log("mySheetData: ", mySheetData);
            setSheetDataList(mySheetData);
          }
        })
        .catch((err) => {
          console.log("Get sheets data failed: ", err);
          return [];
        });
    }

  useEffect(() => {
    fetchData();
  }, []);

  const onSetWorkbookSpreadsheet = (newWorkbook: Workbook) => {
    if (
      !workbook ||
      (workbook && workbook.getUnitId() !== newWorkbook.getUnitId())
    ) {
      setWorkbook(newWorkbook);
    }
  };

  useEffect(() => {
    if (isLoadSample) {
      console.log("load new workbook");
      setSpreadsheetData(DEFAULT_WORKBOOK_DATA_DEMO);
    }
  }, [isLoadSample]);

  useEffect(() => {
    if (!workbook) return;
    setIsUploading(false);
    const sheet = workbook.getSheets();
    console.log("sheet", sheet);
    console.log("workbook config: ", workbook.getConfig());
  }, [workbook]);

  // ============ COMMON FUNCTION ============ //

  const onChangeSheet = async (e) => {
    // console.log("onChangeSheet");
    if (!workbook) return;
    setSpreadsheetData(DEFAULT_WORKBOOK_DATA_DEMO);
    await fetch(`api/sheet-api/${e.target.value}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const firstSheetData = res.data[0];
          console.log('parsedData: ', JSON.parse(firstSheetData.data));
          const parsedData = JSON.parse(firstSheetData.data);
          setSpreadsheetData(parsedData);
        }
      })
      .catch((err) => {
        console.log("Get single sheet from db: ", err);
      });
  };

  const onSaveDBClicked = () => {
    if (!workbook) {
      window.alert("workbook is not ready");
    }
    const sheetId = workbook.getActiveSheet().getSheetId();
    const sheetData = workbook.save();
    const apiUrl = `api/sheet-api/${sheetId}`;
    fetch(apiUrl, {
      body: sheetData ? JSON.stringify(sheetData) : "",
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          window.alert("Save Data Sucessfully");
          fetchData();
        }
      })
      .catch((res) => {
        console.error("Failed to save data to postgres database");
      })
      .finally(() => {
        console.log("onSaveDBClicked executed");
      });
  };

  const onSaveClicked = () => {
    console.log("onSaveClicked");
    console.log("filename: ", "");
    // Validation
    if (!workbook) {
      window.alert("Workbook is not defined");
      return;
    }
    if (!fileName) {
      setIsValidate(false);
      return;
    }

    // Prepare data file
    const savedData = workbook.save();
    if (!savedData) {
      window.alert("Workbook is not ready!!!");
      return;
    }
    const objJson = JSON.stringify(savedData);
    const myBlob = new Blob([objJson], { type: "application/json" });

    saveFile(myBlob, fileName);
    setFileName("");
  };

  const onChangeFileName = (e: any) => {
    if (!isValidate) {
      setIsValidate(true);
    }
    setFileName(e.target.value);
  };

  const onFileUploading = (e: any) => {
    setUploadFile(e.target.files[0]);
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;
        console.log("File content:", content);
        if (content) {
          setSpreadsheetData(JSON.parse(content.toString()));
        }
      };

      reader.readAsText(file);
    } else {
      console.log("No file selected");
    }
  };

  const onLoadSampleSheets = async () => {
    setIsLoadSample(true);
  };

  const onRefreshWorkbook = () => {
    if (!workbook) {
      window.alert("Workbook is not defined");
    }
  };

  return (
    <div id="datagrid-wrapper" className={`grid grid-cols-12 h-svh`}>
      {/* ============ SPREADSHEET AREA ============ */}
      <div id="left-area" className={`grid col-span-10`}>
        {spreadSheetData ? (
          <MyUniverSpreadsheet
            id={"my-app"}
            data={spreadSheetData}
            setWorkbookUniver={onSetWorkbookSpreadsheet}
          />
        ) : (
          <MyUniverSpreadsheet
            id={"my-app-default"}
            data={SAMPLE_WORKBOOK_DATA_DEMO}
            setWorkbookUniver={onSetWorkbookSpreadsheet}
          />
        )}
      </div>
      {/* ============ TOOLBAR AREA ============ */}
      <div
        id="right-area"
        className={`grid col-span-2 bg-gray-200 rounded-md m-2 p-2`}
      >
        <div className={`flex flex-col gap-5 w-full justify-between`}>
          <div id="clipboard" className={`w-full rounded-lg p-2 h-[50vh]`}>
            {/* Upper */}
            <div id="upper-wrapper">
              <div
                id="copy-cut-tool"
                className={`flex flex-row w-full gap-2 text-center`}
              >
                {/* Copy */}
                <div
                  id="copy"
                  className={`w-full bg-orange-400 rounded-lg p-2`}
                >
                  <button className={`w-full text-white`}>Copy</button>
                </div>
                {/* Cut */}
                <div
                  id="cut"
                  className={`w-full bg-orange-400  rounded-lg p-2`}
                >
                  <button className={` w-full text-white`}>Cut</button>
                </div>
                <div
                  id="refresh"
                  className={`w-full bg-orange-400  rounded-lg p-2`}
                >
                  <button
                    className={` w-full text-white`}
                    onClick={onRefreshWorkbook}
                  >
                    Refresh
                  </button>
                </div>
              </div>
              {/* Paste */}
              <div
                id="paste"
                className={`w-full bg-blue-500 rounded-lg p-2 mt-2 text-center`}
              >
                <button className={`w-full text-white`}>Paste</button>
              </div>
            </div>
            {/* UPLOAD FILE */}
            <div
              className={`w-full bg-blue-500 rounded-lg p-2 mt-2 text-center`}
            >
              <input
                type="file"
                id="fileInput"
                accept=".xlsx,.xls,.json"
                className={`hidden`}
                onChange={onFileUploading}
              />
              <button
                className={`text-white w-full`}
                onClick={() => document.getElementById("fileInput").click()}
              >
                <strong className={``}>Upload file </strong>
                <i className={`text-black`}>(.xlsx, .xls, .json)</i>
              </button>
            </div>
            <div
              className={`w-full bg-yellow-200 rounded-lg p-2 mt-2 text-center h-[400px]`}
            >
              <ul
                className={`max-h-svh bg-blue-500 h-full rounded-lg overflow-auto`}
              >
                {sheetDataList && sheetDataList.length > 0 ? (
                  sheetDataList.map((sheet, index) => (
                    <li
                      key={`sheet_${index}`}
                      className={`bg-red-400 p-2 mb-2 rounded-lg`}
                    >
                      <button
                        className={`bg-green-400 w-full`}
                        onClick={onChangeSheet}
                        value={sheet.name}
                      >
                        {sheet.name}
                      </button>
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
            {/* UPLOAD FILE */}
          </div>
          {/* Bottom */}
          <div id={`bottom-wrapper`} className={`w-full`}>
            <div
              className={`text-center p-2 w-full border-b-2 border-black border-opacity-30 mb-2`}
            >
              {!isValidate ? (
                <>
                  <p className={`text-red-500 text-sm text-left`}>
                    Filename is required
                  </p>
                </>
              ) : (
                <></>
              )}
              <input
                className={`w-full bg-inherit focus:outline-none`}
                placeholder="Input filename here..."
                onChange={onChangeFileName}
                value={fileName}
                autoFocus
              ></input>
            </div>
            <div
              className={`text-center rounded-lg p-2 w-full border-black border-2 font-bold mb-2`}
            >
              <button className={`w-full`} onClick={onSaveClicked}>
                Save
              </button>
            </div>
            <div
              className={`text-center rounded-lg p-2 w-full border-black border-2 font-bold`}
            >
              <button className={`w-full`} onClick={onSaveDBClicked}>
                Save to DB
              </button>
            </div>
            <div
              className={`text-center rounded-lg p-2 w-full font-bold mt-2 bg-gray-500`}
            >
              <button
                className={`w-full text-white`}
                onClick={onLoadSampleSheets}
              >
                Load sample spreadsheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
