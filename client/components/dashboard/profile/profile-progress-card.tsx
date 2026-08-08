"use client";

import { useProfile } from "@/features/profile/profile.api";

export default function ProfileProgressCard() {
  const { data, isLoading } = useProfile();

  if (isLoading) {
    return (
      <div className="rounded-xl border p-6">
        Loading...
      </div>
    );
  }

  const profile = data?.data;

  const fields = [
    profile?.fullName,
    profile?.headline,
    profile?.bio,
    profile?.location,
    profile?.website,
    profile?.github,
    profile?.linkedin,
    profile?.profileImage,
    profile?.resumeUrl,
    profile?.username,
    profile?.skills?.length
      ? "skills"
      : "",
  ];

  const completed =
    fields.filter(Boolean).length;

  const total =
    fields.length;

  const progress =
    Math.round(
      (completed / total) * 100
    );

  return (
    <div className="rounded-xl border p-6">
      <h3 className="font-semibold mb-3">
        Profile Completion
      </h3>

      <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm">
        {progress}% completed
      </p>
    </div>
  );
}