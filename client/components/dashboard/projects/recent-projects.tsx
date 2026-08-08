"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentProjects() {
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
          <div className="rounded-xl border border-dashed p-10 text-center">
            <p className="text-lg font-medium">
              No projects yet
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Your recently created projects will appear here.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}