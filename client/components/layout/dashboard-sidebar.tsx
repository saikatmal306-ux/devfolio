"use client";

import Link from "next/link";

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
      </nav>
    </aside>
  );
}