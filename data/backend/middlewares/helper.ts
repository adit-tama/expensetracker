import { NextRequest } from "next/server";
import { HEADERS } from "../../constants";

export const validateCSRFToken = (request: NextRequest) =>
  request.headers.get(HEADERS.X_CSRF_TOKEN) ===
  process.env.NEXT_PUBLIC_CSRF_TOKEN;
