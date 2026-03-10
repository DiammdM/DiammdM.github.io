import { site } from "@/lib/site";

const principles = [
  "Prefer simple architecture before adding abstractions.",
  "Ship vertical slices early, then optimize with real feedback.",
  "Design interfaces that feel clear, not clever.",
  "Balance product speed with maintainable code quality.",
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="surface-card fade-up p-6 sm:p-7">
        <p className="kicker">About Me</p>
        <h1 className="font-display mt-2 text-4xl font-semibold sm:text-5xl">{site.name}</h1>
        <p className="mt-3 max-w-3xl text-base text-[rgba(21,32,43,0.72)] sm:text-lg">
          {site.title} building reliable web products with a focus on practical AI systems, LangChain agent development, and polished end-user experience.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card fade-up delay-1 p-6">
          <p className="kicker">How I Work</p>
          <ul className="mt-4 space-y-3">
            {principles.map((item) => (
              <li key={item} className="rounded-2xl border border-[rgba(21,32,43,0.1)] bg-white/75 px-4 py-3 text-sm text-[rgba(21,32,43,0.8)]">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-card fade-up delay-2 p-6">
          <p className="kicker">Links</p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="surface-card-strong rounded-2xl px-4 py-3"
            >
              <p className="font-display text-lg font-semibold">GitHub</p>
              <p className="mt-1 text-sm text-[rgba(21,32,43,0.66)]">{site.links.github}</p>
            </a>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="surface-card-strong rounded-2xl px-4 py-3"
            >
              <p className="font-display text-lg font-semibold">LinkedIn</p>
              <p className="mt-1 text-sm text-[rgba(21,32,43,0.66)]">{site.links.linkedin}</p>
            </a>

            <a
              href={site.links.telegram}
              target="_blank"
              rel="noreferrer"
              className="surface-card-strong rounded-2xl px-4 py-3"
            >
              <p className="font-display text-lg font-semibold">Telegram</p>
              <p className="mt-1 text-sm text-[rgba(21,32,43,0.66)]">{site.links.telegram}</p>
            </a>

            <a href={site.links.resume} className="surface-card-strong rounded-2xl px-4 py-3">
              <p className="font-display text-lg font-semibold">Resume</p>
              <p className="mt-1 text-sm text-[rgba(21,32,43,0.66)]">{site.url}/resume.pdf</p>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
