import { AppError } from "../../shared/errors/AppError";

import {
  CreateEducationInput,
  UpdateEducationInput,
} from "./education.validation";

import { Education }
from "./models/education.model";

export const createEducation =
  async (
    userId: string,
    payload: CreateEducationInput
  ) => {
    return Education.create({
      user: userId,
      ...payload,
    });
  };

export const getMyEducation =
  async (userId: string) => {
    return Education.find({
      user: userId,
    }).sort({
      startDate: -1,
    });
  };

export const updateEducation =
  async (
    userId: string,
    educationId: string,
    payload: UpdateEducationInput
  ) => {
    const education =
      await Education.findOne({
        _id: educationId,
        user: userId,
      });

    if (!education) {
      throw new AppError(
        "Education not found",
        404
      );
    }

    Object.assign(
      education,
      payload
    );

    await education.save();

    return education;
  };

export const deleteEducation =
  async (
    userId: string,
    educationId: string
  ) => {
    const education =
      await Education.findOneAndDelete({
        _id: educationId,
        user: userId,
      });

    if (!education) {
      throw new AppError(
        "Education not found",
        404
      );
    }

    return education;
  };