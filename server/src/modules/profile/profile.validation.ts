import { z } from "zod";

export const createProfileSchema = z.object({

  username: z
  .string()
  .min(3)
  .max(30),

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
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (value) =>
      !value ||
      /^https?:\/\/.+/.test(value),
    {
      message:
        "Please provide a valid website URL",
    }
  ),

github: z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (value) =>
      !value ||
      /^https?:\/\/.+/.test(value),
    {
      message:
        "Please provide a valid GitHub URL",
    }
  ),

linkedin: z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (value) =>
      !value ||
      /^https?:\/\/.+/.test(value),
    {
      message:
        "Please provide a valid LinkedIn URL",
    }
  ),

  skills: z
    .array(z.string().trim())
    .min(1, "At least one skill is required"),

  profileImage: z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (value) =>
      !value ||
      /^https?:\/\/.+/.test(value),
    {
      message: "Invalid profile image URL",
    }
  ),

  resumeUrl: z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine(
    (value) =>
      !value ||
      /^https?:\/\/.+/.test(value),
    {
      message: "Invalid resume URL",
    }
  ),
});

export type CreateProfileInput =
  z.infer<typeof createProfileSchema>;


  export const updateProfileSchema =
  createProfileSchema.partial();

export type UpdateProfileInput =
  z.infer<typeof updateProfileSchema>;