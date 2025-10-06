import { Button } from "../components";
import { useGameContext } from "../contexts/GameContext";
import { useSettings } from "../contexts/SettingsContext";
import { useResults } from "../hooks/useResults";
import { formatTime } from "../lib/utils";

export const ResultsPage = () => {
  const { lastGame, statistics, clearResults } = useResults();
  const { setGameState } = useGameContext();
  const { updateDifficulty } = useSettings();

  const handlePlayAgain = () => {
    if (lastGame?.difficulty) {
      updateDifficulty(lastGame?.difficulty);
    }
    setGameState("game");
  };

  const handleBack = () => {
    setGameState("start");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-amber-300">Game Results</h1>
        <p className="text-xl text-gray-300">
          Current game and overall statistics
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-slate-800 p-8">
          <h2 className="text-center text-xl font-bold text-amber-300">
            Last Game ({lastGame?.difficulty || "N/A"})
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">Time:</span>
              <span className="text-2xl font-bold text-amber-300">
                {lastGame?.time ? formatTime(lastGame?.time) : "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">Moves:</span>
              <span className="text-2xl font-bold text-amber-300">
                {lastGame?.moves || "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">
                Minimum Moves:
              </span>
              <span className="text-2xl font-bold text-amber-300">
                {lastGame?.minimumMoves || "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-6 rounded-lg bg-slate-800 p-8">
          <h2 className="text-center text-xl font-bold text-amber-300">
            Overall Statistics
          </h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Games Played:</span>
              <span className="font-bold text-amber-300">
                {statistics.gamesPlayed}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Total Time:</span>
              <span className="font-bold text-amber-300">
                {formatTime(statistics.totalTime)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Best Time:</span>
              <span className="font-bold text-green-400">
                {statistics.bestTime ? formatTime(statistics.bestTime) : "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Total Moves:</span>
              <span className="font-bold text-amber-300">
                {statistics.totalMoves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Average Moves:</span>
              <span className="font-bold text-amber-300">
                {statistics.averageMoves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Best Moves:</span>
              <span className="font-bold text-green-400">
                {statistics.bestMoves || "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Perfect Games:</span>
              <span className="font-bold text-green-400">
                {statistics.perfectGames}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-md flex-col gap-4">
        <Button
          size="md"
          variant="primary"
          className="flex-1"
          onClick={handlePlayAgain}
        >
          Play Again
        </Button>

        <div className="flex gap-4">
          <Button
            size="sm"
            variant="secondary"
            className="flex-1"
            onClick={handleBack}
          >
            Back to Menu
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="flex-1"
            onClick={clearResults}
          >
            Clear Results
          </Button>
        </div>
      </div>
    </div>
  );
};
