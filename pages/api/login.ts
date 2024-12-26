import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/utils/supabase/server";
import { COOKIES_NAMES } from "../../utils/constants";
import { serialize } from "cookie";

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

  const cookie = serialize(
    COOKIES_NAMES.ACCESS_TOKEN,
    data.session.access_token,
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    }
  );

  res.setHeader("Set-Cookie", cookie);

  res.status(200).json({
    message: "Login successful",
    data,
    success: true,
  });
}
