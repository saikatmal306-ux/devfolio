import { api } from "@/lib/axios";

import {
  CreateProjectInput,
  UpdateProjectInput,
  ProjectResponse,
  ProjectsResponse,
} from "./project.types";

export const getProjects = async (): Promise<ProjectsResponse> => {
  const { data } = await api.get("/projects");
  return data;
};

export const getProject = async (
  id: string
): Promise<ProjectResponse> => {
  const { data } = await api.get(`/projects/${id}`);
  return data;
};

export const createProject = async (
  payload: CreateProjectInput
): Promise<ProjectResponse> => {
  const { data } = await api.post(
    "/projects",
    payload
  );

  return data;
};

export const updateProject = async (
  id: string,
  payload: UpdateProjectInput
): Promise<ProjectResponse> => {
  const { data } = await api.patch(
    `/projects/${id}`,
    payload
  );

  return data;
};

export const deleteProject = async (
  id: string
): Promise<{
  success: boolean;
  message: string;
}> => {
  const { data } = await api.delete(
    `/projects/${id}`
  );

  return data;
};

export const getProjectsByUsername = async (
  username: string
) => {
  const { data } = await api.get(
    `/projects/user/${username}`
  );

  return data;
};