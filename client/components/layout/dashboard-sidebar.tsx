"use client";

import Link from "next/link";
import { useProfile } from "@/features/profile/profile.api";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
  },
  {
    href: "/dashboard/projects",
    label: "Projects",
  },
  {
    href: "/dashboard/experience",
    label: "Experience",
  },
  {
    href: "/dashboard/education",
    label: "Education",
  },
];

export default function DashboardSidebar() {
  const { data: profile } = useProfile();
  return (
    <aside
      className="
      hidden
      md:block
      w-64
      border-r
      min-h-screen
      p-4
    "
    >
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              block
              rounded
              p-2
              hover:bg-muted
            "
          >
            {link.label}
          </Link>
        ))}

        {profile?.data?.username && (
  <Link
    href={`/${profile?.data?.username}`}
    target="_blank"
    className="
      block
      rounded
      p-2
      hover:bg-muted
    "
  >
    Portfolio
  </Link>
)}
      </nav>
    </aside>
  );
}