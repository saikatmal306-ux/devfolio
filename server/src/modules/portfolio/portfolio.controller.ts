import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../shared/helpers/asyncHandler";

import {
  getPortfolioByUsername,
} from "./portfolio.service";

export const getPortfolio =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const username =
        req.params.username as string;

      const portfolio =
        await getPortfolioByUsername(
          username
        );

      res.status(200).json({
        success: true,
        data: portfolio,
      });
    }
  );