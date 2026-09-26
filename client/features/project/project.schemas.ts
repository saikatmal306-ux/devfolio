import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z.string().min(
    10,
    "Description must be at least 10 characters"
  ),

  techStack: z.string().min(
    1,
    "Tech stack is required"
  ),

  githubUrl: z
  .string()
  .url("Please enter a valid GitHub URL")
  .optional()
  .or(z.literal("")),

  liveUrl: z
  .string()
  .url("Please enter a valid Live URL")
  .optional()
  .or(z.literal("")),

  featured: z.boolean(),
});

export type CreateProjectFormValues =
  z.infer<typeof createProjectSchema>;