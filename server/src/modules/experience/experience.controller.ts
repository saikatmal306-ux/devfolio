import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../shared/helpers/asyncHandler";

import {
  createExperienceSchema,
  updateExperienceSchema,
} from "./experience.validation";

import {
  createExperience,
  getMyExperiences,
  updateExperience,
  deleteExperience,
} from "./experience.service";

export const create =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const payload =
        createExperienceSchema.parse(
          req.body
        );

      const experience =
        await createExperience(
          req.user?.userId as string,
          payload
        );

      res.status(201).json({
        success: true,
        message:
          "Experience created successfully",
        data: experience,
      });
    }
  );

export const getMine =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const experiences =
        await getMyExperiences(
          req.user?.userId as string
        );

      res.status(200).json({
        success: true,
        data: experiences,
      });
    }
  );

export const update =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const payload =
        updateExperienceSchema.parse(
          req.body
        );

      const experience =
        await updateExperience(
          req.user?.userId as string,
          req.params.id as string,
          payload
        );

      res.status(200).json({
        success: true,
        message:
          "Experience updated successfully",
        data: experience,
      });
    }
  );

export const remove =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      await deleteExperience(
        req.user?.userId as string,
        req.params.id as string
      );

      res.status(200).json({
        success: true,
        message:
          "Experience deleted successfully",
      });
    }
  );