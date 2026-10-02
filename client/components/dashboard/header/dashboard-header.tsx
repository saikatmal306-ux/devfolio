"use client";

import UserDropdown from "./user-dropdown";

export default function DashboardHeader() {
  return (
    <div className="relative flex items-start justify-between md:items-center">
      <div className="pt-0 md:pt-0">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
      </div>

      <div className="absolute right-0 top-0 md:static">
        <UserDropdown />
      </div>
    </div>
  );
}
