import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800/70 bg-zinc-950/50 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-emerald-400">$</span>{" "}
          <span className="text-zinc-100">cd</span>{" "}
          <span className="text-zinc-500">~/</span>
          <span className="text-zinc-100">diammd</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
