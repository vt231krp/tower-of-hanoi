import { createContext, useContext } from "react";

/** Available modal types in the application. */
export type ModalType = "gameOver";

/**
 * Context value for the global modal system.
 */
interface IModalContext {
  /** Whether a modal is currently open. */
  isOpen: boolean;
  /** The currently active modal type. */
  modal?: ModalType;
  /** Additional parameters passed to the modal. */
  modalParams?: Record<string, unknown>;
  /** Opens a modal by type with optional parameters. */
  openModal: (modal: ModalType, params?: { [key: string]: unknown }) => void;
  /** Closes the currently open modal. */
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

/**
 * Hook to access the modal context.
 *
 * Must be used within a `ModalProvider`.
 *
 * @throws Error if used outside of `ModalProvider`.
 */
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
