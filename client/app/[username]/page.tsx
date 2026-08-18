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

async function getProfile(username: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/profile/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  

  return data.data as Profile;
}

async function getProjects(username: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/user/${username}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.data;
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

const experiences =
  portfolio.experiences;

const education =
  portfolio.education;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col items-center text-center">
        {profile.profileImage && (
          <Image
            src={profile.profileImage}
            alt={profile.fullName}
            width={160}
            height={160}
            className="h-40 w-40 rounded-full object-cover"
          />
        )}

        <h1 className="mt-6 text-5xl font-bold">
          {profile.fullName}
        </h1>

        <p className="mt-3 text-xl text-muted-foreground">
          {profile.headline}
        </p>

        <p className="mt-6 max-w-2xl">
          {profile.bio}
        </p>

        {profile.location && (
          <p className="mt-4">
            📍 {profile.location}
          </p>
        )}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill: string) => (
  <span
    key={skill}
    className="rounded-full border px-4 py-2"
  >
    {skill}
  </span>
))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Links
        </h2>

        <div className="flex flex-col gap-3">
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              className="underline"
            >
              Website
            </a>
          )}

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>
          )}

          {profile.resumeUrl && (
  <a
    href={profile.resumeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-lg border px-4 py-2 font-medium hover:bg-gray-100"
  >
    View Resume
  </a>
)}

<section className="mt-12">
  <h2 className="mb-6 text-3xl font-bold">
    Projects
  </h2>

  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((project: Project) => (
      <div
        key={project._id}
        className="overflow-hidden rounded-xl border"
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="h-52 w-full object-cover"
          />
        )}

        <div className="p-5">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-xs"
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
                className="rounded-lg border px-4 py-2 text-sm"
              >
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="mt-12">
  <h2 className="mb-6 text-3xl font-bold">
    Experience
  </h2>

  <div className="space-y-6">
    {experiences.map(
      (experience: Experience) => (
        <div
          key={experience._id}
          className="rounded-xl border p-5"
        >
          <h3 className="text-xl font-semibold">
            {experience.position}
          </h3>

          <p className="text-muted-foreground">
            {experience.company}
          </p>

          <p className="text-sm mt-2">
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
            <p className="mt-3">
              {experience.description}
            </p>
          )}
        </div>
      )
    )}
  </div>
</section>

<section className="mt-12">
  <h2 className="mb-6 text-3xl font-bold">
    Education
  </h2>

  <div className="space-y-6">
    {education.map(
      (edu: Education) => (
        <div
          key={edu._id}
          className="rounded-xl border p-5"
        >
          <h3 className="text-xl font-semibold">
            {edu.degree}
          </h3>

          <p className="text-muted-foreground">
            {edu.institution}
          </p>

          <p className="text-sm">
            {edu.fieldOfStudy}
          </p>

          <p className="text-sm mt-2">
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
            <p className="mt-3">
              {edu.description}
            </p>
          )}
        </div>
      )
    )}
  </div>
</section>
        </div>
      </section>
    </main>
  );
}