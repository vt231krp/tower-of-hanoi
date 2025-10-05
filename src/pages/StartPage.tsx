import { Link } from "react-router";
import { Button } from "../components";

export const StartPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="space-y-2 text-center">
        <h1 className="text-6xl font-bold text-blue-700">Tower of Hanoi</h1>
        <p className="text-xl text-gray-400">
          Move all disks to the rightmost tower
        </p>
      </div>

      <Button size="lg" asChild>
        <Link to="/game">▶️ Start Game</Link>
      </Button>
    </div>
  );
};
