import z from "zod";
import type { settingsSchema } from "../schemas/settings";

export type GameState = "start" | "game" | "results" | "settings";

export type Settings = z.infer<typeof settingsSchema>;
