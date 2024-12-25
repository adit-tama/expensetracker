import { useExpenseContext } from "./ExpenseContext";

const ExpenseCleanup = () => {
  const { handleCleanUp, expenseList } = useExpenseContext();
  if (expenseList.length) {
    return (
      <div className="w-full pb-4">
        <button
          onClick={() => handleCleanUp()}
          className="w-full px-6 py-3.5 bg-red-400 flex justify-center items-center rounded text-red-50 text-sm font-normal leading-[14px]"
        >
          Clean Up
        </button>
      </div>
    );
  }

  return;
};

export default ExpenseCleanup;
