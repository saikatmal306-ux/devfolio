"use client";

import { useProfile } from "@/features/profile/profile.api";
import UserDropdown from "./user-dropdown";

export default function DashboardHeader() {
  const { data } = useProfile();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-1 text-muted-foreground">
          Welcome back, {data?.data.fullName ?? "Developer"} 👋
        </p>
      </div>

      <UserDropdown />
    </div>
  );
}