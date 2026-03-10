"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b soft-divider bg-[rgba(255,253,248,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="surface-card-strong flex items-center gap-2 px-4 py-2 text-sm"
        >
          <span className="font-display text-[0.95rem] font-semibold">Diammd</span>
          <span className="font-mono-ui text-xs text-[rgba(21,32,43,0.56)]">
            portfolio
          </span>
        </Link>

        <nav className="surface-card flex items-center gap-1 p-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-[rgba(14,127,120,0.14)] text-[rgb(10,76,71)]"
                    : "text-[rgba(21,32,43,0.72)] hover:bg-white hover:text-[rgb(21,32,43)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
