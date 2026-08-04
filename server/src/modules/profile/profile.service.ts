import { Profile } from "./models/profile.model";

import { AppError } from "../../shared/errors/AppError";

import { CreateProfileInput, UpdateProfileInput } from "./profile.validation";


export const createProfile = async (
  userId: string,
  payload: CreateProfileInput
) => {
  const existingProfile =
    await Profile.findOne({
      user: userId,
    });

  if (existingProfile) {
    throw new AppError(
      "Profile already exists",
      409
    );
  }

  const profile = await Profile.create({
    user: userId,
    ...payload,
  });

  return profile;
};

export const getMyProfile = async (
  userId: string
) => {
  const profile =
    await Profile.findOne({
      user: userId,
    });

  if (!profile) {
    throw new AppError(
      "Profile not found",
      404
    );
  }

  return profile;
};

export const updateProfile = async (
  userId: string,
  payload: UpdateProfileInput
) => {
  const profile =
    await Profile.findOneAndUpdate(
      {
        user: userId,
      },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );

  if (!profile) {
    throw new AppError(
      "Profile not found",
      404
    );
  }

  return profile;
};