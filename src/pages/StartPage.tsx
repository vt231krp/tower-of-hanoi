import { Link } from "react-router";
import { Button } from "../components";

export const StartPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-blue-700 md:text-6xl">
          Tower of Hanoi
        </h1>
        <p className="text-md text-gray-400 md:text-xl">
          Move all disks to the rightmost tower
        </p>
      </div>

      <Button size="md" asChild>
        <Link to="/game">▶️ Start Game</Link>
      </Button>
    </div>
  );
};
