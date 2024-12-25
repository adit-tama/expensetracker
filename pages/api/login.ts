import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAuthClient } from "@/utils/supabase/server";
import { COOKIES_NAMES } from "../../utils/constants";
import Cookies from "cookies";

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

  const cookies = new Cookies(req, res);

  cookies.set(COOKIES_NAMES.ACCESS_TOKEN, data.session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "strict",
  });

  res.status(200).json({
    message: "Login successful",
    data,
    success: true,
  });
}
