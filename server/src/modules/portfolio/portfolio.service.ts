import { AppError }
from "../../shared/errors/AppError";

import { Profile }
from "../profile/models/profile.model";

import { Project }
from "../project/models/project.model";

import { Experience }
from "../experience/models/experience.model";

import { Education }
from "../education/models/education.model";

export const getPortfolioByUsername =
  async (
    username: string
  ) => {
    const profile =
      await Profile.findOne({
        username,
      }).lean();

    if (!profile) {
      throw new AppError(
        "Portfolio not found",
        404
      );
    }

    const userId =
      profile.user;

    const [
      projects,
      experiences,
      education,
    ] = await Promise.all([
      Project.find({
        user: userId,
      })
        .sort({
          createdAt: -1,
        })
        .lean(),

      Experience.find({
        user: userId,
      })
        .sort({
          startDate: -1,
        })
        .lean(),

      Education.find({
        user: userId,
      })
        .sort({
          startDate: -1,
        })
        .lean(),
    ]);

    return {
      profile,
      projects,
      experiences,
      education,
    };
  };