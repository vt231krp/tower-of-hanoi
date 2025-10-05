import { Link } from "react-router";
import { GameSetupForm } from "../components";
import { Button } from "../components";
import { useSettings } from "../store/useSettings";

export const SettingsPage = () => {
  const { resetSettings } = useSettings();

  const handleReset = () => {
    resetSettings();
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
      <div className="w-full max-w-md space-y-5">
        <GameSetupForm />

        <div className="flex w-full gap-4">
          <Button size="sm" variant="secondary" className="flex-1" asChild>
            <Link to="/">Back to Start</Link>
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
