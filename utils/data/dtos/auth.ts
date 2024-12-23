type ApiResponse = {
  status: number;
  message: string;
  success: boolean;
};

export type AuthDto = {
  session: {
    access_token: string;
    refresh_token: string;
  };
};

export type AuthResponse = ApiResponse & { data: AuthDto };

export type ExpensePostResponse = ApiResponse;
