import { Types } from 'mongoose';

export interface IEducation {
  user: Types.ObjectId;

  institution: string;

  degree: string;

  fieldOfStudy: string;

  startDate: Date;

  endDate?: Date;

  current: boolean;

  description?: string;
}