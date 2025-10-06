import { useEffect, useRef } from "react";
import { Tower, Button } from "../components";
import { Timer, type TimerRef } from "../components/Timer";
import { useTowerOfHanoi } from "../hooks/useTowerOfHanoi";
import { useResults } from "../hooks/useResults";
import { useSettings } from "../contexts/SettingsContext";
import { useModal } from "../contexts/ModalContext";

export const GamePage = () => {
  const { addResult } = useResults();
  const { difficulty, updateDifficulty } = useSettings();
  const { openModal } = useModal();
  const timerRef = useRef<TimerRef>(null);

  const {
    moves,
    towers,
    selectedTower,
    handleTowerClick,
    resetGame,
    isWon,
    startTime,
    endTime,
  } = useTowerOfHanoi(difficulty);

  const handlePlayAgain = () => {
    resetGame(difficulty);
    timerRef.current?.reset();
  };

  const handleNextLevel = () => {
    const nextDifficulty = Math.min(difficulty + 1, 7);
    updateDifficulty(nextDifficulty);
    resetGame(nextDifficulty);
    timerRef.current?.reset();
  };

  useEffect(() => {
    if (!isWon || !endTime || !timerRef.current) return;

    timerRef.current.stop();
    const gameTime = endTime - startTime;

    addResult({
      difficulty,
      isCompleted: true,
      moves,
      time: gameTime,
      minimumMoves: Math.pow(2, difficulty) - 1,
    });

    openModal("gameOver", {
      difficulty,
      moves,
      time: gameTime,
      onPlayAgain: handlePlayAgain,
      onNextLevel: handleNextLevel,
    });
  }, [isWon, endTime]);

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-medium text-amber-300">
            Moves: {moves}
          </span>
          <span className="text-lg text-gray-400">
            ( Min: {Math.pow(2, difficulty) - 1})
          </span>
        </div>
        <Timer ref={timerRef} />
      </div>

      <div className="flex h-[200px] w-full items-end justify-center gap-3 md:h-[300px]">
        {towers.map((tower, i) => (
          <Tower
            disks={tower}
            key={i}
            isSelected={selectedTower === i}
            onTowerClick={() => handleTowerClick(i)}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <Button size="lg" variant="secondary" onClick={handlePlayAgain}>
          🔄 Play Again
        </Button>
      </div>
    </div>
  );
};
