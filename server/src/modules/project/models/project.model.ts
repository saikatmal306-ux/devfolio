import {
  Schema,
  model,
} from "mongoose";

import { IProject } from "../types/project.types";

const projectSchema =
  new Schema<IProject>(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
        required: true,
        trim: true,
      },

      techStack: {
        type: [String],
        required: true,
      },

      githubUrl: {
        type: String,
      },

      liveUrl: {
        type: String,
      },

      image: {
        type: String,
      },

      featured: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

  export const Project = model<IProject>(
  "Project",
  projectSchema
);