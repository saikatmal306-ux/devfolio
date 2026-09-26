import ScaleIn from "./animations/scale-in";

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

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({
  education,
}: EducationSectionProps) {
  return (
    <section className="mt-12">
  <div className="mb-10">
  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500">
    Academic Journey
  </p>

  <h2 className="mt-4 text-5xl font-bold tracking-tight">
    Education
  </h2>

  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
    Academic background, qualifications and continuous learning.
  </p>
</div>

   
  <div
  className="
    relative
    ml-4
    border-l
    border-cyan-500/20
    space-y-8
    pl-10
  "
>
    {education.length === 0 ? (
  <div
  className="
    rounded-3xl
    border
    border-dashed
    border-cyan-500/15
    bg-slate-950/40
    p-8
    text-center
  "
>
    <p className="text-muted-foreground">
      No education records added yet.
    </p>
  </div>
) : (
    education.map(
      (edu: Education) => (
        <ScaleIn key={edu._id}>
        <div
          key={edu._id}
          className="
  group
  relative
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-b
  from-slate-900
  to-slate-950
  p-8
  shadow-xl
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-cyan-500/20
  hover:shadow-cyan-500/10
  will-change-transform
"
        >
          <div
 className="
  absolute
  -left-[47px]
  top-10
  h-4
  w-4
  rounded-full
  bg-cyan-400
  shadow-[0_0_20px_rgba(34,211,238,0.8)]
"
/>

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

          <h3 className="
  text-3xl md:text-4xl
  font-bold
  tracking-tight
  text-white
  transition-colors
  duration-300
  group-hover:text-cyan-300
" >
            {edu.degree}
          </h3>

          <p className="
  mt-3
  text-lg
  font-semibold
  text-cyan-400
" >
            {edu.institution}
          </p>

          {edu.current && (
  <div
    className="
      mt-4
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-emerald-500/20
      bg-emerald-500/10
      px-3
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-[0.15em]
      text-emerald-300
    "
  >
    <span className="h-2 w-2 rounded-full bg-emerald-400" />
    Currently Studying
  </div>
)}

          <div className="mt-5 flex flex-wrap gap-3">
  <div
    className="
      inline-flex
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.15em]
      text-cyan-300
    "
  >
    {edu.fieldOfStudy}
  </div>

  <div
    className="
      inline-flex
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.15em]
      text-cyan-300
    "
  >
    {new Date(edu.startDate).toLocaleDateString()}
    {" - "}
    {edu.current
      ? "Present"
      : edu.endDate
      ? new Date(edu.endDate).toLocaleDateString()
      : "N/A"}
  </div>
</div>

          {edu.description && (
            <p className="
mt-6
leading-8
text-slate-300
" >
              {edu.description}
            </p>
          )}
        </div>
        </ScaleIn>
      )
    )
    )}
  </div>
  
</section>
  );
}