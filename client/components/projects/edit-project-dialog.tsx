"use client";

import { useEffect } from "react";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Project } from "@/features/project/project.types";
import { useUpdateProject } from "@/features/project/project.api";

import {
  createProjectSchema,
  CreateProjectFormValues,
} from "@/features/project/project.schemas";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  project: Project;
}

export default function EditProjectDialog({
  project,
}: Props) {
  const updateProject = useUpdateProject();

    const [open, setOpen] = useState(false);

  const form =
    useForm<CreateProjectFormValues>({
      resolver: zodResolver(
        createProjectSchema
      ),
      defaultValues: {
        title: "",
        description: "",
        techStack: "",
        githubUrl: "",
        liveUrl: "",
        featured: false,
      },
    });

  useEffect(() => {
    form.reset({
      title: project.title,
      description:
        project.description,
      techStack:
        project.techStack.join(", "),
      githubUrl:
        project.githubUrl || "",
      liveUrl:
        project.liveUrl || "",
      featured: project.featured,
    });
  }, [project, form]);

  const onSubmit = (
    values: CreateProjectFormValues
  ) => {
    updateProject.mutate(
      {
        id: project._id,
        payload: {
          title: values.title,
          description:
            values.description,

          techStack:
            values.techStack
              .split(",")
              .map((tech) =>
                tech.trim()
              )
              .filter(Boolean),

          githubUrl:
            values.githubUrl,

          liveUrl:
            values.liveUrl,

          featured: values.featured,
        },
      },
      {
        onSuccess: () => {
  toast.success(
    "Project updated"
  );

  setOpen(false);
}
      }
    );
  };

  return (
  <Dialog
    open={open}
    onOpenChange={setOpen}
  >
    <DialogTrigger
  render={
    <Button
      variant="outline"
      size="sm"
    />
  }
>
  <Pencil className="mr-2 size-4" />
  Edit
</DialogTrigger>

    <DialogContent
      className="max-w-2xl"
    >
      <DialogHeader>
        <DialogTitle>
          Edit Project
        </DialogTitle>
      </DialogHeader>

      <form
        onSubmit={form.handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        <input
          {...form.register(
            "title"
          )}
          className="
          w-full
          rounded-md
          border
          p-3
          "
        />

        <textarea
          {...form.register(
            "description"
          )}
          className="
          min-h-30
          w-full
          rounded-md
          border
          p-3
          "
        />

        <input
          {...form.register(
            "techStack"
          )}
          placeholder="
          React, Node.js, MongoDB
          "
          className="
          w-full
          rounded-md
          border
          p-3
          "
        />

        <input
          {...form.register(
            "githubUrl"
          )}
          className="
          w-full
          rounded-md
          border
          p-3
          "
        />

        <input
          {...form.register(
            "liveUrl"
          )}
          className="
          w-full
          rounded-md
          border
          p-3
          "
        />

        <div className="flex items-center gap-3 rounded-lg border p-4">
  <input
    id="featured"
    type="checkbox"
    {...form.register("featured")}
    className="h-4 w-4"
  />

  <label
    htmlFor="featured"
    className="cursor-pointer text-sm font-medium"
  >
    Feature this project on my portfolio
  </label>
</div>

        <Button
          type="submit"
          className="w-full"
        >
          Update Project
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);
}