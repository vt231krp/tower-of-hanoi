import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names, resolving conflicts.
 *
 * Combines `clsx` for conditional classes with `tailwind-merge`
 * to deduplicate and resolve conflicting utilities.
 *
 * @param inputs - Class values (strings, arrays, objects).
 * @returns Merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats milliseconds into `MM:SS` string.
 *
 * @param ms - Time in milliseconds.
 * @returns Formatted time string, e.g. `"02:35"`.
 */
export const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
