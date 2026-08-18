"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  useProfile,
  useUpdateProfile,
} from "@/features/profile/profile.api";

import { uploadImage, } from "@/features/upload/upload.service";

import {
  useUploadImage,
  useUploadResume,
} from "@/features/upload/upload.api";

export default function ProfilePage() {
  const { data, isLoading } = useProfile();

  const updateProfile = useUpdateProfile();

  const uploadResume = useUploadResume();

  const [resumeName, setResumeName] =
  useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    headline: "",
    bio: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
    profileImage: "",
    resumeUrl: "",
  });

  useEffect(() => {
  if (!data?.data) return;

  setFormData({
    fullName: data.data.fullName ?? "",
    username: data.data.username ?? "",
    headline: data.data.headline ?? "",
    bio: data.data.bio ?? "",
    location: data.data.location ?? "",
    website: data.data.website ?? "",
    github: data.data.github ?? "",
    linkedin: data.data.linkedin ?? "",
    profileImage: data.data.profileImage ?? "",
    resumeUrl:data.data.resumeUrl ?? "",
  });
}, [data]);

const handleImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;
  setResumeName(file.name);

  try {
    const imageUrl = await uploadImage(file);

    setFormData((prev) => ({
      ...prev,
      profileImage: imageUrl,
    }));

    toast.success("Image uploaded");
  } catch {
    toast.error("Upload failed");
  }
};

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    updateProfile.mutate(formData, {
      onSuccess: () => {
        toast.success(
          "Profile updated successfully"
        );
      },

      onError: () => {
        toast.error(
          "Failed to update profile"
        );
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">
        Profile Settings
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <div className="space-y-3">
 {formData.profileImage && (
  <img
    src={formData.profileImage}
    alt="Profile"
    className="
      h-32
      w-32
      rounded-full
      object-cover
      border
    "
  />
)}

  <label
  className="
  inline-flex
  cursor-pointer
  items-center
  rounded-lg
  bg-black
  px-4
  py-2
  text-white
  "
>
  Upload Profile Photo

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />
</label>
</div>

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Headline"
          value={formData.headline}
          onChange={(e) =>
            setFormData({
              ...formData,
              headline: e.target.value,
            })
          }
        />

        <textarea
          className="w-full rounded-lg border p-3"
          rows={5}
          placeholder="Bio"
          value={formData.bio}
          onChange={(e) =>
            setFormData({
              ...formData,
              bio: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({
              ...formData,
              location: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Website"
          value={formData.website}
          onChange={(e) =>
            setFormData({
              ...formData,
              website: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="GitHub"
          value={formData.github}
          onChange={(e) =>
            setFormData({
              ...formData,
              github: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded-lg border p-3"
          placeholder="LinkedIn"
          value={formData.linkedin}
          onChange={(e) =>
            setFormData({
              ...formData,
              linkedin: e.target.value,
            })
          }
        />

        <div className="space-y-2">
  <label className="font-medium">
    Resume
  </label>

  <div className="flex items-center gap-3">
    <label
      htmlFor="resume"
      className="
        cursor-pointer
        rounded-lg
        bg-black
        px-4
        py-2
        text-white
      "
    >
      Upload Resume
    </label>

    <input
      id="resume"
      type="file"
      accept=".pdf"
      className="hidden"
      onChange={async (e) => {
        const file =
          e.target.files?.[0];

        if (!file) return;

        setResumeName(file.name);

        try {
          const url =
            await uploadResume.mutateAsync(
              file
            );

          setFormData({
            ...formData,
            resumeUrl: url,
          });

          toast.success(
            "Resume uploaded successfully"
          );
        } catch {
          toast.error(
            "Resume upload failed"
          );
        }
      }}
    />

    {resumeName && (
      <span className="text-sm text-gray-500">
        {resumeName}
      </span>
    )}

    {formData.resumeUrl && (
      <a
        href={formData.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-lg
          border
          px-3
          py-2
        "
      >
        View Resume
      </a>
    )}
  </div>
</div>

        <button
          type="submit"
          disabled={updateProfile.isPending}
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          {updateProfile.isPending
            ? "Saving..."
            : "Save Changes"}
        </button>
      </form>
    </div>
  );
}