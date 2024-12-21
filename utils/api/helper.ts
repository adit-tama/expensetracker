import { NextApiRequest, NextApiResponse } from "next";
import { HEADERS } from "../constants";

export const validateCSRFToken = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (
    !request.headers[HEADERS.X_CSRF_TOKEN] &&
    process.env.NEXT_PUBLIC_CSRF_TOKEN
  ) {
    response.status(401).json({ message: "Unauthorized" });
  }

  return null;
};
