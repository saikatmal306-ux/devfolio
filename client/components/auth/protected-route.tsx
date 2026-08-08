"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  useAuthStore,
} from "@/features/auth/auth.store";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const user =
    useAuthStore(
      (state) => state.user
    );

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return children;
}