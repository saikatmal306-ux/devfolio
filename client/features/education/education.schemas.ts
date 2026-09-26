import { z } from "zod";

export const createEducationSchema =
  z.object({
    institution: z
      .string()
      .min(
        2,
        "Institution is required"
      ),

    degree: z
      .string()
      .min(2, "Degree is required"),

    fieldOfStudy: z
      .string()
      .min(
        2,
        "Field of study is required"
      ),

    startDate: z
      .string()
      .min(
        1,
        "Start date is required"
      ),

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

export type EducationFormValues =
  z.infer<
    typeof createEducationSchema
  >;