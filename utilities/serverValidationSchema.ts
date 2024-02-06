import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string(),
  username: z.string().email(),
  password: z.string().min(6),
});
