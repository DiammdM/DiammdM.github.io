import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white/30 py-8 text-sm text-zinc-600 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-400">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.resume}>
            resume
          </a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.telegram} target="_blank" rel="noreferrer">
            telegram
          </a>
        </div>
        <div className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {site.name} · built with next.js
        </div>
      </div>
    </footer>
  );
}
