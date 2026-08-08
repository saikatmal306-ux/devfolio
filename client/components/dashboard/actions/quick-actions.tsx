"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FolderPlus,
  UserRoundPen,
  Upload,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "Edit Profile",
    href: "/dashboard/profile",
    icon: UserRoundPen,
  },
  {
    title: "Add Project",
    href: "/dashboard/projects",
    icon: FolderPlus,
  },
  {
    title: "Upload Resume",
    href: "/dashboard/profile",
    icon: Upload,
  },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="grid gap-3 sm:grid-cols-3">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                href={action.href}
                key={action.title}
                >
                <Button
                    variant="outline"
                    className="h-20 w-full justify-start gap-3"
                >
                    <Icon className="size-5" />
                    {action.title}
                </Button>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}