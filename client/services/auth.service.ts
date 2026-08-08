import { api } from "@/lib/axios";

import {
  LoginPayload,
  RegisterPayload,
} from "@/types/auth.types";

export const registerUser = (
  payload: RegisterPayload
) => {
  return api.post(
    "/auth/register",
    payload
  );
};

export const loginUser = (
  payload: LoginPayload
) => {
  return api.post(
    "/auth/login",
    payload
  );
};

export const logoutUser = async () => {
  const response = await api.post(
    "/auth/logout"
  );

  return response.data;
};

export const getCurrentUser = () => {
  return api.get(
    "/auth/me"
  );
};