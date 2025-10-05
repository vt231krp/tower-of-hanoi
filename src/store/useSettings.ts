import type { Settings } from "../types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  settings: Settings;
  updateDifficulty: (difficulty: number) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
  resetSettings: () => void;
}

const defaultSettings: Settings = {
  difficulty: 3,
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateDifficulty: (difficulty: number) =>
        set((state) => ({
          settings: { ...state.settings, difficulty },
        })),
      updateSettings: (newSettings: Partial<Settings>) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    {
      name: "settings-storage",
    },
  ),
);
