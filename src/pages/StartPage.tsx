import { GameSetupForm } from "../components";

export const StartPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-amber-300">
          Tower of Hanoi
        </h1>
        <p className="text-xl text-gray-400">
          Move all disks to the rightmost tower
        </p>
      </div>

      <div className="w-full max-w-md space-y-5">
        <GameSetupForm />
      </div>
    </div>
  );
};
