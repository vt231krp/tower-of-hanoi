import { Button } from "../components";
import { useGameContext } from "../contexts/GameContext";

export const StartPage = () => {
  const { setGameState } = useGameContext();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-amber-300">
          Tower of Hanoi
        </h1>
        <p className="text-xl text-gray-400">
          Move all disks to the rightmost tower
        </p>
      </div>

      <Button size="lg" onClick={() => setGameState("game")}>
        Start Game
      </Button>
    </div>
  );
};
