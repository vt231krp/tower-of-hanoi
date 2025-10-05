import { GameSetupForm } from "../components";
import { Button } from "../components";
import { useGameContext } from "../contexts/GameContext";
import { useSettings } from "../contexts/SettingsContext";

export const SettingsPage = () => {
  const { setGameState } = useGameContext();
  const { resetSettings } = useSettings();

  const handleReset = () => {
    resetSettings();
  };

  const handleBack = () => {
    setGameState("start");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
      <div className="w-full max-w-md space-y-5">
        <GameSetupForm />

        <div className="flex w-full gap-4">
          <Button
            size="sm"
            variant="secondary"
            className="flex-1"
            onClick={handleBack}
          >
            Back to Menu
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="flex-1"
            onClick={handleReset}
          >
            Reset to Defaults
          </Button>
        </div>
      </div>
    </div>
  );
};
