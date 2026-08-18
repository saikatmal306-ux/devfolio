import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../shared/helpers/asyncHandler";

import {
  createProjectSchema,
  updateProjectSchema,
} from "./project.validation";

import {
  createProject,
  getMyProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsByUsername,
} from "./project.service";

export const create = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const userId =
      req.user?.userId;

    const payload =
      createProjectSchema.parse(
        req.body
      );

    const project =
      await createProject(
        userId as string,
        payload
      );

    res.status(201).json({
      success: true,
      message:
        "Project created successfully",
      data: project,
    });
  }
);

export const getMine =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const userId =
        req.user?.userId;

      const projects =
        await getMyProjects(
          userId as string
        );

      res.status(200).json({
        success: true,
        data: projects,
      });
    }
  );

  export const getOne = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const userId =
      req.user?.userId;

    const projectId =
      req.params.id as string;

    const project =
      await getProjectById(
        userId as string,
        projectId
      );

    res.status(200).json({
      success: true,
      data: project,
    });
  }
);

  export const update = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const userId =
      req.user?.userId;

    const projectId =
      req.params.id as string;

    const payload =
      updateProjectSchema.parse(
        req.body
      );

    const project =
      await updateProject(
        userId as string,
        projectId,
        payload
      );

    res.status(200).json({
      success: true,
      message:
        "Project updated successfully",
      data: project,
    });
  }
);

export const getByUsername =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const username =
        req.params.username as string;

      const projects =
        await getProjectsByUsername(
          username
        );

      res.status(200).json({
        success: true,
        data: projects,
      });
    }
  );

export const remove = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const userId =
      req.user?.userId;

    const projectId =
      req.params.id as string;

    await deleteProject(
      userId as string,
      projectId
    );

    res.status(200).json({
      success: true,
      message:
        "Project deleted successfully",
    });
  }
);