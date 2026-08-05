import { z } from "zod";

export const createExperienceSchema =
  z.object({
    company: z
      .string()
      .min(1),

    position: z
      .string()
      .min(1),

    startDate: z.string(),

    endDate: z
      .string()
      .optional(),

    current: z
      .boolean()
      .optional(),

    description: z
      .string()
      .optional(),
  });

export const updateExperienceSchema =
  createExperienceSchema.partial();

export type CreateExperienceInput =
  z.infer<
    typeof createExperienceSchema
  >;

export type UpdateExperienceInput =
  z.infer<
    typeof updateExperienceSchema
  >;