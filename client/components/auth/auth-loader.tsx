"use client";

import { useEffect } from "react";

import {
  useCurrentUser,
} from "@/features/auth/auth.api";

import {
  useAuthStore,
} from "@/features/auth/auth.store";

export default function AuthLoader() {
  const { data } =
    useCurrentUser();

  const setUser =
    useAuthStore(
      (state) =>
        state.setUser
    );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return null;
}