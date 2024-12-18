export const COOKIES_NAMES = {
  AUTH: "Auth",
} as const;

export const HEADERS = {
  ACCEPT_LANGUAGE: "Accept-Language",
  CACHE_CONTROL: "Cache-Control",
  CONTENT_TYPE: "Content-Type",
  X_CSRF_TOKEN: "X-CSRF-Token",
} as const;

export const WHITELISTED_PATH = ["/api/login", "/api/register"];

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
