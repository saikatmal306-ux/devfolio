"use client";

import { motion } from "framer-motion";

import Image from "next/image";

interface Profile {
  _id: string;
  username: string;
  fullName: string;
  headline: string;
  bio: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  profileImage?: string;
  resumeUrl: string;
  skills: string[];
}

interface HeroSectionProps {
  profile: Profile;
  projectsCount: number;
  experiencesCount: number;
  educationCount: number;
}

export default function HeroSection({
  profile,
  projectsCount,
  experiencesCount,
  educationCount,
}: HeroSectionProps) {
  return (
  <section
  className="
relative
overflow-hidden
rounded-[40px]
border
border-white/10
bg-gradient-to-br
from-slate-950
via-slate-900
to-slate-950
p-8
text-white
shadow-2xl
md:p-12
"
>
    <div
  className="
    absolute
    -left-40
    -top-40
    h-96
    w-96
    rounded-full
    bg-cyan-500/20
    blur-3xl
  "
/>

<div
  className="
    absolute
    -bottom-40
    -right-40
    h-96
    w-96
    rounded-full
    bg-violet-500/20
    blur-3xl
  "
/>
    <div
  className="
    relative
    z-10
    grid
    gap-10
    lg:grid-cols-[280px_1fr]
    lg:items-center
  "
>
      
      <div className="flex justify-center lg:justify-start">
        {profile.profileImage && (
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={profile.profileImage}
      alt={profile.fullName}
      width={160}
      height={160}
      className="
        h-56
        w-56
        rounded-full
        object-cover
        border-4
        border-white/20
        shadow-[0_0_80px_rgba(34,211,238,0.45)]
        hover:scale-105
transition-all
duration-500
      "
    />
  </motion.div>
)}
      
      </div>

      <div>
        <motion.div
  initial={{
    opacity: 0,
    y: 40,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
>
        <h1
          className="
            mt-6
            text-6xl
            font-black
            tracking-tight
          "
        >
          {profile.fullName}
        </h1>

        <p className="mt-3 text-2xl font-medium text-cyan-300">
          {profile.headline}
        </p>

        <p
  className="
    mt-6
    max-w-3xl
    text-lg
    leading-relaxed
    text-slate-300
  "
>
          {profile.bio}
        </p>

        {profile.location && (
          <p className="mt-4 text-slate-400">
  📍 {profile.location}
</p>
        )}

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
  <motion.div
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="
      rounded-2xl
      border
     bg-slate-900/80
border-cyan-500/15
shadow-[0_0_20px_rgba(34,211,238,0.08)]
      backdrop-blur-md
      p-4
      text-center
    "
  >
    <p className="text-3xl font-bold text-cyan-400">
      {projectsCount}
    </p>
    <p className="text-xs text-muted-foreground">
      Projects
    </p>
  </motion.div>

  <motion.div
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="
      rounded-2xl
      border
     bg-slate-900/80
border-cyan-500/15
shadow-[0_0_20px_rgba(34,211,238,0.08)]
      backdrop-blur-md
      p-4
      text-center
    "
  >
    <p className="text-3xl font-bold text-cyan-400">
      {experiencesCount}
    </p>
    <p className="text-xs text-muted-foreground">
      Experience
    </p>
  </motion.div>

  <motion.div
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="
      rounded-2xl
      border
     bg-slate-900/80
border-cyan-500/15
shadow-[0_0_20px_rgba(34,211,238,0.08)]
      backdrop-blur-md
      p-4
      text-center
    "
  >
    <p className="text-3xl font-bold text-cyan-400">
      {educationCount}
    </p>
    <p className="text-xs text-muted-foreground">
      Education
    </p>
  </motion.div>
</div>

        <div className="mt-8 space-y-4">
  {profile.resumeUrl && (
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/30
        bg-cyan-500/10
        px-8
        py-3
        font-semibold
        text-cyan-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105
        hover:bg-cyan-500/20
        hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
      "
    >
      Download Resume
    </a>
  )}

  <div className="flex flex-wrap gap-3">
    {profile.github && (
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-5
          py-2.5
          backdrop-blur-md
          transition-all
         hover:bg-cyan-500/10
hover:border-cyan-500/30
        "
      >
        GitHub
      </a>
    )}

    {profile.linkedin && (
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-5
          py-2.5
          backdrop-blur-md
          transition-all
         hover:bg-cyan-500/10
hover:border-cyan-500/30
        "
      >
        LinkedIn
      </a>
    )}

    {profile.website && (
      <a
        href={profile.website}
        target="_blank"
        rel="noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-5
          py-2.5
          backdrop-blur-md
          transition-all
         hover:bg-cyan-500/10
hover:border-cyan-500/30
        "
      >
        Website
      </a>
    )}
  </div>
</div>
      
      </motion.div>
      </div>
    </div>
  </section>
);
}