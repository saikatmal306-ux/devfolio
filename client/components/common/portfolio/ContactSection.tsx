interface ContactSectionProps {
  resumeUrl?: string;
  linkedin?: string;
}

export default function ContactSection({
  resumeUrl,
  linkedin,
}: ContactSectionProps) {
  return (
    <section className="mt-24">
  <div
    className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-gradient-to-br
      from-slate-900
      via-slate-950
      to-slate-900
      px-8
      py-16
      text-center
      shadow-2xl
    "
  >
    <div
      className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_60%)]
        pointer-events-none
      "
    />

    <div className="relative z-10">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500">
        Let's Connect
      </p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
        Let's Work Together
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        I'm always interested in new opportunities,
        freelance projects, startup ideas and
        meaningful collaborations.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
          >
            Download Resume
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-6
              py-3
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-cyan-500/20
            "
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  </div>
</section>
  );
}