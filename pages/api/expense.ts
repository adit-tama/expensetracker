import { del } from "@vercel/blob";
import type { NextApiRequest, NextApiResponse } from "next";
import { HEADERS, HTTP_STATUS } from "../../utils/constants";
import { subabaseDbClient } from "../../utils/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { error } = await subabaseDbClient
      .from("expense")
      .insert([{ ...req.body, uid: req.headers[HEADERS.UID] }])
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

  if (req.method === "GET") {
    const { data, error } = await subabaseDbClient
      .from("expense")
      .select("*")
      .eq("uid", req.headers[HEADERS.UID]);

    if (error) {
      res
        .status(HTTP_STATUS.InternalError)
        .json({ message: error.message, status: error.code, success: false });
      return;
    }

    res.status(200).json({
      message: "Expense successful returned",
      success: true,
      data,
    });
  }

  if (req.method === "DELETE") {
    await del(req.body.imageUrl);

    const { data, error } = await subabaseDbClient
      .from("expense")
      .delete()
      .eq("id", req.body.id);

    if (error) {
      res
        .status(HTTP_STATUS.InternalError)
        .json({ message: error.message, status: error.code, success: false });
      return;
    }

    res.status(200).json({
      message: "Expense removed",
      success: true,
      data,
    });
  }
}
