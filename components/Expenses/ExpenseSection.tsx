import React from "react";

import ExpenseItemCard from "@/components/Expenses/ExpenseItemCard";
import { useDialogContext } from "../Layout/Dialog/DialogContext";
import { useExpenseContext } from "./ExpenseContext";

const ExpenseSection = () => {
  const { openModal } = useDialogContext();
  const { message, isLoading, expenseList } = useExpenseContext();

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
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      <div className="flex flex-col gap-3">
        {expenseList.map((card) => (
          <ExpenseItemCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseSection;
