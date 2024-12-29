import { getTotal } from "../../utils/data/helper";
import { useExpenseContext } from "./ExpenseContext";

const ExpenseSummary = () => {
  const { expenseList } = useExpenseContext();
  const totalExpense = getTotal(expenseList);
  const averageExpense = totalExpense
    ? Math.floor(totalExpense / expenseList.length)
    : 0;
  return (
    <div className="w-full flex gap-4 justify-between pb-4">
      <div className="w-full p-4 bg-stone-200 rounded-md flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-black text-sm font-normal leading-[14px]">
          Daily Average
        </div>
        <div className="text-black text-xl font-medium leading-tight">
          {averageExpense} EUR
        </div>
      </div>
      <div className="w-full p-4 bg-stone-200 rounded-md flex-col justify-start items-start gap-3 inline-flex">
        <div className="text-black text-sm font-normal leading-[14px]">
          Total
        </div>
        <div className="text-black text-xl font-medium leading-tight">
          {totalExpense} EUR
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
