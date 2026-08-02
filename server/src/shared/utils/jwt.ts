import jwt from "jsonwebtoken";

import { env } from "../../config/env";

type JwtPayload = {
  userId: string;
};

export const createToken = (
  payload: JwtPayload
) => {
  return jwt.sign(
  payload,
  env.jwtSecret,
  {
    expiresIn: env.jwtExpiresIn as jwt.SignOptions["expiresIn"],
  }
);
};

export const verifyToken = (
  token: string
) => {
  return jwt.verify(
    token,
    env.jwtSecret
  ) as JwtPayload;
};