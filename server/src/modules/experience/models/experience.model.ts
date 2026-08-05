import {
  Schema,
  model,
} from "mongoose";

import { IExperience }
from "../types/experience.types";

const experienceSchema =
  new Schema<IExperience>(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      company: {
        type: String,
        required: true,
        trim: true,
      },

      position: {
        type: String,
        required: true,
        trim: true,
      },

      startDate: {
        type: Date,
        required: true,
      },

      endDate: {
        type: Date,
      },

      current: {
        type: Boolean,
        default: false,
      },

      description: {
        type: String,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

export const Experience =
  model<IExperience>(
    "Experience",
    experienceSchema
  );