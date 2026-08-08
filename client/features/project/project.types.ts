export interface Project {
  _id: string;
  user: string;

  title: string;
  description: string;

  techStack: string[];

  githubUrl?: string;
  liveUrl?: string;

  image?: string;

  featured: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectInput {
  title: string;
  description: string;
  techStack: string[];

  githubUrl?: string;
  liveUrl?: string;

  image?: string;

  featured?: boolean;
}

export type UpdateProjectInput = Partial<CreateProjectInput>;

export interface ProjectResponse {
  success: boolean;
  message?: string;
  data: Project;
}

export interface ProjectsResponse {
  success: boolean;
  data: Project[];
}