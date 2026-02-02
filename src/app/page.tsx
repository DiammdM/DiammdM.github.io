import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
              // software engineer
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.name}
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {site.title}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {site.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              <a
                className="rounded-md border border-zinc-200 bg-white/40 px-4 py-2 font-mono text-xs text-zinc-800 backdrop-blur hover:border-zinc-300 hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/70"
                href={site.links.resume}
              >
                resume.pdf
              </a>
              <a
                className="rounded-md border border-zinc-200 bg-white/40 px-4 py-2 font-mono text-xs text-zinc-800 backdrop-blur hover:border-zinc-300 hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/70"
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              <a
                className="rounded-md border border-zinc-200 bg-white/40 px-4 py-2 font-mono text-xs text-zinc-800 backdrop-blur hover:border-zinc-300 hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/70"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <a
                className="rounded-md border border-zinc-200 bg-white/40 px-4 py-2 font-mono text-xs text-zinc-800 backdrop-blur hover:border-zinc-300 hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/70"
                href={site.links.telegram}
                target="_blank"
                rel="noreferrer"
              >
                telegram
              </a>
            </div>

            <div className="pt-2 text-sm text-zinc-500 dark:text-zinc-500">
              Focus: product engineering, web3 UX, and RAG pipelines.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white/40 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40">
            <div className="flex items-center gap-2 border-b border-zinc-200/70 px-4 py-2 dark:border-zinc-800/70">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <div className="ml-2 font-mono text-xs text-zinc-500">
                zsh — ~/diammd
              </div>
            </div>
            <div className="space-y-2 p-4 font-mono text-xs">
              <div>
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span className="text-zinc-900 dark:text-zinc-100">whoami</span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                software engineer · build things · ship
              </div>
              <div>
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span className="text-zinc-900 dark:text-zinc-100">
                  ls projects/
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
                {projects.slice(0, 3).map((p) => (
                  <span key={p.slug} className="truncate">
                    {p.slug}
                  </span>
                ))}
              </div>
              <div>
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span className="text-zinc-900 dark:text-zinc-100">
                  open projects/
                </span>
                <span className="text-zinc-500"> (click below)</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {projects.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="rounded-md border border-zinc-200 bg-white/30 px-2.5 py-1 text-zinc-700 hover:border-zinc-300 hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/60"
                  >
                    {p.slug}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Featured projects</h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-950/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {p.name}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {p.summary}
                  </div>
                </div>
                <div className="font-mono text-xs text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-emerald-400">
                  view →
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-200 bg-white/40 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
