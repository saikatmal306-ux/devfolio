import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../shared/helpers/asyncHandler";

import {
  createEducationSchema,
  updateEducationSchema,
} from "./education.validation";

import {
  createEducation,
  getMyEducation,
  updateEducation,
  deleteEducation,
} from "./education.service";

export const create =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const payload =
        createEducationSchema.parse(
          req.body
        );

      const Education =
        await createEducation(
          req.user?.userId as string,
          payload
        );

      res.status(201).json({
        success: true,
        message:
          "Education created successfully",
        data: Education,
      });
    }
  );

export const getMine =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const Educations =
        await getMyEducation(
          req.user?.userId as string
        );

      res.status(200).json({
        success: true,
        data: Educations,
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
        updateEducationSchema.parse(
          req.body
        );

      const Education =
        await updateEducation(
          req.user?.userId as string,
          req.params.id as string,
          payload
        );

      res.status(200).json({
        success: true,
        message:
          "Education updated successfully",
        data: Education,
      });
    }
  );

export const remove =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      await deleteEducation(
        req.user?.userId as string,
        req.params.id as string
      );

      res.status(200).json({
        success: true,
        message:
          "Education deleted successfully",
      });
    }
  );