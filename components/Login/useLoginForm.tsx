import { useForm } from "react-hook-form";
import { signInRequest } from "../../utils/client/requests";
import { AuthPayloadModel } from "../../utils/data/models";
import Cookies from "universal-cookie";
import { transfromAuthDto } from "../../utils/data/transformers/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { COOKIES_NAMES } from "../../utils/constants";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthPayloadModel>();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const cookiesStore = new Cookies();

  const onSubmit = handleSubmit(async (value) => {
    setIsLoading(true);
    const { message, success, data } = await signInRequest(value);

    if (!success) {
      setIsLoading(false);
      setMessage(message);
      return;
    }

    const { accessToken, refreshToken } = transfromAuthDto(data);
    cookiesStore.set(COOKIES_NAMES.ACCESS_TOKEN, accessToken);
    cookiesStore.set(COOKIES_NAMES.REFRESH_TOKEN, refreshToken);
    setIsLoading(false);
    router.push("/");
  });

  return { register, onSubmit, errors, message, isLoading };
};

export default useLogin;
