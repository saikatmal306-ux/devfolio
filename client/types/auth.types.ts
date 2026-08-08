export interface RegisterPayload {
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  role: string;
  isVerified: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  isVerified: boolean;
}

export interface CurrentUserResponse {
  success: boolean;
  data: AuthUser;
}