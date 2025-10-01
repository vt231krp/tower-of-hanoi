import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./Button";
import { settingsSchema } from "../schemas/settings";
import { useSettings } from "../contexts/SettingsContext";

type GameSetupData = z.infer<typeof settingsSchema>;

interface GameSetupFormProps {
  initialValues?: Partial<GameSetupData>;
}

export const GameSetupForm = ({ initialValues }: GameSetupFormProps) => {
  const { settings, updateSettings } = useSettings();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<GameSetupData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      difficulty: 3,
      ...initialValues,
    },
  });

  useEffect(() => {
    reset({ difficulty: settings.difficulty, ...initialValues });
  }, [settings, reset, initialValues]);

  const selectedDifficulty = watch("difficulty");

  const difficulties = [
    { value: 3, label: "Easy", description: "3 disks" },
    { value: 4, label: "Medium", description: "4 disks" },
    { value: 5, label: "Hard", description: "5 disks" },
    { value: 6, label: "Expert", description: "6 disks" },
    { value: 7, label: "Master", description: "7 disks" },
  ];

  const increaseDifficulty = () => {
    const newDifficulty = Math.min(selectedDifficulty + 1, 7);
    setValue("difficulty", newDifficulty);
  };

  const decreaseDifficulty = () => {
    const newDifficulty = Math.max(selectedDifficulty - 1, 3);
    setValue("difficulty", newDifficulty);
  };

  const handleFormSubmit = (data: GameSetupData) => {
    updateSettings(data);
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-lg bg-slate-800 p-8">
      <h2 className="text-center text-2xl font-bold text-amber-300">
        Game Setup
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            Number of Disks
          </label>

          <div className="flex items-center justify-between rounded-lg bg-slate-700 p-4">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={decreaseDifficulty}
              disabled={selectedDifficulty <= 3}
            >
              -
            </Button>

            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300">
                {selectedDifficulty}
              </div>
              <div className="text-sm text-gray-400">disks</div>
            </div>

            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={increaseDifficulty}
              disabled={selectedDifficulty >= 7}
            >
              +
            </Button>
          </div>

          <input
            {...register("difficulty")}
            type="hidden"
            value={selectedDifficulty}
          />

          {errors.difficulty && (
            <p className="text-sm text-red-400">{errors.difficulty.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">
            Quick Select
          </label>

          <div className="grid grid-cols-2 gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.value}
                type="button"
                onClick={() => setValue("difficulty", difficulty.value)}
                className={`rounded-lg border-2 p-3 text-sm transition-all ${
                  selectedDifficulty === difficulty.value
                    ? "border-amber-400 bg-amber-400/10 text-amber-300"
                    : "border-slate-600 bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                <div className="font-medium">{difficulty.label}</div>
                <div className="text-xs opacity-80">
                  {difficulty.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" size="lg" variant="primary" className="w-full">
          Save
        </Button>
      </form>
    </div>
  );
};
