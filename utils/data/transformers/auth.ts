import { AuthDto } from "@/dtos/auth";
import { AuthModel } from "@/models/auth";

export const transfromAuthDto = (dto: AuthDto): AuthModel => ({
  accessToken: dto.session.access_token,
  refreshToken: dto.session.refresh_token,
});
