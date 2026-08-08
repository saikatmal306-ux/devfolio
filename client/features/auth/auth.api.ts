import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "@/services/auth.service";
import { useAuthStore } from "./auth.store";

export const useRegister =
  () =>
    useMutation({
      mutationFn: registerUser,
    });

export const useLogin =
  () =>
    useMutation({
      mutationFn: loginUser,
    });

export const useCurrentUser =
  () =>
    useQuery({
      queryKey: ["me"],
      queryFn: async () => {
        const res =
          await getCurrentUser();

        return res.data;
      },
    });

    export const useLogout = () => {
  const clearUser =
    useAuthStore(
      (state) => state.clearUser
    );

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      clearUser();
    },
  });
};