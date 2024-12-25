import { NextRequest, NextResponse } from "next/server";
import { validateApiPath, validateCSRFToken } from "@/utils/middlewares/helper";
import { sessionApiHandler } from "./sessionHandler";

const WITH_SESSION_API = ["/api/not-found", "/api/upload", "/api/expense"];

const NO_SESSION_API = ["/api/login", "/api/register"];

const requestsApiHandler = async (request: NextRequest) => {
  if (validateApiPath(request)) {
    return null;
  }

  if (!validateCSRFToken(request)) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  if (WITH_SESSION_API.includes(request.nextUrl.pathname)) {
    return await sessionApiHandler(request);
  }

  if (NO_SESSION_API.includes(request.nextUrl.pathname)) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

  return NextResponse.rewrite(new URL("/404", request.url));
};

export default requestsApiHandler;
