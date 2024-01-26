import DataTableFooter from "@/components/datagrid/data-table-footer";
import DataTableHeader from "@/components/datagrid/data-table-header";
import Script from "next/script";

export default function DataGrid() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6`}
    >
      <div className={`flex flex-col w-full h-screen overflow-auto`}>
        <div className={`bg-red-300 h-[50px]`}>{<DataTableHeader />}</div>
        <div className={`flex-grow overflow-auto`}>
          <div id="myspreadsheet"></div>
        </div>
        <div className={`bg-blue-300 h-[50px]`}>
          <DataTableFooter />
        </div>
      </div>
      <Script id="export-id">{`var exports = {}; `}</Script>
      <script type="module" src="/scripts/univer.js" async />
    </main>
  );
}
