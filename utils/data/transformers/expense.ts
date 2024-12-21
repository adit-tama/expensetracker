import * as Factory from "factory.ts";
import { ExpenseItemCardModel } from "../models";

export const ExpenseItemCardModelFactory =
  Factory.Sync.makeFactory<ExpenseItemCardModel>({
    date: "13 December 2023",
    amount: "13 EUR",
    ctaText: "Delete",
  });
