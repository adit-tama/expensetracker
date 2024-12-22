import React, { createContext, useContext, useState, ReactNode } from "react";

type ModalContext = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContext | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContext => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
