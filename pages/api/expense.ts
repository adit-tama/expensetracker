import type { NextApiRequest, NextApiResponse } from "next";
import { validateCSRFToken } from "../../utils/api/helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await validateCSRFToken(req, res);

  return res.status(200).json({ message: "Expese successful" });
}
