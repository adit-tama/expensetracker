import React from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import { ModalProvider } from "../components/Layout/Dialog/DialogContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
