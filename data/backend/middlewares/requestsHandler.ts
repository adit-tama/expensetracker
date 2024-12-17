import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import requestsApiHandler from "./requestsApiHandler";

const requestsHandler = async (request: NextRequest) => {
  if (request.nextUrl.pathname.includes("/api/")) {
    requestsApiHandler(request);
  }

  return NextResponse.next();
};

export default requestsHandler;
