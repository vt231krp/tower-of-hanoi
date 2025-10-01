import { createContext, useContext } from "react";
import type { Settings } from "../types";

interface ISettingsContext {
  settings: Settings;
  difficulty: number;
  updateDifficulty: (difficulty: number) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
  resetSettings: () => void;
  isLoaded: boolean;
}

export const SettingsContext = createContext<ISettingsContext | undefined>(
  undefined,
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
