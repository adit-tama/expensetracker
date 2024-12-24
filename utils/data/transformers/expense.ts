import { ExpenseItemCardModel } from "@/models/expense";
import { ExpenseItemCardDto } from "../dtos/expense";

export const transfromExpenseItemCardDto = (
  dto: ExpenseItemCardDto
): ExpenseItemCardModel => ({
  id: dto.id,
  filename: dto.filename,
  amount: dto.amount,
  currency: dto.currency,
  imageUrl: dto.image_url,
});

export const transfromExpenseListDto = (
  dto: Array<ExpenseItemCardDto>
): Array<ExpenseItemCardModel> => dto.map(transfromExpenseItemCardDto);
