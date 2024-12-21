export const SUPABASE_URL = "https://psoicjsqmouihpuyjozu.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzb2ljanNxbW91aWhwdXlqb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NjI0NTIsImV4cCI6MjA1MDEzODQ1Mn0.7rlOed2R4Qkf9ZKswNbFZBALCOdOlUPR8FSBAYwswY0";

export const HEADERS = {
  ACCEPT_LANGUAGE: "Accept-Language",
  CACHE_CONTROL: "Cache-Control",
  CONTENT_TYPE: "Content-Type",
  X_CSRF_TOKEN: "x-csrf-token",
  AUTHORIZATION: "Authorization",
} as const;

export enum HTTP_STATUS {
  Ok = 200,
  Created = 201,
  TemporarilyMoved = 302,
  MovedPermanently = 301,
  TemporaryRedirect = 307,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAccepted = 406,
  RequestTimeout = 408,
  PayloadTooLarge = 413,
  UnprocessableEntity = 422,
  TooEarly = 425,
  TooManyRequests = 429,
  InternalError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export const ACTIVE_PATHS = ["/", "/login", "/register", "/404"];
export const WHITELIST_WEB_PATH = ["/login", "/register", "/404"];
export const COOKIES_NAMES = {
  ACCESS_TOKEN: "__access_token",
  REFRESH_TOKEN: "__refresh_token",
} as const;
