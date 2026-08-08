"use client";

import StatsCard
from "./stats-card";

import {
  useDashboardStats,
}
from "@/features/dashboard/dashboard.api";

export default function DashboardStats() {
  const { data } =
    useDashboardStats();

  if (!data)
    return null;

  return (
    <div
      className="
      grid
      gap-4
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      <StatsCard
        title="Projects"
        value={
          data.data.projects
        }
      />

      <StatsCard
        title="Experience"
        value={
          data.data.experiences
        }
      />

      <StatsCard
        title="Education"
        value={
          data.data.educations
        }
      />

      <StatsCard
        title="Completion"
        value={`${data.data.profileCompletion}%`}
      />
    </div>
  );
}