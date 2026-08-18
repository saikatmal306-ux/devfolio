import {
  Request,
  Response,
} from "express";

import { asyncHandler } from "../../shared/helpers/asyncHandler";

import {
  createProfileSchema, updateProfileSchema
} from "./profile.validation";

import {
  createProfile,  getMyProfile, updateProfile, getProfileByUsername
} from "./profile.service";



export const create = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    const payload =
      createProfileSchema.parse(
        req.body
      );

    const profile =
      await createProfile(
        userId as string,
        payload
      );

    res.status(201).json({
      success: true,
      message:
        "Profile created successfully",
      data: profile,
    });
  }
);


export const me = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    const profile =
      await getMyProfile(
        userId as string
      );

    res.status(200).json({
      success: true,
      data: profile,
    });
  }
);

export const update = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    const payload =
      updateProfileSchema.parse(
        req.body
      );

    const profile =
      await updateProfile(
        userId as string,
        payload
      );

    res.status(200).json({
      success: true,
      message:
        "Profile updated successfully",
      data: profile,
    });
  }
);

export const getByUsername =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const username = req.params.username as string;

      const profile = await getProfileByUsername(username);

      res.status(200).json({
        success: true,
        data: profile,
      });
    }
  );