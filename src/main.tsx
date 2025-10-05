import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ModalProvider } from "./components/providers";
import { RouterProvider } from "react-router";
import { router } from "./config/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </StrictMode>,
);
