import { useCallback, useEffect, useState } from "react";

export const useTowerOfHanoi = (initialDiskCount: number) => {
  const [numDisks, setNumDisks] = useState<number>(initialDiskCount);
  const [towers, setTowers] = useState<number[][]>([[], [], []]);
  const [selectedTower, setSelectedTower] = useState<number | null>(null);
  const [moves, setMoves] = useState<number>(0);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);

  const resetGame = useCallback((diskCount: number) => {
    const initialTowers: number[][] = [[], [], []];
    initialTowers[0] = Array.from(
      { length: diskCount },
      (_, i) => diskCount - i,
    );
    setTowers(initialTowers);
    setMoves(0);
    setSelectedTower(null);
    setIsWon(false);
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    resetGame(numDisks);
  }, [numDisks, resetGame]);

  const checkWinCondition = useCallback(
    (currentTowers: number[][]) => {
      if (
        currentTowers[0].length === 0 &&
        currentTowers[2].length === numDisks
      ) {
        setIsWon(true);
        setEndTime(Date.now());
      }
    },
    [numDisks],
  );

  const handleTowerClick = (towerIndex: number) => {
    if (isWon) return;

    if (selectedTower === null) {
      if (towers[towerIndex].length > 0) {
        setSelectedTower(towerIndex);
      }
    } else {
      if (selectedTower === towerIndex) {
        setSelectedTower(null);
        return;
      }

      const sourceTower = towers[selectedTower];
      const destTower = towers[towerIndex];
      const diskToMove = sourceTower[sourceTower.length - 1];

      if (
        destTower.length === 0 ||
        diskToMove < destTower[destTower.length - 1]
      ) {
        const newTowers = towers.map((t) => [...t]);
        newTowers[selectedTower].pop();
        newTowers[towerIndex].push(diskToMove);
        setTowers(newTowers);
        setMoves((prev) => prev + 1);
        checkWinCondition(newTowers);
      }
      setSelectedTower(null);
    }
  };

  return {
    moves,
    selectedTower,
    towers,
    handleTowerClick,
    resetGame,
    isWon,
    startTime,
    endTime,
  };
};
