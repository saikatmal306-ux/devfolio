"use client";

import { motion } from "motion/react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useProjects } from "@/features/project/project.api";

export default function RecentProjects() {
  const { data, isLoading } = useProjects();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>

        <CardContent>
          Loading...
        </CardContent>
      </Card>
    );
  }

  const projects = data?.data ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>

        <CardContent>
          {projects.length === 0 ? (
            <div className="rounded-xl border border-dashed p-10 text-center">
              <p className="text-lg font-medium">
                No projects yet
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Your recently created projects will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.slice(0, 3).map((project) => (
                <div
                  key={project._id}
                  className="rounded-xl border p-4"
                >
                  <h3 className="font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}

              {projects.length > 3 && (
  <div className="pt-2 text-center">
    <a
      href="/dashboard/projects"
      className="text-sm font-medium text-primary hover:underline"
    >
      View All Projects
    </a>
  </div>
)}

            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}