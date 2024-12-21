import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "../../utils/supabase/server";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabaseAuthClient.auth.signInWithPassword(
    req.body
  );

  res.status(200).json({ message: "Login successful", data: {} });
}
