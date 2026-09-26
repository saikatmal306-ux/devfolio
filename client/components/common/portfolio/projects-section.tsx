import Image from "next/image";
import ScaleIn from "./animations/scale-in";

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

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
 return (
  <section className="mt-24">
    <div className="mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500">
        Portfolio Collection
      </p>

      <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
        Other Projects
      </h2>

      <p className="mt-5 max-w-3xl text-lg text-slate-400">
        A collection of products, experiments and applications built with
        modern technologies.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2">
      {projects.length > 0 ? (
        projects.map((project: Project) => (
          <ScaleIn key={project._id}>
            <div
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-gradient-to-b
              from-slate-900
              to-slate-950
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-500/30
              hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
            "
            >
              <div
                className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_60%)]
                pointer-events-none
              "
              />

              {project.image && (
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={600}
                    className="
                    h-72
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/20
                    to-transparent
                  "
                  />
                </div>
              )}

              <div className="p-8">
                <div
                  className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300
                "
                >
                  Project
                </div>

                <h3
                  className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-slate-400
                  leading-relaxed
                  min-h-[90px]
                "
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-cyan-300
                      transition-all
                      duration-300
                      hover:bg-cyan-500/20
                      hover:border-cyan-400/40
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white/10
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
                      bg-cyan-500
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-slate-950
                      transition-all
                      duration-300
                      hover:bg-cyan-400
                    "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScaleIn>
        ))
      ) : (
        <div
          className="
          col-span-full
          rounded-3xl
          border
          border-dashed
          border-cyan-500/20
          bg-slate-950/40
          p-16
          text-center
        "
        >
          <p className="text-slate-400">
            No additional projects available.
          </p>
        </div>
      )}
    </div>
  </section>
);
}