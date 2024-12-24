export type AuthPayloadModel = {
  email: string;
  password: string;
};

export type AuthModel = {
  accessToken: string;
  refreshToken: string;
  uid: number;
};
