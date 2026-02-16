import { useModal } from "../../contexts/ModalContext";
import { formatTime } from "../../lib/utils";
import { Button } from "../Button";

/**
 * Props for the {@link GameOverModal} component.
 */
export interface GameOverModalProps {
  /** Number of disks used in the completed game. */
  difficulty: number;
  /** Total moves the player made. */
  moves: number;
  /** Elapsed time in milliseconds. */
  time: number;
  /** Callback to restart the game at the same difficulty. */
  onPlayAgain: () => void;
  /** Callback to advance to the next difficulty level. */
  onNextLevel: () => void;
}

/**
 * Modal displayed when the player completes the puzzle.
 *
 * Shows time, moves, and difficulty, with options to play again
 * or advance to the next level.
 */
const GameOverModal = ({
  difficulty,
  moves,
  time,
  onPlayAgain,
  onNextLevel,
}: GameOverModalProps) => {
  const { closeModal } = useModal();

  const handlePlayAgain = () => {
    onPlayAgain();
    closeModal();
  };

  const handleNextLevel = () => {
    onNextLevel();
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-3xl font-bold">🎉 Congratulations!</h2>

      <div className="w-full max-w-sm space-y-4 rounded-lg bg-slate-700 p-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-300">Time:</span>
          <span className="text-xl font-bold">{formatTime(time)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-300">Moves:</span>
          <span className="text-xl font-bold">{moves}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-300">Difficulty:</span>
          <span className="text-xl font-bold">{difficulty} disks</span>
        </div>
      </div>

      <div className="flex w-full max-w-sm gap-3">
        <Button
          size="lg"
          variant="secondary"
          className="flex-1"
          onClick={handlePlayAgain}
        >
          Play Again
        </Button>

        {difficulty < 7 && (
          <Button
            size="lg"
            variant="primary"
            className="flex-1"
            onClick={handleNextLevel}
          >
            Next Level
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameOverModal;
