import type { NextApiRequest, NextApiResponse } from "next";
import { HTTP_STATUS } from "../../utils/constants";
import { subabaseDbClient } from "../../utils/supabase/server";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const { error } = await subabaseDbClient
    .from("expense")
    .insert([req.body])
    .select();

  if (error) {
    res
      .status(HTTP_STATUS.InternalError)
      .json({ message: error.message, status: error.code, success: false });
    return;
  }

  res.status(200).json({
    message: "Expense added successful",
    success: true,
  });
}
