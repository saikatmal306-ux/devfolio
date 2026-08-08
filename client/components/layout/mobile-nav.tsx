"use client";

import Link from "next/link";

const links = [
  {
    href: "/dashboard",
    label: "Home",
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
  },
  {
    href: "/dashboard/projects",
    label: "Projects",
  },
];

export default function MobileNav() {
  return (
    <div
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      border-t
      bg-background
      flex
      justify-around
      p-3
      z-50
    "
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}   