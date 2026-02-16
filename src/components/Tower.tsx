import { Disk } from "./Disk";

/**
 * Props for the {@link Tower} component.
 */
interface TowerProps {
  /** Array of disk sizes currently on this tower (bottom to top). */
  disks: number[];
  /** Callback fired when the tower is clicked. */
  onTowerClick: () => void;
  /** Whether this tower is currently selected by the player. */
  isSelected: boolean;
}

/**
 * Renders a single tower peg with its disks.
 *
 * Displays a vertical stack of {@link Disk} components and a base.
 * Highlights the base when the tower is selected.
 *
 * @param props - {@link TowerProps}
 */
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
