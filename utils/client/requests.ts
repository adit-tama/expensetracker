import { HEADERS } from "@/utils/constants";
import { AuthResponse } from "../data/dtos/auth";
import { ApiResponse } from "../data/dtos/common";
import { ExpensePostResponse } from "../data/dtos/expense";
import { AuthPayloadModel, ExpensePayloadModel } from "../data/models";
import { DbPayloadModel } from "../data/models/common";

const createPostRequest =
  (method: string) =>
  <T>(path: string) =>
  async (value?: object): Promise<T> => {
    const csrfToken = process.env.NEXT_PUBLIC_CSRF_TOKEN;

    if (!csrfToken) throw new Error("Missing Next.js CSRF token");

    return await fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
        [HEADERS.X_CSRF_TOKEN]: process.env.NEXT_PUBLIC_CSRF_TOKEN,
      },
      body: value && JSON.stringify(value),
    }).then((response) => response.json());
  };

export const signInRequest = async (payload: AuthPayloadModel) =>
  await createPostRequest("POST")<AuthResponse>("/api/login")(payload);

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
  await createPostRequest("POST")<ApiResponse>("/api/expense")(payload);

export const expenseGetRequest = async () =>
  await createPostRequest("GET")<ExpensePostResponse>("/api/expense")();

export const expenseDeleteRequest = async (
  payload: DbPayloadModel & { imageUrl: string }
) => await createPostRequest("DELETE")<ApiResponse>("/api/expense")(payload);
