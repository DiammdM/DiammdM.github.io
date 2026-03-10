import Link from "next/link";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { toYouTubeEmbedUrl } from "@/lib/youtube";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const demoProjects = projects.filter(
    (project): project is (typeof projects)[number] & { demoUrl: string } =>
      typeof project.demoUrl === "string",
  );
  const highlights = [
    { label: "Projects Listed", value: String(projects.length) },
    { label: "Demo Videos", value: String(demoProjects.length) },
    { label: "Core Focus", value: "Web + AI" },
  ];

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card fade-up p-6 sm:p-8">
          <p className="kicker">Software Engineer Portfolio</p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[rgba(21,32,43,0.72)] sm:text-xl">
            {site.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.links.resume} className="primary-btn">
              View Resume
            </a>
            <Link href="/#selected-work" className="ghost-btn">
              Explore Work
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="pill">Product Engineering</span>
            <span className="pill">Web3 Experiences</span>
            <span className="pill">RAG Systems</span>
            <span className="pill">LangChain Agents</span>
          </div>
        </article>

        <article className="surface-card fade-up delay-1 flex h-full flex-col justify-between p-6">
          <div>
            <p className="kicker">Snapshot</p>
            <p className="mt-3 text-sm text-[rgba(21,32,43,0.7)]">
              {site.title} focused on building reliable user-facing products with clear technical tradeoffs and practical LangChain-based agent workflows.
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[rgba(21,32,43,0.1)] bg-white/75 px-4 py-3"
              >
                <p className="font-mono-ui text-xs uppercase tracking-wide text-[rgba(21,32,43,0.52)]">
                  {item.label}
                </p>
                <p className="font-display mt-1 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="surface-card fade-up delay-1 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="kicker">Connect</p>
            <h2 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
              Find me online
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="pill" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="pill" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="pill" href={site.links.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </section>

      {demoProjects.length > 0 ? (
        <section className="surface-card fade-up delay-2 overflow-hidden p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
            <div>
              <p className="kicker">Project Demos</p>
              <h2 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
                Demo Gallery
              </h2>
              <p className="mt-2 text-sm text-[rgba(21,32,43,0.72)]">
                Product walkthroughs for shipped projects.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {demoProjects.map((project) => (
              <article key={project.slug} className="rounded-2xl border border-[rgba(21,32,43,0.14)] bg-white/75 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="kicker">{project.slug}</p>
                    <h3 className="font-display mt-1 text-xl font-semibold">{project.name}</h3>
                    <p className="mt-2 text-sm text-[rgba(21,32,43,0.72)]">{project.summary}</p>
                  </div>
                  <a
                    className="ghost-btn"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-[rgba(21,32,43,0.14)] bg-black/85">
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
              </article>
            ))}
          </div>

          {demoProjects.find((p) => p.slug === "ragify") ? null : (
            <div className="mt-4 rounded-2xl border border-dashed border-[rgba(21,32,43,0.2)] bg-white/55 px-4 py-3 text-sm text-[rgba(21,32,43,0.72)]">
              Ragify demo card is ready. Add its YouTube `demoUrl` in <code>src/lib/projects.ts</code> and it will show here automatically.
            </div>
          )}
        </section>
      ) : null}

      <section id="selected-work" className="fade-up delay-3 flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="kicker">Selected Work</p>
            <h2 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <a href={site.links.github} target="_blank" rel="noreferrer" className="ghost-btn">
            More on GitHub
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}/`}
              className="surface-card group p-5 transition duration-200 hover:-translate-y-1"
            >
              <p className="kicker">{project.slug}</p>
              <h3 className="font-display mt-2 text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-[rgba(21,32,43,0.72)]">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold text-[rgb(10,90,84)] opacity-0 transition group-hover:opacity-100">
                Read case study →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
