import React from "react";

import ExpenseItemCard from "@/components/Expenses/ExpenseItemCard";
import { useDialogContext } from "../Layout/Dialog/DialogContext";
import { useExpenseContext } from "./ExpenseContext";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseCleanup from "./ExpenseCleanUp";

const ExpenseSection = () => {
  const { openModal } = useDialogContext();
  const { message, expenseList } = useExpenseContext();

  return (
    <div className="max-w-[468px] mt-0 mx-auto">
      <div className="pb-4 flex justify-between">
        <h2>Recent Expenses</h2>
        <button
          className="w-[30px] h-[30px] bg-red-400 flex justify-center items-center rounded"
          onClick={openModal}
        >
          <img src="/icons/plus-20-light.svg" />
        </button>
      </div>
      <ExpenseSummary />
      <ExpenseCleanup />
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
