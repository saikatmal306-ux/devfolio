
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Portfolio Not Found
      </h2>

      <p className="mt-3 text-muted-foreground">
        The portfolio you are looking for does not exist.
      </p>

      <Link
        href="/login"
        className="
          mt-8
          rounded-lg
          border
          px-6
          py-3
          font-medium
          transition-all
          hover:bg-muted
        "
      >
        Back Home
      </Link>
    </div>
  );
}

