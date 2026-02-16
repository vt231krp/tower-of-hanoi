import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * A single game result entry.
 */
interface GameResult {
  /** Unique identifier (timestamp-based). */
  id: string;
  /** Number of disks used in the game. */
  difficulty: number;
  /** Total moves made by the player. */
  moves: number;
  /** Elapsed time in milliseconds. */
  time: number;
  /** Theoretical minimum moves for this difficulty ($2^n - 1$). */
  minimumMoves: number;
  /** Whether the puzzle was completed. */
  isCompleted: boolean;
  /** When the game was played. */
  timestamp: Date;
}

/**
 * Aggregated statistics derived from all game results.
 */
interface Statistics {
  /** Total number of games played. */
  gamesPlayed: number;
  /** Sum of all game times in milliseconds. */
  totalTime: number;
  /** Fastest completion time, or `null` if no games completed. */
  bestTime: number | null;
  /** Sum of all moves across games. */
  totalMoves: number;
  /** Average moves per game. */
  averageMoves: number;
  /** Fewest moves in a completed game, or `null`. */
  bestMoves: number | null;
  /** Count of games completed in the minimum possible moves. */
  perfectGames: number;
  /** Percentage of games completed (0–100). */
  winRate: number;
}

interface ResultsState {
  results: GameResult[];
  statistics: Statistics;
  addResult: (result: Omit<GameResult, "id" | "timestamp">) => void;
  clearResults: () => void;
  lastGame: GameResult | null;
}

/**
 * Computes aggregated {@link Statistics} from an array of {@link GameResult}.
 */
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

/**
 * Zustand store for game results and statistics, persisted to `localStorage`.
 *
 * Provides actions to add results, clear history, and access computed statistics.
 */
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
