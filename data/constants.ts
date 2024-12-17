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
