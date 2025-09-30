import { Disk } from "./Disk";

interface TowerProps {
  disks: number[];
  onTowerClick: () => void;
  isSelected: boolean;
}

export const Tower = ({ disks, onTowerClick, isSelected }: TowerProps) => {
  return (
    <div
      className="flex h-full w-32 cursor-pointer flex-col justify-end"
      onClick={onTowerClick}
    >
      <div className="flex flex-col-reverse items-center">
        {disks.map((size, i) => (
          <Disk key={i} size={size} />
        ))}
      </div>
      <div
        className={`h-3 rounded-xl bg-slate-700 ${isSelected ? "border-3 border-blue-300" : ""}`}
      ></div>
    </div>
  );
};
