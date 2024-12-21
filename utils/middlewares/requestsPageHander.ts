import { NextRequest, NextResponse } from "next/server";
import { ACTIVE_PATHS } from "../constants";

const requestsPageHandler = async (request: NextRequest) => {
  if (!ACTIVE_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  return NextResponse.next();
};

export default requestsPageHandler;
