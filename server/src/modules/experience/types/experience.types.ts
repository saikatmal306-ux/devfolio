import { Types } from 'mongoose';

export interface IExperience {
  user: Types.ObjectId;

  company: string;

  position: string;

  startDate: Date;

  endDate?: Date;

  current: boolean;

  description?: string;
}