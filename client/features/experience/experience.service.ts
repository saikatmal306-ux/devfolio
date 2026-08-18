import { api } from "@/lib/axios";

import {
  Experience,
  ExperienceResponse,
} from "./experience.types";

export const getExperiences =
  async (): Promise<ExperienceResponse> => {
    const response =
      await api.get("/experiences");

    return response.data;
  };

export const createExperience =
  async (
    payload: Partial<Experience>
  ) => {
    const response =
      await api.post(
        "/experiences",
        payload
      );

    return response.data;
  };

export const updateExperience =
  async (
    id: string,
    payload: Partial<Experience>
  ) => {
    const response =
      await api.patch(
        `/experiences/${id}`,
        payload
      );

    return response.data;
  };

export const deleteExperience =
  async (id: string) => {
    const response =
      await api.delete(
        `/experiences/${id}`
      );

    return response.data;
  };