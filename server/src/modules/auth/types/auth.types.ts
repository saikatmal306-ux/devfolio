export type UserRole = "user" | "admin";

export interface IUser {
  email: string;
  password: string;
  role: UserRole;
  isVerified: boolean;
}

export interface IUserMethods {
  comparePassword(
    candidatePassword: string
  ): Promise<boolean>;
}