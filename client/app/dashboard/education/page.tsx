"use client";

import { useState } from "react";

import {
  useEducation,
  useCreateEducation,
  useDeleteEducation,
  useUpdateEducation,
} from "@/features/education/education.api";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Trash2,
} from "lucide-react";

export default function EducationPage() {
  const { data } = useEducation();

  const createEducation =
    useCreateEducation();

  const updateEducation =
  useUpdateEducation();

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

  const [editingId, setEditingId] =
  useState<string | null>(null);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (editingId) {
  await updateEducation.mutateAsync({
    id: editingId,
    payload: form,
  });

  toast.success(
    "Education updated successfully"
  );

  setEditingId(null);
} else {
  await createEducation.mutateAsync(form);

  toast.success(
    "Education added successfully"
  );
}

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
          disabled={
    createEducation.isPending ||
    updateEducation.isPending
  }
          className="rounded-lg border px-5 py-2"
        >
          {createEducation.isPending ||
updateEducation.isPending
  ? "Saving..."
  : editingId
  ? "Update Education"
  : "Add Education"}
        </button>
        {editingId && (
  <Button
    type="button"
    variant="outline"
    onClick={() => {
      setEditingId(null);

      setForm({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      });
    }}
  >
    Cancel Edit
  </Button>
)}
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

              <div className="mt-4 flex gap-2">
  <Button
    variant="outline"
    size="sm"
    onClick={() => {
      setEditingId(education._id);

      setForm({
        institution:
          education.institution,

        degree:
          education.degree,

        fieldOfStudy:
          education.fieldOfStudy,

        startDate:
          education.startDate?.split("T")[0] || "",

        endDate:
          education.endDate?.split("T")[0] || "",

        current:
          education.current || false,

        description:
          education.description || "",
      });
    }}
  >
    <Pencil className="h-4 w-4" />
    Edit
  </Button>

  <Button
    variant="destructive"
    size="sm"
    disabled={deleteEducation.isPending}
    onClick={() => {
      if (
  !window.confirm(
    "Are you sure you want to delete this education?"
  )
)
  return;
      deleteEducation.mutate(
        education._id,
        {
    onSuccess: () => {
      toast.success(
        "Education deleted successfully"
      );
    },
  }
      )
    }
  }
  >
    <Trash2 className="h-4 w-4" />
    Delete
  </Button>
</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}