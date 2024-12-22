import React from "react";
import { ExpenseItemCardModel } from "@/models/expense";

const ExpenseItemCard = ({ date, amount, ctaText }: ExpenseItemCardModel) => {
  return (
    <div className="h-[66px] w-full flex flex-row justify-between">
      <div className="flex items-center gap-4">
        <img
          className="w-[66px] h-[66px] rounded-md"
          src="https://via.placeholder.com/66x66"
        />
        <div className="justify-start items-start gap-3 flex flex-col w-fit">
          <div className="self-stretch text-black text-sm font-normal leading-[14px]">
            {date}
          </div>
          <div className="self-stretch text-black text-sm font-medium leading-[14px]">
            {amount}
          </div>
        </div>
      </div>
      <button className="block px-6 py-3.5 bg-stone-400 rounded text-red-50 text-sm font-normal leading-[14px] h-fit">
        {ctaText}
      </button>
    </div>
  );
};

export default ExpenseItemCard;
