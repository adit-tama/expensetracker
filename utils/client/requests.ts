import { HEADERS } from "@/utils/constants";
import { AuthDto, AuthResponse } from "../data/dtos/auth";
import { AuthPayloadModel } from "../data/models";

const createPostRequest =
  <T>(path: string) =>
  async (value: object): Promise<T> => {
    const csrfToken = process.env.NEXT_PUBLIC_CSRF_TOKEN;

    if (!csrfToken) throw new Error("Missing Next.js CSRF token");

    return await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        [HEADERS.X_CSRF_TOKEN]: process.env.NEXT_PUBLIC_CSRF_TOKEN,
      },
      body: JSON.stringify(value),
    }).then((data) => data.json());
  };

export const signInRequest = async (payload: AuthPayloadModel) =>
  await createPostRequest<AuthResponse>("/api/login")(payload);
