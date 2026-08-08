import { api } from "@/lib/axios";

import { ProfileResponse } from "./profile.types";

export const getMyProfile =
  async (): Promise<ProfileResponse> => {
    const response =
      await api.get("/profile/me");

    return response.data;
  };