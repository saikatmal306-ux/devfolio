import { z } from "zod";

export const createEducationSchema =
  z.object({
    institution: z.string().min(1),

    degree: z.string().min(1),

    fieldOfStudy: z.string().min(1),

    startDate: z.string(),

    endDate: z.string().optional(),

    current: z.boolean().optional(),

    description: z.string().optional(),
  });

export const updateEducationSchema =
  createEducationSchema.partial();

export type CreateEducationInput =
  z.infer<
    typeof createEducationSchema
  >;

export type UpdateEducationInput =
  z.infer<
    typeof updateEducationSchema
  >;