import { useState, useEffect } from "react";

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

interface UseResultsReturn {
  results: GameResult[];
  statistics: Statistics;
  addResult: (result: Omit<GameResult, "id" | "timestamp">) => void;
  clearResults: () => void;
  lastGame: GameResult | null;
}

const STORAGE_KEY = "tower-of-hanoi-results";

export const useResults = (): UseResultsReturn => {
  const [results, setResults] = useState<GameResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedResults = localStorage.getItem(STORAGE_KEY);
    if (savedResults) {
      try {
        const parsed = JSON.parse(savedResults);
        const resultsWithDates = parsed.map((result: GameResult) => ({
          ...result,
          timestamp: new Date(result.timestamp),
        }));
        setResults(resultsWithDates);
      } catch (error) {
        console.error("Failed to load results from localStorage:", error);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
  }, [isLoading, results]);

  const addResult = (result: Omit<GameResult, "id" | "timestamp">) => {
    const newResult: GameResult = {
      ...result,
      id: Date.now().toString(),
      timestamp: new Date(),
    };

    setResults((prevResults) => [newResult, ...prevResults]);
  };

  const clearResults = () => {
    setResults([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const statistics: Statistics = {
    gamesPlayed: results.length,
    totalTime: results.reduce((sum, result) => sum + result.time, 0),
    bestTime:
      results.length > 0
        ? Math.min(...results.map((result) => result.time))
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
      results.length > 0
        ? Math.min(...results.map((result) => result.moves))
        : null,
    perfectGames: results.filter(
      (result) => result.moves === result.minimumMoves,
    ).length,
    winRate:
      results.length > 0
        ? Math.round(
            (results.filter((result) => result.isCompleted).length /
              results.length) *
              100,
          )
        : 0,
  };

  const lastGame = results.length > 0 ? results[0] : null;

  return {
    results,
    statistics,
    addResult,
    clearResults,
    lastGame,
  };
};
