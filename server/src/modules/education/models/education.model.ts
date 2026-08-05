import {
  Schema,
  model,
} from "mongoose";

import { IEducation }
from "../types/education.types";

const educationSchema =
  new Schema<IEducation>(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      institution: {
        type: String,
        required: true,
        trim: true,
      },

      degree: {
        type: String,
        required: true,
        trim: true,
      },

      fieldOfStudy: {
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

export const Education =
  model<IEducation>(
    "Education",
    educationSchema
  );