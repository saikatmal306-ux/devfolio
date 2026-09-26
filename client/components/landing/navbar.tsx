"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingNavbar() {
  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-950/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            group
            relative
            text-2xl
            font-black
            tracking-tight
          "
        >
          <span
            className="
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            DevFolio
          </span>

          <span
            className="
              absolute
              inset-0
              blur-lg
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-40
              text-cyan-400
            "
          >
            DevFolio
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="
              text-sm
              font-medium
              text-slate-300
              transition-all
              duration-300
              hover:text-white
            "
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
              rounded-xl
              bg-cyan-500
              px-5
              py-2.5
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  );
}