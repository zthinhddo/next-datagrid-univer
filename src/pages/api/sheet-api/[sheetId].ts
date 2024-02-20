// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/utils/database/pg-conn";

type ResponseData = {
  data: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method === "POST") {
      const resData = await query(
        `INSERT INTO public.sheet (data, sheet_id) VALUES ($1, $2)`,
        [req.body, req.query.sheetId]
      );
      res
        .status(200)
        .json({
          data: `Saved new sheet: ${req.query.sheetId}`,
          message: "Saved Succesffully!!!",
        });
    }
    if (req.method === "GET") {
      const resData = await query(
        `SELECT * from public.sheet where sheet_id = $1`,
        [req.query.sheetId]
      );
      res
        .status(200)
        .json({
          data: resData.rows,
          message: `Get sheet ID: ${req.query.sheetId}`,
        });
    }
  } catch (err) {
    console.log("err: ", err);
    console.error("Failed to save data");
  }
}
