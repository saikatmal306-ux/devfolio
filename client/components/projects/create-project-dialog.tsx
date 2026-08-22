"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  createProjectSchema,
  CreateProjectFormValues,
} from "@/features/project/project.schemas";

import { useCreateProject } from "@/features/project/project.api";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUploadImage } from "@/features/upload/upload.api";

export default function CreateProjectDialog() {
  

  const createProject =
    useCreateProject();

    const uploadImage = useUploadImage();

const [imageUrl, setImageUrl] =
  useState("");

  const [fileName, setFileName] = useState("");

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

  const onSubmit = (
  values: CreateProjectFormValues
) => {
    createProject.mutate(
      {
        title: values.title,
        description:
          values.description,

        techStack: values.techStack
  .split(",")
  .map((tech) => tech.trim())
  .filter(Boolean),

        githubUrl:
          values.githubUrl,

        liveUrl:
          values.liveUrl,

        image: imageUrl,

        featured: values.featured,
      },
      {
        onSuccess: () => {
          toast.success(
            "Project created"
          );

          form.reset();
          
          
        },
      }
    );
  };

  return (
    <div>
      

      
        <form
          onSubmit={form.handleSubmit(
            onSubmit
          )}
          className="
          mt-6
          space-y-4
          rounded-xl
          border
          p-6
          "
        >
          <input
            placeholder="Project title"
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
            placeholder="Description"
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
  placeholder="Separate technologies with commas. Example: React, Node.js, Express.js"
  {...form.register("techStack")}
  className="
  w-full
  rounded-md
  border
  p-3
  "
/>

<div className="space-y-2">
  <label className="text-sm font-medium">
    Project Image
  </label>

  <label
  htmlFor="project-image"
  className="
    flex
    h-32
    cursor-pointer
    flex-col
    items-center
    justify-center
    rounded-lg
    border-2
    border-dashed
    border-muted-foreground/30
    transition
    hover:bg-muted/50
  "
>
  <span className="font-medium">
    Upload Project Image
  </span>

  <span className="mt-1 text-sm text-muted-foreground">
    {fileName || "Click to choose image"}
  </span>
</label>

<input
  id="project-image"
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    uploadImage.mutate(file, {
      onSuccess: (url) => {
        setImageUrl(url);

        toast.success(
          "Image uploaded"
        );
      },

      onError: () => {
        toast.error(
          "Upload failed"
        );
      },
    });
  }}
/>

  {imageUrl && (
    <img
      src={imageUrl}
      alt="preview"
      className="
        h-40
        w-full
        rounded-lg
        object-cover
        border
      "
    />
  )}
</div>

          <input
            placeholder="Github URL"
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
            placeholder="Live URL"
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
            Create Project
          </Button>
        </form>
      
    </div>
  );
}
