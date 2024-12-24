import { ApiResponse } from "./common";

export type AuthDto = {
  session: {
    access_token: string;
    refresh_token: string;
  };
  user: {
    id: number;
  };
};

export type AuthResponse = ApiResponse & { data: AuthDto };
