import { ExpenseItemCardModel } from "./models";

export const getTotal = (items: ExpenseItemCardModel[]): number =>
  items.reduce((total, item) => total + parseInt(item.amount, 10), 0);
