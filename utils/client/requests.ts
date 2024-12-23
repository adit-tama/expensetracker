import { HEADERS } from "@/utils/constants";
import { AuthResponse, ExpensePostResponse } from "../data/dtos/auth";
import { AuthPayloadModel, ExpensePayloadModel } from "../data/models";

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
    }).then((response) => response.json());
  };

export const signInRequest = async (payload: AuthPayloadModel) =>
  await createPostRequest<AuthResponse>("/api/login")(payload);

export const uploadRequest = async (file: File, filename: string) =>
  await fetch(`/api/upload?filename=${filename}`, {
    method: "POST",
    body: file,
    headers: {
      "Content-Type": "application/json",
      [HEADERS.X_CSRF_TOKEN]: process.env.NEXT_PUBLIC_CSRF_TOKEN,
    },
  }).then((response) => response.json());

export const expensePostRequest = async (payload: ExpensePayloadModel) =>
  await createPostRequest<ExpensePostResponse>("/api/expense")(payload);
