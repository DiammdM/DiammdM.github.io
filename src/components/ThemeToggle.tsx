"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="rounded-md border border-zinc-200 bg-white/40 px-2.5 py-1.5 text-xs text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
        aria-label="Toggle theme"
      >
        theme
      </button>
    );
  }

  const resolved = theme === "system" ? systemTheme : theme;
  const next = resolved === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next)}
      className="rounded-md border border-zinc-200 bg-white/40 px-2.5 py-1.5 text-xs text-zinc-600 backdrop-blur hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {resolved === "dark" ? "light" : "dark"}
    </button>
  );
}
