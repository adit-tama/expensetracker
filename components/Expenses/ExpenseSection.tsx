import React from "react";
import { ExpenseItemCardModelFactory } from "@/transformers/expense";

import ExpenseItemCard from "@/components/Expenses/ExpenseItemCard";
import { useModalContext } from "../Layout/Dialog/DialogContext";

const ExpenseSection = () => {
  const { openModal } = useModalContext();

  return (
    <div>
      <div className="pb-4 flex justify-between">
        <h2>Recent Expenses</h2>
        <button
          className="w-[30px] h-[30px] bg-red-400 flex justify-center items-center rounded"
          onClick={openModal}
        >
          <img src="/icons/plus-20.svg" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {ExpenseItemCardModelFactory.buildList(4).map((card, index) => (
          <ExpenseItemCard {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseSection;
