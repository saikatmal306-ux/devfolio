"use client";

import UserDropdown from "./user-dropdown";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
      </div>

      <UserDropdown />
    </div>
  );
}