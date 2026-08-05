import { AppError } from "../../shared/errors/AppError";

import {
  CreateExperienceInput,
  UpdateExperienceInput,
} from "./experience.validation";

import { Experience } from "./models/experience.model";

export const createExperience = async (
  userId: string,
  payload: CreateExperienceInput
) => {
  const experience =
    await Experience.create({
      user: userId,
      ...payload,
    });

  return experience;
};

export const getMyExperiences =
  async (userId: string) => {
    return Experience.find({
      user: userId,
    }).sort({
      startDate: -1,
    });
  };

export const updateExperience =
  async (
    userId: string,
    experienceId: string,
    payload: UpdateExperienceInput
  ) => {
    const experience =
      await Experience.findOne({
        _id: experienceId,
        user: userId,
      });

    if (!experience) {
      throw new AppError(
        "Experience not found",
        404
      );
    }

    Object.assign(
      experience,
      payload
    );

    await experience.save();

    return experience;
  };

export const deleteExperience =
  async (
    userId: string,
    experienceId: string
  ) => {
    const experience =
      await Experience.findOneAndDelete({
        _id: experienceId,
        user: userId,
      });

    if (!experience) {
      throw new AppError(
        "Experience not found",
        404
      );
    }

    return experience;
  };