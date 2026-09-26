import { z } from "zod";

export const createExperienceSchema =
  z.object({
    company: z
      .string()
      .min(2, "Company is required"),

    position: z
      .string()
      .min(2, "Position is required"),

    startDate: z
      .string()
      .min(1, "Start date is required"),

    endDate: z.string().optional(),

    current: z.boolean(),

    description: z
  .string()
  .max(
    500,
    "Description cannot exceed 500 characters"
  )
  .optional(),
  });

export type ExperienceFormValues =
  z.infer<
    typeof createExperienceSchema
  >;