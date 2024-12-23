import Logo from "@/components/Layout/Logo";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { onSubmit, register, errors, isLoading } = useLoginForm();

  return (
    <form
      className="w-full max-w-[375px] p-4 flex-col justify-start items-start gap-6 inline-flex"
      onSubmit={onSubmit}
    >
      <Logo />
      <div className="self-stretch flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <label
            className="w-[147px] text-stone-600 text-sm font-medium leading-[14px]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            id="email"
            placeholder="mail@example.com"
            name="email"
            autoComplete="username"
            required
            className="px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
          />{" "}
          {errors.email && (
            <p role="alert" className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
          <label className="text-stone-600 text-sm font-medium leading-[14px]">
            Password
          </label>
          <div className="bg-stone-100 rounded justify-start flex w-full">
            <input
              {...register("password", {
                required: "Password is required",
              })}
              id="password"
              placeholder="*******"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            />
          </div>
        </div>
      </div>
      <button
        className="self-stretch px-6 py-3.5 bg-red-400 rounded justify-center items-center inline-flex"
        type="submit"
        disabled={isLoading}
      >
        <span className="text-red-50 text-sm font-normal leading-[14px]">
          {isLoading ? "Signing in ..." : "Sign In"}
        </span>
      </button>
    </form>
  );
};

export default LoginForm;
