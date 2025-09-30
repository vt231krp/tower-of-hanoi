import { createContext } from "react";
import type { GameState } from "../types";
import { useContext } from "react";

interface IGameContext {
  gameState: GameState;
  setGameState: (state: GameState) => void;
}

export const GameContext = createContext<IGameContext | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
