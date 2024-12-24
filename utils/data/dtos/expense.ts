import { ApiResponse } from "./common";

export type ExpenseItemCardDto = {
  id: number;
  image_url: string;
  amount: string;
  filename: string;
  currency: string;
};

export type ExpensePostResponse = ApiResponse & {
  data: Array<ExpenseItemCardDto>;
};
