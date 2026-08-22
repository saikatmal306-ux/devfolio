export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 animate-pulse">
      <div className="flex flex-col items-center">
        <div className="h-44 w-44 rounded-full bg-muted" />

        <div className="mt-6 h-10 w-72 rounded bg-muted" />

        <div className="mt-4 h-6 w-56 rounded bg-muted" />

        <div className="mt-6 h-20 w-full max-w-2xl rounded bg-muted" />
      </div>

      <div className="mt-16 flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-10 w-28 rounded-full bg-muted"
          />
        ))}
      </div>

      <div className="mt-16 h-96 rounded-3xl bg-muted" />
    </div>
  );
}

