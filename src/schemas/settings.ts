import z from "zod";

export const settingsSchema = z.object({
  difficulty: z.number().min(3).max(7),
});
