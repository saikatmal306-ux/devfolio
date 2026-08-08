import { Request, Response } from "express";
import { asyncHandler } from "../../shared/helpers/asyncHandler";

import { registerSchema, loginSchema, } from "./auth.validation";

import { registerUser, loginUser, getCurrentUser, logoutUser } from "./auth.service";

export const register = asyncHandler(
  async (req: Request, res: Response) => {
    const payload = registerSchema.parse(req.body);

    const user = await registerUser(payload);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        email: user.email,
      },
    });
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response) => {
    const payload = loginSchema.parse(
      req.body
    );

    const result =
      await loginUser(payload);

    res.cookie(
      "token",
      result.token,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }
);

export const me = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    const user = await getCurrentUser(
      userId as string
    );

    res.status(200).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  }
);

export const logout = (
  _req: Request,
  res: Response
) => {
  res.clearCookie("token");

  const result = logoutUser();

  res.status(200).json(result);
};