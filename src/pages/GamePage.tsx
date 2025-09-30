import { useState } from "react";
import { Tower } from "../components";

export const GamePage = () => {
  const [towers, setTowers] = useState<number[][]>([
    [7, 6, 5, 4, 3, 2, 1],
    [],
    [],
  ]);
  const [selectedTower, setSelectedTower] = useState<number | null>(null);
  const [totalSteps, setTotalSteps] = useState(0);

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <span className="text-2xl font-medium text-amber-300">
        Steps: {totalSteps}
      </span>
      <div className="flex h-[200px] w-full items-end justify-center gap-3 md:h-[300px]">
        {towers.map((tower, i) => (
          <Tower
            disks={tower}
            key={i}
            isSelected={selectedTower == i}
            onTowerClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
