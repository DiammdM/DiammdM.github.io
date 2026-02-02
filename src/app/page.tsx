import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            {site.title}
          </p>
        </div>

        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {site.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <a
            className="rounded-full border border-zinc-200 px-4 py-2 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            href={site.links.resume}
          >
            Resume
          </a>
          <a
            className="rounded-full border border-zinc-200 px-4 py-2 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-zinc-200 px-4 py-2 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-zinc-200 px-4 py-2 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            href={site.links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>

        <div className="pt-2 text-sm text-zinc-500 dark:text-zinc-500">
          Currently exploring: building products end-to-end, Web3 UX, and RAG
          pipelines.
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

        <div className="grid gap-4">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-xl border border-zinc-200 p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {p.summary}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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
