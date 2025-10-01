import { useEffect, useRef } from "react";
import { Tower } from "../components";
import { Timer, type TimerRef } from "../components/Timer";
import { useTowerOfHanoi } from "../hooks/useTowerOfHanoi";
import { useResults } from "../hooks/useResults";

interface GamePageProps {
  initDifficulty?: number;
}

export const GamePage = ({ initDifficulty }: GamePageProps) => {
  const { addResult, lastGame } = useResults();

  const difficulty = initDifficulty || lastGame?.difficulty || 3;

  const {
    moves,
    towers,
    selectedTower,
    handleTowerClick,
    isWon,
    startTime,
    endTime,
  } = useTowerOfHanoi(difficulty);

  const timerRef = useRef<TimerRef>(null);

  useEffect(() => {
    if (!isWon || !timerRef.current) return;

    timerRef.current.stop();

    if (!endTime) return;

    console.log({
      difficulty,
      isCompleted: true,
      moves,
      time: endTime - startTime,
      minimumMoves: Math.pow(2, difficulty) - 1,
    });

    addResult({
      difficulty,
      isCompleted: true,
      moves,
      time: endTime - startTime,
      minimumMoves: Math.pow(2, difficulty) - 1,
    });
  }, [isWon]);

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-medium text-amber-300">
          Moves: {moves}
          {isWon && " Win!!!"}
        </span>
        <Timer ref={timerRef} />
      </div>
      <div className="flex h-[200px] w-full items-end justify-center gap-3 md:h-[300px]">
        {towers.map((tower, i) => (
          <Tower
            disks={tower}
            key={i}
            isSelected={selectedTower == i}
            onTowerClick={() => handleTowerClick(i)}
          />
        ))}
      </div>
    </div>
  );
};
