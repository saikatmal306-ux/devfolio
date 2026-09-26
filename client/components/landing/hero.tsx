"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-36 text-center"
    >
      
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
      />

      
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-medium text-cyan-400"
        >
          Developer Portfolio Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-6
            text-6xl
            font-black
            tracking-tight
            text-transparent
            bg-gradient-to-r
            from-white
            via-cyan-100
            to-cyan-400
            bg-clip-text
            md:text-8xl
          "
        >
          Build Your Developer
          <br />
          Portfolio In Minutes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-slate-400
          "
        >
          Create a professional developer portfolio,
          showcase projects, upload your resume,
          and share your public profile instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/register"
            className="
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]
            "
          >
            Create Portfolio
          </Link>

          <Link
            href="/johncarter"
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/10
            "
          >
            View Demo
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}