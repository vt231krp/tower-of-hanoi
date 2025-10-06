import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import {
  GameProvider,
  ModalProvider,
  SettingsProvider,
} from "./components/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <GameProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </GameProvider>
    </ModalProvider>
  </StrictMode>,
);
