import z from "zod";
import type { settingsSchema } from "../schemas/settings";

/** Possible application states / views. */
export type GameState = "start" | "game" | "results" | "settings";

/** Game settings derived from the settings schema. */
export type Settings = z.infer<typeof settingsSchema>;
