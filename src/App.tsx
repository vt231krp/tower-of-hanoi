import { GamePage, ResultsPage, SettingsPage, StartPage } from "./pages";
import { Header } from "./components";
import { useGameContext } from "./contexts/GameContext";
import { Modal } from "./components/Modal";

export const App = () => {
  const { gameState } = useGameContext();

  const renderPage = () => {
    switch (gameState) {
      case "start":
        return <StartPage />;
      case "game":
        return <GamePage />;
      case "results":
        return <ResultsPage />;
      case "settings":
        return <SettingsPage />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />
      {renderPage()}
      <Modal />
    </div>
  );
};
