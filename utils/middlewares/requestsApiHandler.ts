import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { HTTP_STATUS, WHITELISTED_PATH } from "../constants";
import { validateCSRFToken, validateCSRFTokenTest } from "./helper";

const requestsApiHandler = async (request: NextRequest) => {
  return validateCSRFTokenTest(request);
};

export default requestsApiHandler;
