import type { NextApiRequest, NextApiResponse } from "next";
import { validateCSRFToken } from "../../utils/middlewares/helper";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ message: "Expese successful" });
}
