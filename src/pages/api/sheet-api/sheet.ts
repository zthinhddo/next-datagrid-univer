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
    const resData = await query(`SELECT * from public.sheet where sheet_id = $1`, []);
    res.status(200).json({ data: resData.rows, message: "Get data from database Succesffully!!!"});
  } catch (err) {
    console.log('err: ', err);
    console.error('Failed to save data');
  }
}
