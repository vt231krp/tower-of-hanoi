import { useState, type ReactNode } from "react";
import { ModalContext, type ModalType } from "../../contexts/ModalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalType | undefined>();
  const [modalParams, setModalParams] = useState<
    Record<string, unknown> | undefined
  >();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (modal: ModalType, params?: Record<string, unknown>) => {
    setModal(modal);
    setModalParams(params);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModal(undefined);
    setModalParams(undefined);
  };

  return (
    <ModalContext.Provider
      value={{ modal, modalParams, isOpen, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
