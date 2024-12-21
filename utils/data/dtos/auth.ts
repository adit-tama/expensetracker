type ApiResponse<T> = {
  status: number;
  message: string;
  success: boolean;
  data: T;
};

export type AuthDto = {
  session: {
    access_token: string;
    refresh_token: string;
  };
};

export type AuthResponse = ApiResponse<AuthDto>;
