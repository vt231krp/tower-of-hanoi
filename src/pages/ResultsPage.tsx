import { Button } from "../components";

export const ResultsPage = () => {
  // Mock data - replace with actual game context data
  const currentGame = {
    time: "2:34",
    moves: 15,
    minimumMoves: 7,
    difficulty: "Easy",
  };

  const totalStats = {
    gamesPlayed: 12,
    totalTime: "32:18",
    bestTime: "1:45",
    totalMoves: 180,
    averageMoves: 15,
    bestMoves: 7,
    perfectGames: 3,
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
            Last Game ({currentGame.difficulty})
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">Time:</span>
              <span className="text-2xl font-bold text-amber-300">
                {currentGame.time}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">Moves:</span>
              <span className="text-2xl font-bold text-amber-300">
                {currentGame.moves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-300">
                Minimum Moves:
              </span>
              <span className="text-2xl font-bold text-amber-300">
                {currentGame.minimumMoves}
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
                {totalStats.gamesPlayed}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Total Time:</span>
              <span className="font-bold text-amber-300">
                {totalStats.totalTime}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Best Time:</span>
              <span className="font-bold text-green-400">
                {totalStats.bestTime}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Total Moves:</span>
              <span className="font-bold text-amber-300">
                {totalStats.totalMoves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Average Moves:</span>
              <span className="font-bold text-amber-300">
                {totalStats.averageMoves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Best Moves:</span>
              <span className="font-bold text-green-400">
                {totalStats.bestMoves}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-300">Perfect Games:</span>
              <span className="font-bold text-green-400">
                {totalStats.perfectGames}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-md gap-4">
        <Button
          size="lg"
          variant="primary"
          className="flex-1"
          onClick={() => {
            /* Handle play again */
          }}
        >
          Play Again
        </Button>

        <Button
          size="lg"
          variant="secondary"
          className="flex-1"
          onClick={() => {
            /* Handle back to menu */
          }}
        >
          Back to Menu
        </Button>
      </div>
    </div>
  );
};
