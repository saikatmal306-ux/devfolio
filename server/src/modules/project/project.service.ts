import { Project } from "./models/project.model";

import { CreateProjectInput }
from "./project.validation";

import { AppError }
from "../../shared/errors/AppError";

import { UpdateProjectInput }
from "./project.validation";

export const createProject = async (
  userId: string,
  payload: CreateProjectInput
) => {
  const project =
    await Project.create({
      user: userId,
      ...payload,
    });

  return project;
};

export const getMyProjects = async (
  userId: string
) => {
  const projects =
    await Project.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });

  return projects;
};

export const updateProject = async (
  userId: string,
  projectId: string,
  payload: UpdateProjectInput
) => {
  const project =
    await Project.findOne({
      _id: projectId,
      user: userId,
    });

  if (!project) {
    throw new AppError(
      "Project not found",
      404
    );
  }

  Object.assign(
    project,
    payload
  );

  await project.save();

  return project;
};

export const deleteProject = async (
  userId: string,
  projectId: string
) => {
  const project =
    await Project.findOneAndDelete({
      _id: projectId,
      user: userId,
    });

  if (!project) {
    throw new AppError(
      "Project not found",
      404
    );
  }

  return project;
};