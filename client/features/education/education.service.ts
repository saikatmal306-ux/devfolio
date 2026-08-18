import { api } from "@/lib/axios";

import {
  Education,
  EducationResponse,
} from "./education.types";

export const getEducation =
  async (): Promise<EducationResponse> => {
    const response =
      await api.get("/education");

    return response.data;
  };

export const createEducation =
  async (
    payload: Partial<Education>
  ) => {
    const response =
      await api.post(
        "/education",
        payload
      );

    return response.data;
  };

export const updateEducation =
  async (
    id: string,
    payload: Partial<Education>
  ) => {
    const response =
      await api.patch(
        `/education/${id}`,
        payload
      );

    return response.data;
  };

export const deleteEducation =
  async (id: string) => {
    const response =
      await api.delete(
        `/education/${id}`
      );

    return response.data;
  };