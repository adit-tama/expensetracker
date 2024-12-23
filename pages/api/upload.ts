import type { NextApiRequest, NextApiResponse } from "next";
import { del, put } from "@vercel/blob";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { filename } = req.query;

    const blobResult = await put(String(filename), req, {
      access: "public",
    });

    return res.status(200).json(blobResult);
  } else if (req.method === "DELETE") {
    const { url } = req.query;
    await del(String(url));

    return res.status(200).json({ message: "file removed" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
