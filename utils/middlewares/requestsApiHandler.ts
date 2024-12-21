import { NextRequest, NextResponse } from "next/server";
import { validateApiPath } from "./helper";

const PUBLIC_API = ["/api/login", "/api/register", "/api/not-found"];

const requestsApiHandler = async (request: NextRequest) => {
  if (validateApiPath(request)) {
    return null;
  }

  if (PUBLIC_API.includes(request.nextUrl.pathname)) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

  return NextResponse.rewrite(new URL("/404", request.url));
};

export default requestsApiHandler;
