import { createBrowserRouter } from "react-router";
import {
  GamePage,
  PrivacyPolicyPage,
  ResultsPage,
  SettingsPage,
} from "../pages";
import { StartPage } from "../pages/StartPage";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);
