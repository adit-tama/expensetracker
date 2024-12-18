import { NextRequest, NextResponse } from "next/server";
import { HEADERS, HTTP_STATUS } from "../constants";

export const validateCSRFToken = (request: NextRequest) =>
  request.headers.get(HEADERS.X_CSRF_TOKEN) ===
  process.env.NEXT_PUBLIC_CSRF_TOKEN;

export function validateCSRFTokenTest(request: NextRequest) {
  const isValidToken =
    request.headers.get(HEADERS.X_CSRF_TOKEN) ===
    process.env.NEXT_PUBLIC_CSRF_TOKEN;

  if (!isValidToken) {
    return NextResponse.next({ status: HTTP_STATUS.Unauthorized });
  }

  return null;
}
