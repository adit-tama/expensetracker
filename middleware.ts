import type { NextRequest } from "next/server";
import requestsApiHandler from "./utils/middlewares/requestsApiHandler";
import requestsPageHandler from "./utils/middlewares/requestsPageHander";

export const middleware = async (request: NextRequest) =>
  requestsApiHandler(request) || requestsPageHandler();

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
