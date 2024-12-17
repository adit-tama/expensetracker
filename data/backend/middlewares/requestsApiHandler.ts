import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { WHITELISTED_PATH } from "../../constants";
import { validateCSRFToken } from "./helper";

const requestsApiHandler = async (request: NextRequest) => {
  if (
    WHITELISTED_PATH.includes(request.nextUrl.pathname) &&
    validateCSRFToken(request)
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
};

export default requestsApiHandler;
