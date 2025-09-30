import { useState } from "react";
import { Button } from "../components";

interface StartPageProps {
  onStartGame: (difficulty: number) => void;
}

export const StartPage = ({ onStartGame }: StartPageProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(3);

  const difficulties = [
    { level: 3, name: "Easy" },
    { level: 4, name: "Medium" },
    { level: 5, name: "Hard" },
    { level: 6, name: "Expert" },
    { level: 7, name: "Master" },
  ];

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

      <div className="w-full max-w-md space-y-6 rounded-lg bg-slate-800 p-8">
        <h2 className="text-center text-2xl font-bold text-amber-300">
          Choose Difficulty
        </h2>

        <div className="space-y-3">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.level}
              onClick={() => setSelectedDifficulty(difficulty.level)}
              className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                selectedDifficulty === difficulty.level
                  ? "border-amber-400 bg-amber-400/10 text-amber-300"
                  : "border-slate-600 bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{difficulty.name}</span>
                <span className="text-sm">{difficulty.level} disks</span>
              </div>
            </button>
          ))}
        </div>

        <Button
          size="lg"
          variant="primary"
          className="w-full"
          onClick={() => onStartGame(selectedDifficulty)}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};
