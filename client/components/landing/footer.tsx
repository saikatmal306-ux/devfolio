"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingFooter() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        mt-32
        border-t
        border-white/10
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-12
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8
            md:flex-row
          "
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              DevFolio
            </h3>

            <p
              className="
                mt-2
                max-w-md
                text-sm
                text-slate-400
              "
            >
              Build and share beautiful developer portfolios
              with projects, experience, skills and resume.
            </p>
          </div>

          {/* Links */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              text-sm
              text-slate-400
            "
          >
            <Link
              href="/register"
              className="
                transition-colors
                hover:text-cyan-400
              "
            >
              Create Portfolio
            </Link>

            <Link
              href="/login"
              className="
                transition-colors
                hover:text-cyan-400
              "
            >
              Login
            </Link>

            <Link
              href="/"
              className="
                transition-colors
                hover:text-cyan-400
              "
            >
              Home
            </Link>
          </div>
        </div>

        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
            text-center
            text-sm
            text-slate-500
          "
        >
          © 2026 DevFolio. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}