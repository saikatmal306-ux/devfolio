import {
  Schema,
  model,
} from "mongoose";

import { IProfile } from "../types/profile.types";

const profileSchema = new Schema<IProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    headline: {
      type: String,
      required: true,
      trim: true,
    },

    bio: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    website: {
      type: String,
      trim: true,
    },

    github: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      trim: true,
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    profileImage: {
      type: String,
      trim: true,
    },

    resumeUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Profile = model<IProfile>(
  "Profile",
  profileSchema
);