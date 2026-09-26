"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPreview() {
  return (
    <section className="relative mt-32 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-40
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-cyan-500
          "
        >
          Preview
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mt-8
            text-5xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          What Your Portfolio
          <br />
          Can Look Like
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-slate-400
          "
        >
          Beautiful public portfolio pages designed to help developers
          showcase projects, skills and experience professionally.
        </motion.p>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        className="
          group
          relative
          mt-20
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-slate-950
          shadow-2xl
          shadow-cyan-950/30
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >
        {/* Browser Bar */}
        <div
          className="
            flex
            items-center
            gap-2
            border-b
            border-white/10
            px-5
            py-4
            bg-slate-900
          "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Preview Image */}
        <div className="overflow-hidden">
          <Image
            src="/portfolio-preview.png"
            alt="DevFolio Portfolio Preview"
            width={1400}
            height={900}
            className="
              w-full
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Overlay Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-cyan-500/5
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </motion.div>
    </section>
  );
}