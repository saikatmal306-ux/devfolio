import { getMyProfile } from "@/features/profile/profile.service";
import { getProjects } from "@/features/project/project.service";
import { getExperiences } from "@/features/experience/experience.service";
import { getEducation } from "@/features/education/education.service";

export const getDashboardStats = async () => {
  const profileResponse = await getMyProfile();

  const projectsResponse = await getProjects();

  const experiencesResponse = await getExperiences();

  const educationsResponse = await getEducation();

  const profile = profileResponse.data;

  const profileFields = [
    profile.fullName,
    profile.username,
    profile.headline,
    profile.bio,
    profile.location,
    profile.website,
    profile.github,
    profile.linkedin,
    profile.skills?.length > 0,
    profile.profileImage,
    profile.resumeUrl,
  ];

  const completedFields = profileFields.filter(Boolean).length;

  const profileCompletion = Math.round(
    (completedFields / profileFields.length) * 100
  );

  return {
    success: true,

    data: {
      projects: projectsResponse.data.length,

      experiences: experiencesResponse.data.length,

      educations: educationsResponse.data.length,

      profileCompletion,
    },
  };
};