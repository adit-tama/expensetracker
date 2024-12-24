import React from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import { DialogProvider } from "../components/Layout/Dialog/DialogContext";
import { ExpenseProvider } from "../components/Expenses/ExpenseContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DialogProvider>
      <ExpenseProvider>
        <Component {...pageProps} />
      </ExpenseProvider>
    </DialogProvider>
  );
}
