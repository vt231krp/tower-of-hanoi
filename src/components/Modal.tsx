import { lazy } from "react";
import { useModal } from "../contexts/ModalContext";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { Button } from "./Button";
import type { GameOverModalProps } from "./modals/GameOverModal";

const GameOverModal = lazy(() => import("./modals/GameOverModal"));

export const Modal = () => {
  const { modal, modalParams, closeModal, isOpen } = useModal();

  const modalRef = useOnClickOutside<HTMLDivElement>(closeModal);

  const renderComp = () => {
    switch (modal) {
      case "gameOver":
        return (
          <GameOverModal {...(modalParams as unknown as GameOverModalProps)} />
        );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-100000 flex items-center justify-center bg-black/60">
      <div
        className="w-full max-w-md space-y-2 rounded-xl border border-slate-600 bg-slate-950 p-5"
        ref={modalRef}
      >
        <div className="flex justify-end">
          <Button variant="secondary" onClick={closeModal}>
            &#10539;
          </Button>
        </div>
        {renderComp()}
      </div>
    </div>
  );
};
