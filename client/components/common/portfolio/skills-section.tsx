import ScaleIn from "./animations/scale-in";

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({
  skills,
}: SkillsSectionProps) {
  return (
    <section className="mt-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500">
          Expertise
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Technical Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Technologies, frameworks and tools I use to build modern web
          applications.
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <ScaleIn key={skill}>
          <div
            key={skill}
            className="
              group
              relative
              overflow-hidden
              rounded-full
              border
             border-white/10
bg-slate-900/80
backdrop-blur-md
              px-6
              py-3
              shadow-[0_0_20px_rgba(34,211,238,0.04)]
              transition-all
              duration-300
              hover:-translate-y-1
             hover:border-cyan-400/60
hover:bg-cyan-500/10
hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/0
                via-cyan-500/5
                to-cyan-500/0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <span
              className="
                relative
               text-sm
font-semibold
tracking-wide
text-slate-200
              "
            >
              {skill}
            </span>
          </div>
          </ScaleIn>
        ))}
      </div>
  
    </section>
  );
}