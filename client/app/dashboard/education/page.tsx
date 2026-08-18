"use client";

import { useState } from "react";

import {
  useEducation,
  useCreateEducation,
  useDeleteEducation,
} from "@/features/education/education.api";

export default function EducationPage() {
  const { data } = useEducation();

  const createEducation =
    useCreateEducation();

  const deleteEducation =
    useDeleteEducation();

  const [form, setForm] =
    useState({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    await createEducation.mutateAsync(
      form
    );

    setForm({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Education
        </h1>

        <p className="text-muted-foreground">
          Manage your education history
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border p-6"
      >
        <input
          placeholder="Institution"
          value={form.institution}
          onChange={(e) =>
            setForm({
              ...form,
              institution:
                e.target.value,
            })
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="Degree"
          value={form.degree}
          onChange={(e) =>
            setForm({
              ...form,
              degree:
                e.target.value,
            })
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          placeholder="Field Of Study"
          value={form.fieldOfStudy}
          onChange={(e) =>
            setForm({
              ...form,
              fieldOfStudy:
                e.target.value,
            })
          }
          className="w-full rounded-lg border p-3"
        />

        <input
          type="date"
          value={form.startDate}
          onChange={(e) =>
            setForm({
              ...form,
              startDate:
                e.target.value,
            })
          }
          className="w-full rounded-lg border p-3"
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

  Currently Studying Here
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
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value,
            })
          }
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="rounded-lg border px-5 py-2"
        >
          Add Education
        </button>
      </form>

      <div className="space-y-4">
        {data?.data?.map(
          (education) => (
            <div
              key={education._id}
              className="rounded-xl border p-5"
            >
              <h3 className="text-xl font-semibold">
                {education.degree}
              </h3>

              <p>
                {
                  education.institution
                }
              </p>

              <p>
                {
                  education.fieldOfStudy
                }
              </p>

              <p className="text-sm text-muted-foreground">
  📅 {new Date(
      education.startDate
    ).toLocaleDateString()}
  {" - "}
  {education.current
    ? "Present"
    : education.endDate
      ? new Date(
          education.endDate
        ).toLocaleDateString()
      : "N/A"}
</p>
              {education.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {
                    education.description
                  }
                </p>
              )}

              <button
                onClick={() =>
                  deleteEducation.mutate(
                    education._id
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