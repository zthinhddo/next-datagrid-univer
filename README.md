This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Install univer packages
npm i @univerjs/core @univerjs/core @univerjs/docs @univerjs/docs-ui @univerjs/engine-formula @univerjs/engine-numfmt @univerjs/engine-render @univerjs/sheets @univerjs/sheets-formula @univerjs/sheets-numfmt @univerjs/sheets-ui @univerjs/ui @babel/runtime core-js

#### Spreadsheet structure
```sh
{
    "id": "tHwFEK",
    "sheetOrder": [
        "sheet-01"
    ],
    "name": "",
    "appVersion": "",
    "locale": "zhCN",
    "styles": {},
    "sheets": {
        "sheet-01": {
            "type": 0,
            "name": "Sheet1",
            "id": "sheet-01",
            "tabColor": "",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "freeze": {
                "xSplit": 0,
                "ySplit": 0,
                "startRow": -1,
                "startColumn": -1
            },
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 73,
            "defaultRowHeight": 19,
            "mergeData": [],
            "hideRow": [],
            "hideColumn": [],
            "cellData": {
                "1": {
                    "1": {
                        "v": "a",
                        "t": 1
                    }
                },
                "3": {
                    "1": {
                        "v": "a",
                        "t": 1
                    }
                }
            },
            "rowData": {
                "1": {
                    "hd": 0,
                    "h": 19,
                    "ah": 19
                },
                "3": {
                    "hd": 0,
                    "h": 19,
                    "ah": 19
                }
            },
            "columnData": {},
            "status": 1,
            "showGridlines": 1,
            "rowHeader": {
                "width": 46,
                "hidden": 0
            },
            "columnHeader": {
                "height": 20,
                "hidden": 0
            },
            "selections": [
                "A1"
            ],
            "rightToLeft": 0,
            "pluginMeta": {}
        }
    },
    "resources": []
}
```