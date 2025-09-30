import { useState, type ReactNode } from "react";
import type { GameState } from "../../types";
import { GameContext } from "../../contexts/GameContext";

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>("start");

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
