import * as React from "react";

export function TerminalBlock({
  title,
  lines,
}: {
  title?: string;
  lines: Array<{ prompt?: string; text: string; dim?: boolean }>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white/40 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40">
      <div className="flex items-center gap-2 border-b border-zinc-200/70 px-4 py-2 dark:border-zinc-800/70">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        {title ? (
          <div className="ml-2 font-mono text-xs text-zinc-500">{title}</div>
        ) : null}
      </div>
      <div className="space-y-2 p-4 font-mono text-xs">
        {lines.map((l, idx) => (
          <div key={idx} className={l.dim ? "text-zinc-600 dark:text-zinc-400" : ""}>
            {l.prompt ? (
              <>
                <span className="text-emerald-600 dark:text-emerald-400">$</span>{" "}
                <span className="text-zinc-900 dark:text-zinc-100">{l.prompt}</span>
                {l.text ? <span className="text-zinc-500"> {l.text}</span> : null}
              </>
            ) : (
              l.text
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
