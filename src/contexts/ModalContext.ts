import { createContext, useContext } from "react";

export type ModalType = "gameOver";

interface IModalContext {
  isOpen: boolean;
  modal?: ModalType;
  modalParams?: Record<string, unknown>;
  openModal: (modal: ModalType, params?: { [key: string]: unknown }) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
