import { NextRequest, NextResponse } from "next/server";
import { validateApiPath, validateCSRFToken } from "@/utils/middlewares/helper";

const PUBLIC_API = ["/api/login", "/api/register", "/api/not-found"];

const requestsApiHandler = async (request: NextRequest) => {
  if (validateApiPath(request)) {
    return null;
  }

  if (!validateCSRFToken(request)) {
    return NextResponse.redirect(new URL("/404", request.url));
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
