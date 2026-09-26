"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up in seconds and get access to your personal DevFolio dashboard.",
  },
  {
    number: "02",
    title: "Add Portfolio Information",
    description:
      "Upload projects, experience, education, skills and your resume effortlessly.",
  },
  {
    number: "03",
    title: "Share Your Portfolio",
    description:
      "Get a public portfolio link and showcase your work to recruiters and clients.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mt-32 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-cyan-500
          "
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mt-6
            text-5xl
            font-bold
            tracking-tight
            md:text-6xl
          "
        >
          How It Works
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
          Build your portfolio in minutes and share it with the world.
        </motion.p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
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
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -10,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-slate-900/80
              p-8
              backdrop-blur-md
              transition-all
              duration-500
              hover:border-cyan-500/30
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/5
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <div
                className="
                  inline-flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500/10
                  text-xl
                  font-bold
                  text-cyan-400
                "
              >
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}