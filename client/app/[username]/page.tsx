import Image from "next/image";

import { Metadata } from "next";

import { notFound } from "next/navigation";

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

// async function getProfile(username: string) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/profile/${username}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!response.ok) {
//     return null;
//   }

//   const data = await response.json();

  

//   return data.data as Profile;
// }

// async function getProjects(username: string) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/projects/user/${username}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!response.ok) {
//     return [];
//   }

//   const data = await response.json();

//   return data.data;
// }

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
    <div className="p-10 text-center">
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
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div
  className="
  flex
  flex-col
  items-center
  text-center
  rounded-3xl
  border
  bg-background
  p-10
  shadow-sm
"
>
        {profile.profileImage && (
          <Image
            src={profile.profileImage}
            alt={profile.fullName}
            width={160}
            height={160}
            className="
  h-44
  w-44
  rounded-full
  object-cover
  border-4
  shadow-lg
"
          />
        )}

        <h1
  className="
  mt-6
  text-5xl
  font-extrabold
  tracking-tight
"
>
          {profile.fullName}
        </h1>

        <p className="mt-3 text-2xl font-medium text-muted-foreground">
          {profile.headline}
        </p>

        <p className="
  mt-6
  max-w-3xl
  text-lg
  leading-relaxed
  text-muted-foreground
">
          {profile.bio}
        </p>

        {profile.location && (
          <p className="mt-4">
            📍 {profile.location}
          </p>
        )}

        <div
  className="
    mt-8
    flex
    flex-wrap
    justify-center
    gap-8
  "
>
  <div>
    <p className="text-3xl font-bold">
      {projects.length}
    </p>
    <p className="text-sm text-muted-foreground">
      Projects
    </p>
  </div>

  <div>
    <p className="text-3xl font-bold">
      {experiences.length}
    </p>
    <p className="text-sm text-muted-foreground">
      Experience
    </p>
  </div>

  <div>
    <p className="text-3xl font-bold">
      {education.length}
    </p>
    <p className="text-sm text-muted-foreground">
      Education
    </p>
  </div>
</div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
  {profile.github && (
    <a
      href={profile.github}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border px-4 py-2"
    >
      GitHub
    </a>
  )}

  {profile.linkedin && (
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border px-4 py-2"
    >
      LinkedIn
    </a>
  )}

  {profile.website && (
    <a
      href={profile.website}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border px-4 py-2"
    >
      Website
    </a>
  )}

  {profile.resumeUrl && (
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noreferrer"
      className="
      rounded-lg
      bg-black
      px-4
      py-2
      text-white
      "
    >
      Resume
    </a>
  )}
</div>
      </div>

      <section className="mt-16">
  <h2 className="mb-6 text-3xl font-bold">
    Skills
  </h2>

        <div className="flex flex-wrap gap-4">
          {profile.skills.map((skill: string) => (
  <span
  key={skill}
  className="
    rounded-full
    border
    bg-muted/50
    px-5
    py-2
    text-sm
    font-medium
    transition-all
    hover:scale-105
    hover:bg-muted
  "
>
    {skill}
  </span>
))}
        </div>
      </section>

      <section className="mt-12">
        
        <div className="flex flex-col gap-3">

<section className="mt-16">
  <h2 className="mb-8 text-4xl font-bold">
    Featured Project
  </h2>

  {featuredProject ? (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        shadow-lg
      "
    >
      {featuredProject.image && (
        <Image
          src={featuredProject.image}
          alt={featuredProject.title}
          width={1400}
          height={700}
          className="
            h-[450px]
            w-full
            object-cover
          "
        />
      )}

      <div className="p-8">
        <h3 className="text-4xl font-bold">
          {featuredProject.title}
        </h3>

        <p
          className="
            mt-4
            max-w-3xl
            text-lg
            text-muted-foreground
          "
        >
          {featuredProject.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {featuredProject.techStack.map(
            (tech: string) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                "
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="mt-8 flex gap-4">
          {featuredProject.githubUrl && (
            <a
              href={
                featuredProject.githubUrl
              }
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                px-5
                py-3
              "
            >
              GitHub
            </a>
          )}

          {featuredProject.liveUrl && (
            <a
              href={
                featuredProject.liveUrl
              }
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                bg-black
                px-5
                py-3
                text-white
              "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
    ) : (
  <div className="rounded-3xl border p-10 text-center">
    <h3 className="text-xl font-semibold">
      No Featured Project Yet
    </h3>

    <p className="mt-2 text-muted-foreground">
      Featured projects will appear here.
    </p>
  </div>
)}
  
</section>

<section className="mt-16">
  <h2 className="mb-8 text-4xl font-bold">
    Other Projects
  </h2>

  <div className="grid gap-8 md:grid-cols-2">
    {otherProjects.length > 0 ? (
  otherProjects.map((project: Project) => (
    <div
      key={project._id}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        bg-card
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="
            h-60
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-medium
                bg-muted/50
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                hover:bg-muted
              "
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-xl
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                hover:bg-muted
              "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  ))
) : (
  <div className="col-span-full rounded-3xl border p-10 text-center">
    <p className="text-muted-foreground">
      No additional projects available.
    </p>
  </div>
)}
  </div>
</section>

<section className="mt-12">
  <h2 className="mb-8 text-3xl font-bold">
  Experience
</h2>

  <div className="relative ml-4 border-l-2 border-muted space-y-8 pl-10">
    {experiences.length === 0 ? (
  <div className="rounded-3xl border p-10 text-center">
    <p className="text-muted-foreground">
      No experience added yet.
    </p>
  </div>
) : (
  experiences.map(
    (experience: Experience) => (
      <div
        key={experience._id}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          bg-card
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:shadow-xl
          hover:-translate-y-1
        "
      >
        <div
          className="
            absolute
            -left-[51px]
            top-8
            h-5
            w-5
            rounded-full
            border-4
            border-background
            bg-primary
          "
        />

        <h3 className="text-2xl font-bold tracking-tight">
          {experience.position}
        </h3>

        <p
          className="
            mt-2
            text-base
            font-semibold
            text-primary
          "
        >
          {experience.company}
        </p>

        <p
          className="
            mt-3
            inline-flex
            rounded-full
            bg-muted
            px-3
            py-1
            text-xs
            font-medium
          "
        >
          {new Date(
            experience.startDate
          ).toLocaleDateString()}
          {" - "}
          {experience.current
            ? "Present"
            : experience.endDate
            ? new Date(
                experience.endDate
              ).toLocaleDateString()
            : "N/A"}
        </p>

        {experience.description && (
          <p
            className="
              mt-5
              leading-7
              text-muted-foreground
            "
          >
            {experience.description}
          </p>
        )}
      </div>
    )
  )
)}
  </div>
</section>

<section className="mt-12">
  <h2 className="mb-8 text-3xl font-bold">
    Education
  </h2>

  <div className="relative ml-4 border-l-2 border-muted space-y-8 pl-10">
    {education.length === 0 ? (
  <div className="rounded-3xl border p-10 text-center">
    <p className="text-muted-foreground">
      No education records added yet.
    </p>
  </div>
) : (
    education.map(
      (edu: Education) => (
        <div
          key={edu._id}
          className="
  relative
  rounded-2xl
  border
  p-6
  shadow-sm
  transition-all
  hover:-translate-y-1
  hover:shadow-lg
"
        >
          <div
  className="
    absolute
    -left-[51px]
    top-8
    h-5
    w-5
    rounded-full
    border-4
    border-background
    bg-primary
  "
/>
          <h3 className="text-2xl font-bold">
            {edu.degree}
          </h3>

          <p className="
  mt-1
  text-base
  font-medium
  text-muted-foreground
">
            {edu.institution}
          </p>

          <p className="
  mt-2
  text-sm
  text-muted-foreground
">
            {edu.fieldOfStudy}
          </p>

          <p className="
  mt-3
  text-sm
  font-medium
  text-muted-foreground
">
            {new Date(
              edu.startDate
            ).toLocaleDateString()}
            {" - "}
            {edu.current
              ? "Present"
              : edu.endDate
              ? new Date(
                  edu.endDate
                ).toLocaleDateString()
              : "N/A"}
          </p>

          {edu.description && (
            <p className="
  mt-4
  leading-relaxed
">
              {edu.description}
            </p>
          )}
        </div>
      )
    )
    )}
  </div>
</section>

<section className="mt-24 text-center">
  <h2 className="text-3xl font-bold">
    Let's Work Together
  </h2>

  <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
    I'm always interested in new opportunities,
    freelance projects, and collaborations.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    {profile.resumeUrl && (
      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-lg
          border
          px-6
          py-3
          font-medium
          transition-all
          hover:bg-muted
        "
      >
        Download Resume
      </a>
    )}

    {profile.linkedin && (
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-lg
          border
          px-6
          py-3
          font-medium
          transition-all
          hover:bg-muted
        "
      >
        LinkedIn
      </a>
    )}
  </div>
</section>
        </div>
      </section>
    </main>
  );
}