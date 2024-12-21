import { NextRequest, NextResponse } from "next/server";
import { ACTIVE_PATHS, WHITELIST_WEB_PATH } from "@/utils/constants";
import { sessionHandler } from "./sessionHandler";

const requestsPageHandler = async (request: NextRequest) => {
  if (!ACTIVE_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  if (WHITELIST_WEB_PATH.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return await sessionHandler(request);
};

export default requestsPageHandler;
