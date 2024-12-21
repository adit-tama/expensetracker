import type { NextRequest } from "next/server";
import requestsApiHandler from "./utils/middlewares/requestsApiHandler";
import requestsPageHandler from "./utils/middlewares/requestsPageHander";

export const middleware = async (request: NextRequest) =>
  (await requestsApiHandler(request)) || requestsPageHandler(request);

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|icons|favicon.ico|sitemap.xml|robots.txt|/).*)",
  ],
};
