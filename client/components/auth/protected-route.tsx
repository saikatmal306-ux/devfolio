"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useCurrentUser } from "@/features/auth/auth.api";
import { useAuthStore } from "@/features/auth/auth.store";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const user = useAuthStore(
    (state) => state.user
  );

  const setUser = useAuthStore(
    (state) => state.setUser
  );

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useCurrentUser();

  const isUnauthorized =
    axios.isAxiosError(error) &&
    error.response?.status === 401;

  useEffect(() => {
    if (data && !user) {
      setUser(data);
    }
  }, [data, user, setUser]);

  useEffect(() => {
    if (!isLoading && isUnauthorized) {
      router.replace("/login");
    }
  }, [
    isLoading,
    isUnauthorized,
    router,
  ]);

  if (isLoading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  if (isUnauthorized || (!isError && !data)) {
    return null;
  }

  if (isError) {
    return (
      <div className="p-8" role="alert">
        <p>Unable to verify your session.</p>
        <button
          className="mt-2 underline"
          onClick={() => void refetch()}
        >
          Try again
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
