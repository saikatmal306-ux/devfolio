export interface Education {
  _id: string;

  institution: string;

  degree: string;

  fieldOfStudy: string;

  startDate: string;

  endDate?: string;

  current?: boolean;

  description?: string;

  createdAt: string;

  updatedAt: string;
}

export interface EducationResponse {
  success: boolean;

  data: Education[];
}