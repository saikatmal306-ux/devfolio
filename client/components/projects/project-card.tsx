"use client";

import { Trash2, ExternalLink } from "lucide-react";

import { Project } from "@/features/project/project.types";

import EditProjectDialog from "./edit-project-dialog";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useDeleteProject } from "@/features/project/project.api";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {

  const deleteProject = useDeleteProject();

  return (
    <Card
      className="
      transition-all
      hover:shadow-lg
      "
    >
      <CardHeader>
        <CardTitle>
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

      {project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="
      h-48
      w-full
      rounded-lg
      object-cover
      border
    "
  />
)}

        <p
          className="
          text-sm
          text-muted-foreground
          "
        >
          {project.description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-2
          "
        >
          {project.techStack.map(
            (tech) => (
              <span
                key={tech}
                className="
                rounded-full
                bg-muted
                px-3
                py-1
                text-xs
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div
          className="
          flex
          flex-wrap
          gap-2
          "
        >
          {project.liveUrl && (
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  project.liveUrl,
                  "_blank"
                )
              }
            >
              <ExternalLink
                className="
                mr-2
                size-4
                "
              />
              Live
            </Button>
          )}

          {project.githubUrl && (
  <Button
    variant="outline"
    size="sm"
    onClick={() =>
      window.open(
        project.githubUrl,
        "_blank"
      )
    }
  >
    <ExternalLink className="mr-2 size-4" />
    GitHub
  </Button>
)}

          <EditProjectDialog
  project={project}
/>


<Button
  variant="destructive"
  size="sm"
  onClick={() => {
    const confirmed =
      window.confirm(
        "Delete this project?"
      );

    if (!confirmed) return;

    deleteProject.mutate(
      project._id,
      {
        onSuccess: () => {
          toast.success(
            "Project deleted"
          );
        },
      }
    );
  }}
>
  <Trash2
    className="
    mr-2
    size-4
    "
  />
  Delete
</Button>
        </div>
      </CardContent>
    </Card>
  );
}