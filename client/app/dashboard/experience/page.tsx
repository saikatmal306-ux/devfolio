"use client";

import { useState } from "react";

import {
  useExperiences,
  useCreateExperience,
  useDeleteExperience,
} from "@/features/experience/experience.api";

export default function ExperiencePage() {
  const { data, isLoading } =
    useExperiences();

  const createExperience =
    useCreateExperience();

  const deleteExperience =
    useDeleteExperience();

  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    await createExperience.mutateAsync(
      form
    );

    setForm({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Experience
        </h1>

        <p className="text-muted-foreground">
          Manage your work experience
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border p-6"
      >
        <input
          placeholder="Company"
          className="w-full rounded-lg border p-3"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
        />

        <input
          placeholder="Position"
          className="w-full rounded-lg border p-3"
          value={form.position}
          onChange={(e) =>
            setForm({
              ...form,
              position: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="w-full rounded-lg border p-3"
          value={form.startDate}
          onChange={(e) =>
            setForm({
              ...form,
              startDate: e.target.value,
            })
          }
        />

        <label className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={form.current}
    onChange={(e) =>
      setForm({
        ...form,
        current: e.target.checked,
      })
    }
  />

  Currently Working Here
</label>

        {!form.current && (
  <input
    type="date"
    value={form.endDate}
    onChange={(e) =>
      setForm({
        ...form,
        endDate: e.target.value,
      })
    }
    className="w-full rounded-lg border p-3"
  />
)}

        <textarea
          placeholder="Description"
          className="w-full rounded-lg border p-3"
          rows={4}
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="rounded-lg border px-6 py-3"
        >
          Add Experience
        </button>
      </form>

      <div className="space-y-4">
        {data?.data.map(
          (experience) => (
            <div
              key={experience._id}
              className="rounded-xl border p-5"
            >
              <h3 className="text-xl font-semibold">
                {experience.position}
              </h3>

              <p>
                {experience.company}
              </p>

              <p className="text-sm text-muted-foreground">
  📅 {new Date(
      experience.startDate
    ).toLocaleDateString()}
  {" - "}
  {experience.current
    ? "Present"
    : experience.endDate
      ? new Date(
          experience.endDate
        ).toLocaleDateString()
      : "N/A"}
</p>

              {experience.description && (
                <p className="mt-3">
                  {experience.description}
                </p>
              )}

              <button
                onClick={() =>
                  deleteExperience.mutate(
                    experience._id
                  )
                }
                className="mt-4 rounded-lg border px-4 py-2"
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}