import { z } from "zod";

export const createProjectSchema =
  z.object({
    title: z
      .string()
      .trim()
      .min(3, "Title is required")
      .max(
        100,
        "Title cannot exceed 100 characters"
      ),

    description: z
      .string()
      .trim()
      .min(
        10,
        "Description must be at least 10 characters"
      )
      .max(
        1000,
        "Description cannot exceed 1000 characters"
      ),

    techStack: z
      .array(z.string().trim())
      .min(
        1,
        "At least one technology is required"
      ),

    githubUrl: z
      .url("Invalid GitHub URL")
      .optional(),

    liveUrl: z
      .url("Invalid Live URL")
      .optional(),

    image: z
      .url("Invalid image URL")
      .optional(),

    featured: z
      .boolean()
      .optional(),
  });


  export type CreateProjectInput =
  z.infer<
    typeof createProjectSchema
  >;

  export const updateProjectSchema =
  createProjectSchema.partial();

export type UpdateProjectInput =
  z.infer<
    typeof updateProjectSchema
  >;



