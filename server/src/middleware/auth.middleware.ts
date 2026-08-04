import {
  Request,
  Response,
  NextFunction,
} from "express";

import { AppError } from "../shared/errors/AppError";
import { verifyToken } from "../shared/utils/jwt";

export const authenticate = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new AppError(
      "Authentication required",
      401
    );
  }

  try {
    const decoded =
      verifyToken(token);

    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch {
    throw new AppError(
      "Invalid or expired token",
      401
    );
  }
};