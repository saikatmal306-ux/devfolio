export interface DashboardProject {
  _id: string;
  user: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardResponse {
  success: boolean;
  data: {
    profile: {
      fullName: string;
      profileImage?: string;
      username?: string;
    };
    projects: DashboardProject[];
    experiences: unknown[];
    education: unknown[];
  };
}