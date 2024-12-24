import React, { createContext, useContext, useState, ReactNode } from "react";

type DialogContext = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const DialogContext = createContext<DialogContext | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, openModal, closeModal }}>
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
