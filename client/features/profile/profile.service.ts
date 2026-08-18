import { api } from "@/lib/axios";

import { ProfileResponse } from "./profile.types";

export const getMyProfile =
  async (): Promise<ProfileResponse> => {
    const response =
      await api.get("/profile/me");

    return response.data;
  };

  export const updateMyProfile = async (
  payload: Partial<ProfileResponse["data"]>
): Promise<ProfileResponse> => {
  const response = await api.patch(
    "/profile/me",
    payload
  );

  return response.data;
};

export const getProfileByUsername = async (
  username: string
): Promise<ProfileResponse> => {
  const response = await api.get(
    `/profile/${username}`
  );

  return response.data;
};

export const getPublicProfile = async (
  username: string
): Promise<ProfileResponse> => {
  const response = await api.get(
    `/profile/${username}`
  );

  return response.data;
}; 