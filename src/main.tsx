import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { GameProvider, SettingsProvider } from "./components/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </GameProvider>
  </StrictMode>,
);
