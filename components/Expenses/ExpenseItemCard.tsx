import React from "react";
import { ExpenseItemCardModel } from "@/models/expense";
import { useExpenseContext } from "./ExpenseContext";

const ExpenseItemCard = ({
  filename,
  amount,
  imageUrl,
  currency,
  id,
}: ExpenseItemCardModel) => {
  const { handleDeleteExpenseItem } = useExpenseContext();

  return (
    <div className="h-[66px] w-full flex flex-row justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          className="w-[66px] h-[66px] rounded-md border-2"
          src={imageUrl}
          alt={"receipt"}
        />
        <div className="justify-start items-start gap-3 flex flex-col w-fit">
          <div className="self-stretch text-black text-sm font-normal leading-[14px]">
            {filename}
          </div>
          <div className="self-stretch text-black text-sm font-medium leading-[14px]">
            {`${amount} ${currency}`}
          </div>
        </div>
      </div>
      <button
        className="block px-6 py-3.5 bg-stone-400 rounded text-red-50 text-sm font-normal leading-[14px] h-fit"
        onClick={() => handleDeleteExpenseItem({ id, imageUrl })}
      >
        {"Delete"}
      </button>
    </div>
  );
};

export default ExpenseItemCard;
