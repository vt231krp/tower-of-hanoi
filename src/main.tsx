import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ModalProvider, SettingsProvider } from "./components/providers";
import { RouterProvider } from "react-router";
import { router } from "./config/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <SettingsProvider>
        <RouterProvider router={router} />
      </SettingsProvider>
    </ModalProvider>
  </StrictMode>,
);
