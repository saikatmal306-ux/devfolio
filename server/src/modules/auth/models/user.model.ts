import bcrypt from "bcrypt";
import {
  Model,
  Schema,
  model,
} from "mongoose";

import {
  IUser,
  IUserMethods,
} from "../types/auth.types";

type UserModel = Model<
  IUser,
  Record<string, never>,
  IUserMethods
>;

const userSchema = new Schema<
  IUser,
  UserModel,
  IUserMethods
>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.method(
  "comparePassword",
  async function (
    candidatePassword: string
  ) {
    return bcrypt.compare(
      candidatePassword,
      this.password
    );
  }
);

export const User = model<
  IUser,
  UserModel
>("User", userSchema);