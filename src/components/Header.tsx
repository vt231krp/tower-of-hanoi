import { useGameContext } from "../contexts/GameContext";
import { Button } from "./Button";

export const Header = () => {
  const { setGameState } = useGameContext();

  return (
    <header className="w-full border-b border-slate-700 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <a href="/" className="text-3xl font-bold text-blue-700">
            Tower of Hanoi
          </a>
        </div>

        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setGameState("settings")}
          >
            Settings
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setGameState("start")}
          >
            Home
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setGameState("results")}
          >
            Results
          </Button>
        </nav>
      </div>
    </header>
  );
};
