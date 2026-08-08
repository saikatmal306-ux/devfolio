import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema =
  loginSchema;

export type LoginFormValues =
  z.infer<typeof loginSchema>;

export type RegisterFormValues =
  z.infer<typeof registerSchema>;