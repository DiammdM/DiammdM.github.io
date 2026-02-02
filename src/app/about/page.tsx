import { TerminalBlock } from "@/components/TerminalBlock";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
          // about
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A quick snapshot of what I do and what I’m into.
        </p>
      </header>

      <TerminalBlock
        title="profile.json"
        lines={[
          { prompt: "cat profile.json", text: "" },
          {
            text: `name: ${site.name}`,
            dim: true,
          },
          {
            text: `role: ${site.title}`,
            dim: true,
          },
          {
            text: "interests: product engineering, web3 UX, RAG systems",
            dim: true,
          },
          {
            prompt: "open links",
            text: "(below)",
          },
        ]}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          className="rounded-xl border border-zinc-200 bg-white/30 p-4 font-mono text-xs text-zinc-700 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:bg-zinc-950/60"
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
        >
          github →
          <div className="mt-1 truncate text-zinc-500 dark:text-zinc-500">
            {site.links.github}
          </div>
        </a>
        <a
          className="rounded-xl border border-zinc-200 bg-white/30 p-4 font-mono text-xs text-zinc-700 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:bg-zinc-950/60"
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          linkedin →
          <div className="mt-1 truncate text-zinc-500 dark:text-zinc-500">
            {site.links.linkedin}
          </div>
        </a>
        <a
          className="rounded-xl border border-zinc-200 bg-white/30 p-4 font-mono text-xs text-zinc-700 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:bg-zinc-950/60"
          href={site.links.telegram}
          target="_blank"
          rel="noreferrer"
        >
          telegram →
          <div className="mt-1 truncate text-zinc-500 dark:text-zinc-500">
            {site.links.telegram}
          </div>
        </a>
        <a
          className="rounded-xl border border-zinc-200 bg-white/30 p-4 font-mono text-xs text-zinc-700 backdrop-blur transition-colors hover:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 dark:hover:bg-zinc-950/60"
          href={site.links.resume}
        >
          resume →
          <div className="mt-1 truncate text-zinc-500 dark:text-zinc-500">
            {site.url}/resume.pdf
          </div>
        </a>
      </div>
    </div>
  );
}
