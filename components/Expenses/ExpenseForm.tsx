import { useDialogContext } from "../Layout/Dialog/DialogContext";
import { useExpenseContext } from "./ExpenseContext";

const ExpenseForm = () => {
  const { closeModal } = useDialogContext();
  const {
    handleFileUpload,
    previewFile,
    handleSubmitForm,
    message,
    isLoading,
    register,
  } = useExpenseContext();

  return (
    <div className="grow shrink basis-0 p-4 bg-white rounded-lg flex-col justify-start items-start gap-6 flex max-w-[343px]">
      <div className=" pb-3 justify-between items-center gap-2.5 flex w-full">
        <div className="grow shrink basis-0 text-black text-xl font-medium leading-tight">
          Expense Form
        </div>
        <button
          className="w-[30px] h-[30px] flex justify-center items-center rounded rotate-45"
          onClick={() => closeModal()}
        >
          <img src="/icons/plus-20.svg" />
        </button>
      </div>
      <form
        className="w-full max-w-[375px] flex-col justify-start items-start gap-6 inline-flex"
        onSubmit={handleSubmitForm}
      >
        <div className="self-stretch flex-row justify-start items-start gap-5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex w-3/4">
            <label
              className=" text-stone-600 text-sm font-medium leading-[14px]"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              {...register("amount", {
                required: "please fill in the amount",
              })}
              disabled={isLoading}
              id="amount"
              placeholder="99"
              name="amount"
              required
              type="number"
              className=" rounded px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            />
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex w-1/4">
            <label
              className=" text-stone-600 text-sm font-medium leading-[14px]"
              htmlFor="email"
            >
              Currency
            </label>
            <select
              {...register("currency", {
                required: "please fill in the currency",
              })}
              disabled={isLoading}
              name="currency"
              id="currecy"
              className="rounded px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            >
              <option value="eur">EUR</option>
            </select>
          </div>
        </div>
        <div className="self-stretch flex-row justify-start items-start gap-5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex w-3/4">
            <label
              className=" text-stone-600 text-sm font-medium leading-[14px]"
              htmlFor="email"
            >
              Upload Photo
            </label>
            <input
              disabled={isLoading}
              onChange={handleFileUpload}
              type="file"
              id="image"
              name="image"
              required
              className="rounded px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            />
          </div>
          {previewFile ? (
            <img
              src={previewFile}
              className="h-[66px] bg-stone-400 w-1/4 rounded-lg"
            />
          ) : (
            <div className="h-[66px] bg-stone-400 w-1/4 rounded-lg" />
          )}
        </div>
        <button
          className="self-stretch px-6 py-3.5 bg-red-400 rounded justify-center items-center inline-flex"
          type="submit"
          disabled={isLoading}
        >
          <span className="text-red-50 text-sm font-normal leading-[14px]">
            {isLoading ? "Submitting..." : "Submit"}
          </span>
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ExpenseForm;
