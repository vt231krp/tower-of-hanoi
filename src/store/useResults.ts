import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GameResult {
  id: string;
  difficulty: number;
  moves: number;
  time: number;
  minimumMoves: number;
  isCompleted: boolean;
  timestamp: Date;
}

interface Statistics {
  gamesPlayed: number;
  totalTime: number;
  bestTime: number | null;
  totalMoves: number;
  averageMoves: number;
  bestMoves: number | null;
  perfectGames: number;
  winRate: number;
}

interface ResultsState {
  results: GameResult[];
  statistics: Statistics;
  addResult: (result: Omit<GameResult, "id" | "timestamp">) => void;
  clearResults: () => void;
  lastGame: GameResult | null;
}

const calculateStatistics = (results: GameResult[]): Statistics => {
  const completedGames = results.filter((result) => result.isCompleted);

  return {
    gamesPlayed: results.length,
    totalTime: results.reduce((sum, result) => sum + result.time, 0),
    bestTime:
      completedGames.length > 0
        ? Math.min(...completedGames.map((result) => result.time))
        : null,
    totalMoves: results.reduce((sum, result) => sum + result.moves, 0),
    averageMoves:
      results.length > 0
        ? Math.round(
            results.reduce((sum, result) => sum + result.moves, 0) /
              results.length,
          )
        : 0,
    bestMoves:
      completedGames.length > 0
        ? Math.min(...completedGames.map((result) => result.moves))
        : null,
    perfectGames: results.filter(
      (result) => result.isCompleted && result.moves === result.minimumMoves,
    ).length,
    winRate:
      results.length > 0
        ? Math.round((completedGames.length / results.length) * 100)
        : 0,
  };
};

export const useResults = create<ResultsState>()(
  persist(
    (set) => ({
      results: [],
      statistics: {
        gamesPlayed: 0,
        totalTime: 0,
        bestTime: null,
        totalMoves: 0,
        averageMoves: 0,
        bestMoves: null,
        perfectGames: 0,
        winRate: 0,
      },
      lastGame: null,

      addResult: (result) => {
        const newResult: GameResult = {
          ...result,
          id: Date.now().toString(),
          timestamp: new Date(),
        };

        set((state) => {
          const newResults = [newResult, ...state.results];
          return {
            results: newResults,
            statistics: calculateStatistics(newResults),
            lastGame: newResult,
          };
        });
      },

      clearResults: () => {
        set({
          results: [],
          statistics: calculateStatistics([]),
          lastGame: null,
        });
      },
    }),
    {
      name: "results-storage",
      partialize: (state) => ({
        results: state.results.map((result) => ({
          ...result,
          timestamp: result.timestamp.toISOString(),
        })),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const resultsWithDates = state.results.map((result: GameResult) => ({
            ...result,
            timestamp: new Date(result.timestamp),
          }));

          const statistics = calculateStatistics(resultsWithDates);
          const lastGame =
            resultsWithDates.length > 0 ? resultsWithDates[0] : null;

          state.results = resultsWithDates;
          state.statistics = statistics;
          state.lastGame = lastGame;
        }
      },
    },
  ),
);
