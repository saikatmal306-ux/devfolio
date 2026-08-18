"use client";

import Link from "next/link";

import { useExperiences } from "@/features/experience/experience.api";

export default function ExperienceSummaryCard() {
  const { data, isLoading } = useExperiences();

  if (isLoading) {
    return (
      <div className="rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  const experiences = data?.data ?? [];

  const latestExperience = experiences[0];

  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-lg font-semibold">
        Experience
      </h3>

      <p className="mt-4 text-3xl font-bold">
        {experiences.length}
      </p>

      <p className="text-sm text-muted-foreground">
        Total Experiences
      </p>

      {latestExperience && (
        <div className="mt-4">
          <p className="font-medium">
            {latestExperience.position}
          </p>

          <p className="text-sm text-muted-foreground">
            {latestExperience.company}
          </p>
        </div>
      )}

      <Link
        href="/dashboard/experience"
        className="mt-6 inline-block text-sm font-medium underline"
      >
        Manage Experience →
      </Link>
    </div>
  );
}