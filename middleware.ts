import type { NextRequest } from "next/server";
import requestsHandler from "./data/backend/middlewares/requestsHandler";

export const middleware = async (request: NextRequest) =>
  requestsHandler(request);

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
