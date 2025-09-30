import { useGameContext } from "../contexts/GameContext";
import { Button } from "./Button";

export const Header = () => {
  const { setGameState } = useGameContext();

  return (
    <header className="w-full border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent transition-all duration-200 hover:from-amber-300 hover:to-yellow-300"
          >
            Tower of Hanoi
          </a>
        </div>

        <nav className="flex items-center gap-4">
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
