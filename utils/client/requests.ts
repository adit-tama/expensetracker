import { HEADERS } from "../constants";

const createPostRequest = (path: string) => async (value: object) => {
  const csrfToken = process.env.NEXT_PUBLIC_CSRF_TOKEN;

  if (!csrfToken) throw new Error("Missing Next.js CSRF token");

  await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [HEADERS.X_CSRF_TOKEN]: csrfToken,
    },
    body: JSON.stringify(value),
  });
};

export const loginUser = createPostRequest("/api/login");
