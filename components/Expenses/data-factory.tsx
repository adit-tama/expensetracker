import * as Factory from "factory.ts";
import { ExpenseItemCardModel } from "./types";

export const ExpenseItemCardModelFactory =
  Factory.Sync.makeFactory<ExpenseItemCardModel>({
    date: "13 December 2023",
    amount: "13 EUR",
    ctaText: "Delete",
  });
