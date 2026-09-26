"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative mt-32 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-slate-900/80
          p-16
          text-center
          backdrop-blur-md
          shadow-2xl
          shadow-cyan-950/20
        "
      >
        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/5
            via-transparent
            to-transparent
          "
        />

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-cyan-500
            "
          >
            Get Started
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >
            Ready To Build
            <br />
            Your Portfolio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-slate-400
            "
          >
            Create your professional developer portfolio,
            showcase your projects and share your work
            with recruiters and clients in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <Link
              href="/register"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}