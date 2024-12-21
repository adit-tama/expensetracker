import type { NextApiResponse } from "next";

export default async function handler(_, res: NextApiResponse) {
  res.status(404).json({ message: "Not found" });
}
