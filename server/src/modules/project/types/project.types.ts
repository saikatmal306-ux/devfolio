import { Types } from "mongoose";

export interface IProject {
  user: Types.ObjectId;

  title: string;

  description: string;

  techStack: string[];

  githubUrl?: string;

  liveUrl?: string;

  image?: string;

  featured: boolean;
}   