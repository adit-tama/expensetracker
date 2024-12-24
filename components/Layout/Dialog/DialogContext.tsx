import React, { createContext, useContext, useState, ReactNode } from "react";

type DialogContext = {
  isOpen: boolean;
  isLoading: boolean;
  openModal: () => void;
  closeModal: () => void;
  openLoading: () => void;
  closeLoading: () => void;
};

const DialogContext = createContext<DialogContext | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openLoading = () => setIsLoading(true);
  const closeLoading = () => setIsLoading(false);

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        isLoading,
        openModal,
        closeModal,
        openLoading,
        closeLoading,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = (): DialogContext => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};
