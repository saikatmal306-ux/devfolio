import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../shared/helpers/asyncHandler";

import { AppError }
from "../../shared/errors/AppError";

import { uploadFile }
from "./upload.service";

export const uploadImage =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      if (!req.file) {
        throw new AppError(
          "File is required",
          400
        );
      }

      const result =
        await uploadFile(
          req.file,
          "devfolio/profile-images"
        );

      res.status(200).json({
        success: true,
        data: {
          url:
            result.secure_url,
        },
      });
    }
  );

export const uploadResume =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      if (!req.file) {
        throw new AppError(
          "File is required",
          400
        );
      }

      const result =
        await uploadFile(
          req.file,
          "devfolio/resumes"
        );

      res.status(200).json({
        success: true,
        data: {
          url:
            result.secure_url,
        },
      });
    }
  );