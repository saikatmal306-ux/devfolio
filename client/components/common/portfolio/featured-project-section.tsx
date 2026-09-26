import Image from "next/image";

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

interface FeaturedProjectSectionProps {
  featuredProject?: Project;
}

export default function FeaturedProjectSection({
  featuredProject,
}: FeaturedProjectSectionProps) {
  return (
    <section className="mt-16">
      <div className="mb-10">
  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500">
    Portfolio Highlight
  </p>

  <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
  Featured Project
</h2>

  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
    A selected project showcasing architecture, design and engineering quality.
  </p>
</div>

      {featuredProject ? (
        <div
className="
group
relative
overflow-hidden
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
rounded-[32px]
border
border-white/10
bg-gradient-to-b
from-slate-900
to-slate-950
shadow-2xl
shadow-cyan-950/40
"
        >
          {featuredProject.image && (
            <div
  className="
    overflow-hidden
    border-b
  "
>
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              width={1400}
              height={700}
              className="
 h-[350px]
md:h-[550px]
  w-full
  object-cover
  transition-transform
  duration-700
 group-hover:scale-105
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

          <div className="p-8 md:p-14">
            <div
  className="
    inline-flex
    rounded-full
    border
    border-cyan-500/20
   bg-cyan-500/15
    px-4
    py-2
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
   text-cyan-300
  "
>
  Featured Case Study
</div>
            <h3
className="
mt-6
text-4xl
md:text-6xl
font-bold
leading-tight
tracking-tight
text-white
group-hover:text-cyan-300
transition-colors
duration-300
"
>
              {featuredProject.title}
            </h3>

            <p
className="
mt-8
max-w-3xl
text-lg
md:text-xl
leading-relaxed
text-slate-300
"
>
              {featuredProject.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {featuredProject.techStack.map(
                (tech) => (
                  <span
                    key={tech}
                    className="
rounded-full
border
border-cyan-500/20
bg-cyan-500/10
px-4
py-2
text-sm
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
                )
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
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
border-white/10
bg-white/5
px-6
py-3
font-medium
text-white
transition-all
duration-300
hover:bg-white/10
hover:-translate-y-1
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
bg-cyan-500
px-6
py-3
font-semibold
text-slate-950
transition-all
duration-300
hover:bg-cyan-400
hover:-translate-y-1
hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
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
  );
}