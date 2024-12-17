import { InternalAxiosRequestConfig } from "axios";
import { HEADERS } from "../constants";

export const csrfTokenInterceptor = (config: InternalAxiosRequestConfig) => {
  const csrfToken = process.env.NEXT_PUBLIC_CSRF_TOKEN;

  if (!csrfToken) throw new Error("Missing Next.js CSRF token");

  config.headers.set(HEADERS.X_CSRF_TOKEN, csrfToken);

  return config;
};
