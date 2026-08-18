export interface Experience {
  _id: string;

  company: string;

  position: string;

  startDate: string;

  endDate?: string;

  current?: boolean;

  description?: string;

  createdAt: string;

  updatedAt: string;
}

export interface ExperienceResponse {
  success: boolean;

  data: Experience[];
}