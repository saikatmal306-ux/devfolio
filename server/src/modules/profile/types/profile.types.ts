import { Types } from "mongoose";

export interface IProfile {
  user: Types.ObjectId;

  fullName: string;

  headline: string;

  bio: string;

  location?: string;

  website?: string;

  github?: string;

  linkedin?: string;

  skills: string[];
}