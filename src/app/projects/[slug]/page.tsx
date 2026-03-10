import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { toYouTubeEmbedUrl } from "@/lib/youtube";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="surface-card fade-up p-6 sm:p-7">
        <Link
          href="/#selected-work"
          className="font-mono-ui text-xs text-[rgba(21,32,43,0.58)] hover:text-[rgb(21,32,43)]"
        >
          ← Back to home
        </Link>

        <p className="kicker mt-4">Project Detail</p>
        <h1 className="font-display mt-2 text-4xl font-semibold sm:text-5xl">{project.name}</h1>
        <p className="mt-3 max-w-3xl text-base text-[rgba(21,32,43,0.72)] sm:text-lg">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="primary-btn">
            View Repository
          </a>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="surface-card fade-up delay-1 p-6">
          <p className="kicker">Overview</p>
          <p className="mt-3 text-sm leading-7 text-[rgba(21,32,43,0.78)]">
            {project.details.overview}
          </p>
        </article>

        <article className="surface-card fade-up delay-1 p-6">
          <p className="kicker">Tech Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.details.stack.map((stack) => (
              <span key={stack} className="pill">
                {stack}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="surface-card fade-up delay-2 p-6">
        <p className="kicker">Highlights</p>
        <ul className="mt-4 space-y-3">
          {project.details.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-[rgba(21,32,43,0.1)] bg-white/75 px-4 py-3 text-sm text-[rgba(21,32,43,0.8)]"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      {project.demoUrl ? (
        <section className="surface-card fade-up delay-3 overflow-hidden p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="kicker">Demo</p>
              <h2 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">Live Walkthrough</h2>
            </div>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="ghost-btn">
              Open on YouTube
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-[rgba(21,32,43,0.14)] bg-black/85">
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
    </div>
  );
}
