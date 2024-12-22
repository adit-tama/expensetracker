import { useModalContext } from "../Layout/Dialog/DialogContext";

const ExpenseForm = () => {
  const { closeModal } = useModalContext();

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
      <form className="w-full max-w-[375px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch flex-row justify-start items-start gap-5 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex w-3/4">
            <label
              className=" text-stone-600 text-sm font-medium leading-[14px]"
              htmlFor="email"
            >
              Amount
            </label>
            <input
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
              name="currency"
              id="currecy"
              className="rounded px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            >
              <option value="eur">EUR</option>
              <option value="idr">IDR</option>
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
              type="file"
              id="image"
              name="image"
              required
              className="rounded px-2 py-3 self-stretch text-stone-500 text-sm font-normal leading-[14px] bg-stone-100 w-full"
            />
          </div>
          <div className="h-[66px] bg-stone-400 w-1/4 rounded-lg"></div>
        </div>
        <button
          className="self-stretch px-6 py-3.5 bg-red-400 rounded justify-center items-center inline-flex"
          type="submit"
        >
          <span className="text-red-50 text-sm font-normal leading-[14px]">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
