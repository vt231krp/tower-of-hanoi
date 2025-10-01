import { GamePage, ResultsPage, SettingsPage, StartPage } from "./pages";
import { Header } from "./components";
import { useGameContext } from "./contexts/GameContext";

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
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      {renderPage()}
    </div>
  );
};
