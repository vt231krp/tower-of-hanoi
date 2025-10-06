import { GamePage, ResultsPage, StartPage } from "./pages";
import { Header } from "./components";
import { useGameContext } from "./contexts/GameContext";

export const App = () => {
  const { gameState, setGameState } = useGameContext();

  const handleStartGame = () => {
    setGameState("game");
  };

  const renderPage = () => {
    switch (gameState) {
      case "start":
        return <StartPage onStartGame={handleStartGame} />;
      case "game":
        return <GamePage initDifficulty={2} />;
      case "results":
        return <ResultsPage />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <Header />
      {renderPage()}
    </div>
  );
};
