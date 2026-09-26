import { Metadata } from "next";

import { notFound } from "next/navigation";

import HeroSection from "@/components/common/portfolio/hero-section";
import SkillsSection from "@/components/common/portfolio/skills-section";
import FeaturedProjectSection from "@/components/common/portfolio/featured-project-section";
import ProjectsSection from "@/components/common/portfolio/projects-section";
import ExperienceSection from "@/components/common/portfolio/experience-section";
import EducationSection from "@/components/common/portfolio/education-section";
import ContactSection from "@/components/common/portfolio/ContactSection";
import FadeUp from "@/components/common/portfolio/animations/fade-up";

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

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

interface Experience {
  _id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

async function getPortfolio(
  username: string
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data.data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}): Promise<Metadata> {
  const { username } = await params;

  const portfolio =
    await getPortfolio(username);

  if (!portfolio) {
  notFound();
}

  const profile =
    portfolio.profile;

  return {
  title: `${profile.fullName} | ${profile.headline}`,

  description:
    profile.bio ||

    `${profile.fullName} Portfolio`,

  keywords: [
    profile.fullName,
    profile.headline,
    "Developer Portfolio",
    "MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],

  authors: [
    {
      name: profile.fullName,
    },
  ],

  creator: profile.fullName,

  openGraph: {
    title:
      `${profile.fullName} | ${profile.headline}`,

    description:
      profile.bio,

    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${profile.username}`,

    siteName: "DevFolio",

    type: "website",

    images:
      profile.profileImage
        ? [
            {
              url: profile.profileImage,
            },
          ]
        : [],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      `${profile.fullName} | ${profile.headline}`,

    description:
      profile.bio,

    images:
      profile.profileImage
        ? [profile.profileImage]
        : [],
  },

  alternates: {
    canonical:
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/${profile.username}`,
  },

  robots: {
    index: true,
    follow: true,
  },
};
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = await params;

  const portfolio =
  await getPortfolio(username);

if (!portfolio) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        Portfolio Not Found
      </h1>
    </div>
  );
}

const profile =
  portfolio.profile;

const projects =
  portfolio.projects;

const featuredProject =
  projects.find(
    (project: Project) =>
      project.featured
  );

const otherProjects =
  projects.filter(
    (project: Project) =>
      !project.featured
  );

const experiences =
  portfolio.experiences;

const education =
  portfolio.education;

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-6 py-12">

<div
  className="
    pointer-events-none
    fixed
    inset-0
    z-0
    overflow-hidden
  "
>
  <div
    className="
      absolute
      left-0
      top-20
      h-[400px]
      w-[400px]
      rounded-full
      bg-cyan-500/30
      blur-[160px]
    "
  />

  <div
    className="
      absolute
      right-0
      top-[35rem]
      h-[400px]
      w-[400px]
      rounded-full
      bg-violet-500/30
      blur-[160px]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-[75rem]
      h-[400px]
      w-[400px]
      -translate-x-1/2
      rounded-full
      bg-blue-500/30
      blur-[160px]
    "
  />
</div>

      <FadeUp>
      <HeroSection
  profile={profile}
  projectsCount={projects.length}
  experiencesCount={experiences.length}
  educationCount={education.length}
/>
</FadeUp>

<FadeUp delay={0.1}>
      <SkillsSection
  skills={profile.skills}
/>
</FadeUp>
      <section className="mt-12">
        
        <div className="flex flex-col gap-20">

<FadeUp delay={0.15}>
<FeaturedProjectSection
  featuredProject={featuredProject}
/>
</FadeUp>

<FadeUp delay={0.2}>
<ProjectsSection
  projects={otherProjects}
/>
</FadeUp>

<FadeUp delay={0.25}>
<ExperienceSection
  experiences={experiences}
/>
</FadeUp>

<FadeUp delay={0.3}>
<EducationSection
  education={education}
/>
</FadeUp>

<FadeUp delay={0.35}>
<ContactSection
  resumeUrl={profile.resumeUrl}
  linkedin={profile.linkedin}
/>
</FadeUp>
        </div>
      </section>
    </main>
  );
}