import { site } from "@/lib/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>About</h1>
      <p>
        I’m <strong>{site.name}</strong>, a software engineer focused on building
        clean, reliable products.
      </p>
      <p>
        I like working across the stack (from UI to infra), and I’m especially
        interested in practical AI systems (RAG) and Web3 tooling.
      </p>
      <h2>Links</h2>
      <ul>
        <li>
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={site.links.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </li>
      </ul>
    </div>
  );
}
