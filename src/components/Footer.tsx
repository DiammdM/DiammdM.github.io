import { site } from "@/lib/site";

const links = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.telegram, label: "Telegram" },
  { href: site.links.resume, label: "Resume" },
];

export function Footer() {
  return (
    <footer className="border-t soft-divider bg-[rgba(255,255,255,0.58)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-base font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-[rgba(21,32,43,0.62)]">{site.title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="pill"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="font-mono-ui text-xs text-[rgba(21,32,43,0.55)]">
          © {new Date().getFullYear()} built with Next.js
        </p>
      </div>
    </footer>
  );
}
