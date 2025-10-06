import { useState, useEffect, type ReactNode } from "react";
import { settingsSchema } from "../../schemas/settings";
import type { Settings } from "../../types";
import { SettingsContext } from "../../contexts/SettingsContext";

const STORAGE_KEY = "tower-of-hanoi-settings";

const defaultSettings: Settings = {
  difficulty: 3,
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        const validatedSettings = settingsSchema.parse(parsed);
        setSettings(validatedSettings);
      } catch (error) {
        console.error("Failed to parse settings from localStorage:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, isLoaded]);

  const updateDifficulty = (difficulty: number) => {
    if (difficulty >= 3 && difficulty <= 7) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        difficulty,
      }));
    }
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    try {
      const updatedSettings = { ...settings, ...newSettings };
      const validatedSettings = settingsSchema.parse(updatedSettings);
      setSettings(validatedSettings);
    } catch (error) {
      console.error("Invalid settings update:", error);
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const value = {
    settings,
    difficulty: settings.difficulty,
    updateDifficulty,
    updateSettings,
    resetSettings,
    isLoaded,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
