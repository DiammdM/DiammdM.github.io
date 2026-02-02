import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
          // projects
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Selected work — code, product decisions, and what I learned.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-950/60"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                  {p.name}
                </div>
                <span className="font-mono text-xs text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-emerald-400">
                  open →
                </span>
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {p.summary}
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-200 bg-white/40 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
