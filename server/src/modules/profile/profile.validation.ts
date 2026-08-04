import { z } from "zod";

export const createProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),

  headline: z
    .string()
    .trim()
    .min(2, "Headline must be at least 2 characters")
    .max(150, "Headline cannot exceed 150 characters"),

  bio: z
    .string()
    .trim()
    .min(10, "Bio must be at least 10 characters")
    .max(1000, "Bio cannot exceed 1000 characters"),

  location: z
    .string()
    .trim()
    .max(100)
    .optional(),

  website: z
    .url("Please provide a valid website URL")
    .optional(),

  github: z
    .url("Please provide a valid GitHub URL")
    .optional(),

  linkedin: z
    .url("Please provide a valid LinkedIn URL")
    .optional(),

  skills: z
    .array(z.string().trim())
    .min(1, "At least one skill is required"),
});

export type CreateProfileInput =
  z.infer<typeof createProfileSchema>;


  export const updateProfileSchema =
  createProfileSchema.partial();

export type UpdateProfileInput =
  z.infer<typeof updateProfileSchema>;