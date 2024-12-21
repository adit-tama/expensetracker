import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/utils/supabase/server";
import { transfromAuthDto } from "../../utils/data/transformers/auth";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabaseAuthClient.auth.signInWithPassword(
    req.body
  );

  if (error) {
    res
      .status(error.status)
      .json({ message: error.message, status: error.status, success: false });
    return;
  }

  res.status(200).json({
    message: "Login successful",
    data,
    success: true,
  });
}
