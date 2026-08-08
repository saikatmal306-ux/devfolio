import { getMyProfile } from "@/features/profile/profile.service";

export const getDashboardStats =
  async () => {
    const profile =
      await getMyProfile();

    return {
      success: true,

      data: {
        projects: 1,

        experiences: 0,

        educations: 0,

        profileCompletion: 100,
      },
    };
  };