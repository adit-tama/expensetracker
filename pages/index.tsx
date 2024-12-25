import React from "react";
import Homepage from "@/components/Home/Homepage";
import { DialogProvider } from "../components/Layout/Dialog/DialogContext";
import { ExpenseProvider } from "../components/Expenses/ExpenseContext";

const HomePage = () => (
  <DialogProvider>
    <ExpenseProvider>
      <Homepage />
    </ExpenseProvider>
  </DialogProvider>
);

export default HomePage;
