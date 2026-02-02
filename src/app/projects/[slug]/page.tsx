import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

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
            className="hover:text-zinc-950 dark:hover:text-white"
          >
            ← Projects
          </Link>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.name}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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
            className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            View repo on GitHub →
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {project.details.overview}
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">Highlights</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
          {project.details.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.details.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
