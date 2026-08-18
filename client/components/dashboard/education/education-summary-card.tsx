"use client";

import Link from "next/link";

import { useEducation } from "@/features/education/education.api";

export default function EducationSummaryCard() {
  const { data, isLoading } = useEducation();

  if (isLoading) {
    return (
      <div className="rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  const education = data?.data ?? [];

  const latestEducation = education[0];

  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-lg font-semibold">
        Education
      </h3>

      <p className="mt-4 text-3xl font-bold">
        {education.length}
      </p>

      <p className="text-sm text-muted-foreground">
        Total Education
      </p>

      {latestEducation && (
        <div className="mt-4">
          <p className="font-medium">
            {latestEducation.degree}
          </p>

          <p className="text-sm text-muted-foreground">
            {latestEducation.institution}
          </p>
        </div>
      )}

      <Link
        href="/dashboard/education"
        className="mt-6 inline-block text-sm font-medium underline"
      >
        Manage Education →
      </Link>
    </div>
  );
}