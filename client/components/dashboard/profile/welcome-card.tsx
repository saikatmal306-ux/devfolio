"use client";

import { useProfile } from "@/features/profile/profile.api";

export default function WelcomeCard() {
  const { data, isLoading } = useProfile();

  if (isLoading) {
    return (
      <div className="rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  const profile = data?.data;

  const displayName =
    profile?.fullName ||
    profile?.username ||
    "Developer";

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-2xl font-bold">
        Welcome back 👋
      </h2>

      <p className="mt-2 text-muted-foreground">
        {displayName}
      </p>
    </div>
  );
}