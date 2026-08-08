import { create } from "zustand";

import { CurrentUserResponse } from "@/types/auth.types";

interface AuthState {
  user: CurrentUserResponse | null;

  setUser: (
    user: CurrentUserResponse
  ) => void;

  clearUser: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,

    setUser: (user) =>
      set({ user }),

    clearUser: () =>
      set({ user: null }),
  }));