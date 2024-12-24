export type ExpenseItemCardModel = {
  id: number;
  filename: string;
  amount: string;
  currency: string;
  imageUrl: string;
};

export type ExpensePayloadModel = {
  imageUrl: string;
  amount: string;
  currency: string;
};
