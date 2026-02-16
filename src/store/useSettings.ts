import type { Settings } from "../types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Shape of the settings Zustand store.
 */
interface SettingsState {
  /** Current game settings. */
  settings: Settings;
  /** Update only the difficulty value. */
  updateDifficulty: (difficulty: number) => void;
  /** Partially update settings. */
  updateSettings: (newSettings: Partial<Settings>) => void;
  /** Reset settings to defaults. */
  resetSettings: () => void;
}

/** Default game settings (3 disks). */
const defaultSettings: Settings = {
  difficulty: 3,
};

/**
 * Zustand store for game settings, persisted to `localStorage`.
 *
 * Provides actions to update, reset, and read the current difficulty.
 */
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
