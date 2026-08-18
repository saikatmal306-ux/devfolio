import { getMyProfile } from "@/features/profile/profile.service";
import { getProjects } from "@/features/project/project.service";
import { getExperiences } from "@/features/experience/experience.service";
import { getEducation } from "@/features/education/education.service";

export const getDashboardStats = async () => {
  const profile = await getMyProfile();

  const projectsResponse = await getProjects();

  const experiencesResponse = await getExperiences();

  const educationsResponse = await getEducation();

  return {
    success: true,

    data: {
      projects: projectsResponse.data.length,

      experiences: experiencesResponse.data.length,

      educations: educationsResponse.data.length,

      profileCompletion: 100,
    },
  };
};