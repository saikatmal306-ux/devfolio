"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { FolderOpen } from "lucide-react";

import { useProjects } from "@/features/project/project.api";

import ProjectCard from "@/components/projects/project-card";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function ProjectsPage() {
  const {
    data,
    isLoading,
  } = useProjects();

  const projects =
    data?.data ?? [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <Card>
          <CardContent className="p-6">
            Loading projects...
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
        "
      >
        <div>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-muted-foreground mt-1">
            Manage your portfolio projects
          </p>
        </div>

      <Link href="/dashboard/projects/create">
  <Button>
    <Plus className="mr-2 size-4" />
    Add Project
  </Button>
</Link>
        
      </div>

      {projects.length === 0 ? (
        <Card>
          <CardContent
            className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            p-10
            text-center
            "
          >
            <FolderOpen
              className="
              size-12
              text-muted-foreground
              "
            />

            <div>
              <h2
                className="
                text-lg
                font-semibold
                "
              >
                No Projects Yet
              </h2>

              <p className="text-muted-foreground">
                Create your first project.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div
          className="
          grid
          gap-4
          md:grid-cols-2
          xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      )}
    </div>
  );
}