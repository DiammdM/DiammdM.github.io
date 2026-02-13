import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { toYouTubeEmbedUrl } from "@/lib/youtube";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          <Link
            href="/projects"
            className="font-mono text-xs hover:text-zinc-950 dark:hover:text-white"
          >
            ← cd ../projects
          </Link>
        </div>
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
          // project
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.name}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-zinc-200 bg-white/40 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-200 bg-white/40 px-3 py-2 font-mono text-xs text-zinc-800 backdrop-blur hover:border-zinc-300 hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-950/70"
          >
            open repo →
          </a>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30">
          <h2 className="mb-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            // overview
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {project.details.overview}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30">
          <h2 className="mb-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            // stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.details.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-zinc-200 bg-white/40 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {project.demoUrl ? (
        <section className="rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
              // demo
            </h2>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              open on youtube →
            </a>
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200 bg-black/20 dark:border-zinc-800">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={toYouTubeEmbedUrl(project.demoUrl)}
                title={`${project.name} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="rounded-xl border border-zinc-200 bg-white/30 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/30">
        <h2 className="mb-3 font-mono text-xs text-emerald-600 dark:text-emerald-400">
          // highlights
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
          {project.details.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
