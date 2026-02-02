import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href={site.links.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
        <div>© {new Date().getFullYear()} {site.name}</div>
      </div>
    </footer>
  );
}
