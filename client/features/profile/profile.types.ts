export interface Profile {
  _id: string;
  user: string;
  username: string;
  fullName: string;
  headline: string;
  bio: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  profileImage: string;
  resumeUrl: string;
  skills: string[];
}

export interface ProfileResponse {
  success: boolean;
  data: Profile;
}