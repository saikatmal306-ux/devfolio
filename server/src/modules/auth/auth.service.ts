import { User } from "./models/user.model";
import { RegisterInput } from "./auth.validation";
import { AppError } from "../../shared/errors/AppError";
import { LoginInput } from "./auth.validation";
import { createToken } from "../../shared/utils/jwt";

export const registerUser = async (
  payload: RegisterInput
) => {
  const existingUser = await User.findOne({
    email: payload.email,
  });

  if (existingUser) {
    throw new AppError(
      "Email already exists",
      409
    );
  }

  const user = await User.create({
    email: payload.email,
    password: payload.password,
  });

  return user;
};

export const loginUser = async (
  payload: LoginInput
) => {
  const user = await User.findOne({
  email: payload.email,
}).select("+password");;

  if (!user) {
    throw new AppError(
      "Invalid email or password",
      401
    );
  }

  const isPasswordValid =
    await user.comparePassword(
      payload.password
    );

  if (!isPasswordValid) {
    throw new AppError(
      "Invalid email or password",
      401
    );
  }

  const token = createToken({
    userId: user._id.toString(),
  });

  return {
    token,
    user,
  };
};

export const getCurrentUser = async (
  userId: string
) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(
      "User not found",
      404
    );
  }

  return user;
};

export const logoutUser = () => {
  return {
    success: true,
    message: "Logged out successfully",
  };
};